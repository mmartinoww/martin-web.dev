'use client';

type ProjectProfileThumbProps = {
  src: string;
  className?: string;
};

/** Circular “avatar” crest for portfolio previews — decorative; parent supplies position. */
export default function ProjectProfileThumb({ src, className = '' }: ProjectProfileThumbProps) {
  return (
    <div
      aria-hidden
      role="presentation"
      className={[
        'pointer-events-none size-[6rem] sm:size-[6.75rem] md:size-28 lg:size-[8rem] rounded-full overflow-hidden',
        'ring-[4px] ring-[var(--bg)] shadow-[0_14px_40px_rgba(0,0,0,0.32)]',
        'dark:shadow-[0_16px_48px_rgba(0,0,0,0.55)]',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <img
        src={src}
        alt=""
        width={256}
        height={256}
        loading="lazy"
        decoding="async"
        draggable={false}
        className="size-full object-cover object-top"
      />
    </div>
  );
}
