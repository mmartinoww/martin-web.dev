export type RadialConfettiPiece = {
  x: number;
  y: number;
  r: number;
  delay: number;
  w: number;
  h: number;
  bg: string;
};

/** Even radial burst from center (~360°), deterministic for SSR. */
export function buildRadialConfetti(count: number): RadialConfettiPiece[] {
  const palette = [
    '#f8ff7a',
    '#ffffff',
    '#7dd3fc',
    '#fb7185',
    '#fde68a',
    '#c4b5fd',
    '#67e8f9',
    '#fda4af',
    '#fef08a',
    '#bae6fd',
    '#f0abfc',
    '#bef264',
    '#fde047',
    '#93c5fd',
    '#fecdd3',
    '#a7f3d0',
    '#fef9c3',
    '#ddd6fe',
    '#f9a8d4',
  ];
  const golden = 2.39996322972865332;
  return Array.from({ length: count }, (_, i) => {
    const angle = i * golden;
    const ring = 0.55 + ((i * 7) % 5) * 0.09;
    const dist = (112 + ((i * 13) % 52)) * ring;
    const x = Math.cos(angle) * dist;
    const y = Math.sin(angle) * dist;
    return {
      x,
      y,
      r: ((i * 47) % 200) - 100,
      delay: (i % 14) / 900,
      w: 4 + (i % 4),
      h: 8 + (i % 7),
      bg: palette[i % palette.length]!,
    };
  });
}

/** Shared piece layout for Workflow toggle + Hero CTA bursts. */
export const RADIAL_CONFETTI_PIECES = buildRadialConfetti(40);
