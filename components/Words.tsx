import type { ElementType } from 'react';

type Props = {
  text: string;
  as?: ElementType;
  className?: string;
  dot?: boolean;
  delay?: number;
};

/** Splits a heading into masked words so each one can rise into place on scroll. */
export default function Words({ text, as: Tag = 'span', className = '', dot = false, delay }: Props) {
  const words = text.split(' ');
  return (
    <Tag className={`ws ${className}`.trim()} style={delay ? ({ '--d': `${delay}s` } as React.CSSProperties) : undefined}>
      {words.map((w, i) => (
        <span key={i}>
          <span className="w">
            <span style={{ '--i': i } as React.CSSProperties}>
              {w}
              {dot && i === words.length - 1 ? <span className="dot">.</span> : null}
            </span>
          </span>
          {i < words.length - 1 ? ' ' : null}
        </span>
      ))}
    </Tag>
  );
}
