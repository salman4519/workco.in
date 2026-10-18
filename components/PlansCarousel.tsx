'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { inr, plans, waLink } from '@/lib/site';

/** Four plan cards side by side on wider screens; a coverflow carousel on phones. */
export default function PlansCarousel() {
  const track = useRef<HTMLDivElement>(null);
  const slides = useRef<(HTMLDivElement | null)[]>([]);
  const [current, setCurrent] = useState(0);
  const [mobile, setMobile] = useState(false);

  const centerOf = (el: HTMLElement) => el.offsetLeft + el.offsetWidth / 2;

  const go = useCallback((i: number, instant = false) => {
    const t = track.current;
    const s = slides.current[Math.max(0, Math.min(plans.length - 1, i))];
    if (!t || !s) return;
    t.scrollTo({ left: centerOf(s) - t.clientWidth / 2, behavior: instant ? 'auto' : 'smooth' });
  }, []);

  useEffect(() => {
    const t = track.current;
    if (!t) return;
    const mq = window.matchMedia('(max-width:639px)');
    let raf = 0;

    const paint = () => {
      raf = 0;
      setMobile(mq.matches);
      const mid = t.scrollLeft + t.clientWidth / 2;
      let best = 0;
      let bestD = Infinity;
      slides.current.forEach((s, i) => {
        const card = s?.firstElementChild as HTMLElement | null;
        if (!s || !card) return;
        if (!mq.matches) {
          card.style.scale = card.style.translate = s.style.zIndex = '';
          return;
        }
        const d = (centerOf(s) - mid) / s.offsetWidth;
        const a = Math.min(Math.abs(d), 1);
        card.style.scale = String(1 - 0.12 * a);
        card.style.translate = `${-Math.sign(d) * a * 30}% 0`;
        s.style.position = 'relative';
        s.style.zIndex = String(10 - Math.round(Math.min(Math.abs(d), 1.5) * 4));
        if (Math.abs(d) < bestD) {
          bestD = Math.abs(d);
          best = i;
        }
      });
      if (mq.matches) setCurrent(best);
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(paint);
    };

    // start on the Daily Pass
    if (mq.matches) go(0, true);
    paint();
    t.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      t.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      cancelAnimationFrame(raf);
    };
  }, [go]);

  const chevron = (d: string) => (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d={d} stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  return (
    <div className="plans-car">
      <button className="car-btn prev" type="button" aria-label="Previous plan" disabled={current === 0} onClick={() => go(current - 1)}>
        {chevron('M10 3L5 8l5 5')}
      </button>
      <button className="car-btn next" type="button" aria-label="Next plan" disabled={current === plans.length - 1} onClick={() => go(current + 1)}>
        {chevron('M6 3l5 5-5 5')}
      </button>
      <div className="plans" ref={track}>
        {plans.map((p, i) => (
          <div className="slide" key={p.name} ref={(el) => { slides.current[i] = el; }}>
            <article className={`plan${mobile && i === current ? ' active' : ''}`}>
              <div className="plan-top">
                <h3 className="nm">{p.name}</h3>
                {p.featured ? <span className="tag">Most popular</span> : null}
              </div>
              <div className="pr">{inr(p.price)}</div>
              <div className="per">{p.per}</div>
              <ul>
                {p.perks.map((k) => (
                  <li key={k}>{k}</li>
                ))}
              </ul>
              <a
                className="btn btn-ink"
                href={waLink(`Hi Workco, I'm interested in the ${p.name}${p.name === 'Daily Pass' ? '' : ' plan'}.`)}
                target="_blank"
                rel="noopener"
              >
                {p.cta}
              </a>
            </article>
          </div>
        ))}
      </div>
      <div className="car-dots" role="tablist" aria-label="Plans">
        {plans.map((p, i) => (
          <button key={p.name} type="button" aria-label={p.name} aria-current={i === current} onClick={() => go(i)} />
        ))}
      </div>
    </div>
  );
}
