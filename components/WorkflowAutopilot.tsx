'use client';

import { config } from '@fortawesome/fontawesome-svg-core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLang } from '@/contexts/LanguageContext';
import { RADIAL_CONFETTI_PIECES } from '@/lib/radialConfetti';
import { useEffect, useState, type CSSProperties } from 'react';

config.autoAddCss = false;

const STORAGE_KEY = 'workflow-autopilot-on';

export default function WorkflowAutopilot() {
  const { t, lang } = useLang();
  const tasks = t.workflow.tasks;
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

    setCompletedCount(0);

    const timers = tasks.map((_, index) =>
      window.setTimeout(() => {
        setCompletedCount(index + 1);
      }, 520 + index * 210),
    );

    return () => timers.forEach(window.clearTimeout);
  }, [isOn, lang, tasks]);

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
      className={`autopilot-section relative isolate overflow-visible px-4 py-10 md:py-16 ${isOn ? 'autopilot-section--on' : ''}`}
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
          <span className="autopilot-heading__workflow mb-1">{t.workflow.headingBefore}</span>
          <button
            type="button"
            className="autopilot-switch border-1 border-white rounded-full mb-2"
            aria-pressed={isOn}
            aria-label={isOn ? t.workflow.ariaToggleOff : t.workflow.ariaToggleOn}
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
                {RADIAL_CONFETTI_PIECES.map((piece, index) => (
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
          <span className="autopilot-heading__autopilot">{t.workflow.headingAfter}</span>
        </h2>

        <p className="autopilot-subtitle mx-auto mb-10 max-w-xl text-sm font-medium leading-relaxed md:text-base">
          {isOn ? t.workflow.subOn : t.workflow.subOff}
        </p>

        <div className="autopilot-task-list w-full max-w-[28rem]" role="list">
          {tasks.map((task, index) => (
            <div
              key={`${lang}-${index}`}
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
              <span className="autopilot-task__complete">{t.workflow.taskComplete}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
