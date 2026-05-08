/**
 * Horizontal overflow audit (Playwright).
 * Simulates a permanent vertical scrollbar — often where 100vw / subpixel bugs show.
 * Usage: npm run start  OR  npm run dev  →  node scripts/check-horizontal-overflow.mjs
 */
import { chromium } from 'playwright';

const baseURL = process.env.BASE_URL ?? 'http://127.0.0.1:3000';
const viewports = [
  [320, 720],
  [375, 812],
  [390, 844],
  [768, 1024],
  [1024, 768],
  [1280, 720],
  [1920, 1080],
];

async function measure(page) {
  return page.evaluate(() => {
    const doc = document.documentElement;
    const body = document.body;
    const iw = window.innerWidth;
    const clientW = doc.clientWidth;
    const htmlSw = doc.scrollWidth;
    const bodySw = body.scrollWidth;
    return {
      iw,
      clientW,
      scrollbar: iw - clientW,
      htmlSw,
      bodySw,
      overflowVsInner: Math.max(htmlSw - iw, bodySw - iw, 0),
      overflowVsClient: Math.max(htmlSw - clientW, bodySw - clientW, 0),
    };
  });
}

async function offenders(page) {
  return page.evaluate(() => {
    const limit = window.innerWidth + 1;
    const list = [];
    for (const el of document.querySelectorAll('*')) {
      try {
        const cs = getComputedStyle(el);
        if (cs.display === 'none' || cs.visibility === 'hidden') continue;
        const r = el.getBoundingClientRect();
        if (r.width < 2 || r.height < 2) continue;
        const br = r.right - window.innerWidth;
        const bl = -r.left;
        if (bl > 3 || br > 3) {
          list.push({
            tag: el.tagName.toLowerCase(),
            id: el.id || '',
            class: typeof el.className === 'string' ? el.className.slice(0, 100) : '',
            bl: Math.round(bl * 100) / 100,
            br: Math.round(br * 100) / 100,
          });
        }
      } catch {
        /* ignore */
      }
    }
    list.sort((a, b) => Math.max(b.bl, b.br) - Math.max(a.bl, a.br));
    return list.slice(0, 20);
  });
}

const browser = await chromium.launch();
let fail = false;

try {
  for (const [width, height] of viewports) {
    const context = await browser.newContext({ viewport: { width, height } });
    const page = await context.newPage();

    await page.addStyleTag({
      content: `
        html { overflow-y: scroll !important; scrollbar-gutter: stable; }
      `,
    });

    await page.goto(baseURL, { waitUntil: 'networkidle', timeout: 120_000 });
    await page.waitForTimeout(600);

    const m = await measure(page);
    /** Any horizontal scrollability */
    const scrollableX = await page.evaluate(
      () =>
        Math.max(
          document.documentElement.scrollWidth - document.documentElement.clientWidth,
          document.body.scrollWidth - document.documentElement.clientWidth,
        ) > 2,
    );

    console.log(
      `\n── ${width}×${height} ── inner=${m.iw} client=${m.clientW} sb=${m.scrollbar}px | htmlSW=${m.htmlSw} bodySW=${m.bodySw}`,
    );
    console.log(
      `    overflow(vs inner)=${m.overflowVsInner}px  overflow(vs client)=${m.overflowVsClient}px  scrollable=${scrollableX}`,
    );

    if (m.overflowVsClient > 3 || scrollableX) {
      fail = true;
      const top = await offenders(page);
      console.log('  Samples past viewport edge:');
      for (const o of top.slice(0, 14)) {
        console.log(`    <${o.tag}${o.id ? '#' + o.id : ''}> L${o.bl} R${o.br} | ${o.class}`);
      }
    } else {
      console.log('  OK');
    }

    await context.close();
  }
} finally {
  await browser.close();
}

if (fail) {
  console.error('\ncheck-horizontal-overflow: FAIL');
  process.exit(1);
}
console.log('\ncheck-horizontal-overflow: PASS');
process.exit(0);
