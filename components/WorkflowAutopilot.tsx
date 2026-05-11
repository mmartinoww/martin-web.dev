'use client';

import { config } from '@fortawesome/fontawesome-svg-core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState, type CSSProperties } from 'react';

config.autoAddCss = false;

type ConfettiPiece = {
  x: number;
  y: number;
  r: number;
  delay: number;
  w: number;
  h: number;
  bg: string;
};

/** Even radial burst from toggle center (~360°), deterministic for SSR. */
function buildRadialConfetti(count: number): ConfettiPiece[] {
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

const confettiPieces = buildRadialConfetti(40);

const tasks = [
  'Хващащ окото дизайн',
  'Убийствени резултати за скорост',
  'Най-доброто SEO за класиране в Гугъл',
  'Качествена и бърза разработка',
  'Доволен клиент с минимална инвестиция за качеството',
  'Телефонът звъни. Имаш нов клиент!'
];

const STORAGE_KEY = 'workflow-autopilot-on';

export default function WorkflowAutopilot() {
  const [isOn, setIsOn] = useState(false);
  const [burstId, setBurstId] = useState(0);
  const [completedCount, setCompletedCount] = useState(0);

  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && localStorage.getItem(STORAGE_KEY) === '1') {
        setIsOn(true);
      }
    } catch {
      /* private mode / blocked */
    }
  }, []);

  useEffect(() => {
    try {
      if (typeof window === 'undefined') return;
      if (isOn) {
        localStorage.setItem(STORAGE_KEY, '1');
      } else {
        localStorage.removeItem(STORAGE_KEY);
      }
    } catch {
      /* ignore */
    }
  }, [isOn]);

  useEffect(() => {
    if (!isOn) return;

    const timers = tasks.map((_, index) =>
      window.setTimeout(() => {
        setCompletedCount(index + 1);
      }, 520 + index * 210),
    );

    return () => timers.forEach(window.clearTimeout);
  }, [isOn]);

  const toggleAutopilot = () => {
    const next = !isOn;

    setIsOn(next);
    setCompletedCount(0);

    if (next) {
      setBurstId((id) => id + 1);
    }
  };

  return (
    <section
      id="workflow-autopilot"
      className={`autopilot-section relative isolate overflow-visible px-4 py-10 md:py-20 ${isOn ? 'autopilot-section--on' : ''}`}
      aria-labelledby="workflow-autopilot-heading"
    >
      <div className="autopilot-bg-pale" aria-hidden />
      <div className="autopilot-bg-hero" aria-hidden>
        <div className="autopilot-bg-hero__base" />
        <div className="autopilot-bg-hero__fx" />
      </div>

      <div className="autopilot-bg-pulse" aria-hidden />

      <div className="autopilot-stars" aria-hidden>
        {Array.from({ length: 22 }).map((_, index) => (
          <span
            key={index}
            className="autopilot-star"
            style={
              {
                '--star-left': `${6 + ((index * 37) % 88)}%`,
                '--star-top': `${7 + ((index * 29) % 82)}%`,
                '--star-delay': `${(index % 7) * 0.22}s`,
                '--star-size': `${index % 4 === 0 ? 5 : index % 3 === 0 ? 3 : 2}px`,
              } as CSSProperties
            }
          />
        ))}
      </div>

      <div className="relative z-[2] mx-auto flex max-w-5xl flex-col items-center text-center">
        <h2
          id="workflow-autopilot-heading"
          className="autopilot-heading mb-7 flex flex-col items-center justify-center gap-x-4 gap-y-2 font-black leading-[0.98] tracking-[-0.07em]"
        >
          <span className="autopilot-heading__workflow mb-1">Преди Мартин</span>
          <button
            type="button"
            className="autopilot-switch border-1 border-white rounded-full mb-2"
            aria-pressed={isOn}
            aria-label={isOn ? 'Turn autopilot off' : 'Turn autopilot on'}
            onClick={toggleAutopilot}
          >
            <span className="autopilot-switch__track">
              <span className="autopilot-switch__thumb">
                <span className="autopilot-switch__thumb-face autopilot-switch__thumb-face--light" aria-hidden />
                <span className="autopilot-switch__thumb-face autopilot-switch__thumb-face--dark" aria-hidden />
              </span>
              {burstId > 0 && isOn ? <span key={`pulse-${burstId}`} className="autopilot-switch__pulse" /> : null}
            </span>
            {burstId > 0 && isOn ? (
              <span key={burstId} className="autopilot-confetti" aria-hidden>
                {confettiPieces.map((piece, index) => (
                  <span
                    key={index}
                    className="autopilot-confetti__piece"
                    style={
                      {
                        '--confetti-x': `${piece.x}px`,
                        '--confetti-y': `${piece.y}px`,
                        '--confetti-mid-x': `${piece.x * 0.58}px`,
                        '--confetti-mid-y': `${piece.y * 0.58}px`,
                        '--confetti-r': `${piece.r}deg`,
                        width: piece.w,
                        height: piece.h,
                        background: piece.bg,
                        animationDelay: `${piece.delay}s`,
                      } as CSSProperties
                    }
                  />
                ))}
              </span>
            ) : null}
          </button>
          <span className="autopilot-heading__autopilot">След Мартин</span>
        </h2>

        <p className="autopilot-subtitle mx-auto mb-10 max-w-xl text-sm font-medium leading-relaxed md:text-base">
          {isOn
            ? 'Давам ти убийствен дизайн, бърза разработка и карам клиента да ти звънне още преди да е прочел съдържанието. Така сайта ти е максимално добра инвестиция!'
            : 'Искаш клиентите да виждат сайта ти? Искаш да конвертираш кликовете в обаждания и работа? И всичко това сминимална инвестиция?'}
        </p>

        <div className="autopilot-task-list w-full max-w-[28rem]" role="list">
          {tasks.map((task, index) => (
            <div
              key={task}
              className={`autopilot-task ${index < completedCount ? 'autopilot-task--complete' : ''}`}
              role="listitem"
            >
              <span className="autopilot-task__check" aria-hidden>
                <FontAwesomeIcon
                  icon={faCheck}
                  className="autopilot-task__check-icon"
                  width={12}
                  height={12}
                />
              </span>
              <span className="autopilot-task__label">{task}</span>
              <span className="autopilot-task__complete">Complete</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
