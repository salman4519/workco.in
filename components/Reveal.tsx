'use client';

import { useEffect } from 'react';

/**
 * Scroll reveals and the hero parallax. Everything renders visible without JavaScript;
 * this only arms the animations, and anything already on screen at load is shown straight away.
 */
export default function Reveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const q = (sel: string) => Array.from(document.querySelectorAll<HTMLElement>(sel));
    const items: HTMLElement[] = [];
    const mark = (els: HTMLElement[], cls: string, step = 0, base = 0) =>
      els.forEach((el, k) => {
        el.classList.add(cls);
        if (step || base) el.style.setProperty('--d', `${base + k * step}s`);
        items.push(el);
      });

    q('.motto>span').forEach((el, k) => el.style.setProperty('--d', `${k * 0.18}s`));
    items.push(...q('.ws'));
    mark(q('main .label:not(.hero .label)'), 'rv');
    mark(q('main .lead:not(.hero .lead)'), 'rv', 0, 0.25);
    mark(q('.gallery .ph'), 'rv-img', 0.14);
    mark(q('.gallery figcaption'), 'rv', 0.14, 0.5);
    mark(q('.split-ph'), 'rv-img');
    if (window.innerWidth >= 640) mark(q('.plan'), 'rv', 0.1, 0.1);
    q('.rows').forEach((r) => mark(Array.from(r.querySelectorAll<HTMLElement>('.row')), 'rv', 0.1, 0.2));
    mark(q('.note,.small,.split-text .link'), 'rv', 0, 0.3);
    mark(q('.contact'), 'rv-line');
    mark(q('.contact>div'), 'rv', 0.12, 0.3);
    mark(q('.closing .ring'), 'in-ring');

    const vh = window.innerHeight;
    const now: HTMLElement[] = [];
    let pending: HTMLElement[] = [];
    items.forEach((el) => (el.getBoundingClientRect().top < vh * 0.92 ? now : pending).push(el));
    document.documentElement.classList.add('rv-on');
    requestAnimationFrame(() => requestAnimationFrame(() => now.forEach((el) => el.classList.add('in'))));

    // reveal anything that has reached the lower part of the screen, or been scrolled past
    const check = () => {
      const lim = window.innerHeight * 0.88;
      pending = pending.filter((el) => {
        if (el.getBoundingClientRect().top < lim) {
          el.classList.add('in');
          return false;
        }
        return true;
      });
    };

    // gentle parallax on the hero photo
    const photo = document.querySelector<HTMLElement>('.hero-photo');
    let tick = false;
    const frame = () => {
      tick = false;
      const y = window.scrollY;
      if (photo && y < vh * 1.2) photo.style.translate = `0 ${y * 0.28}px`;
      if (pending.length) check();
    };
    const onScroll = () => {
      if (!tick) {
        tick = true;
        requestAnimationFrame(frame);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', check);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', check);
    };
  }, []);

  return null;
}
