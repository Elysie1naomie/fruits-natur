import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AnimationService {
  readonly scrollProgress = signal(0);

  private cursorDot: HTMLElement | null = null;
  private cursorRing: HTMLElement | null = null;
  private rafId = 0;
  private targetX = 0;
  private targetY = 0;
  private dotX = 0;
  private dotY = 0;
  private ringX = 0;
  private ringY = 0;

  initCursor(): void {
    if (typeof window === 'undefined' || window.matchMedia('(pointer: coarse)').matches) return;

    this.cursorDot = document.createElement('div');
    this.cursorDot.className = 'cursor-dot';
    this.cursorRing = document.createElement('div');
    this.cursorRing.className = 'cursor-ring';
    document.body.appendChild(this.cursorDot);
    document.body.appendChild(this.cursorRing);

    document.addEventListener('mousemove', (e: MouseEvent) => {
      this.targetX = e.clientX;
      this.targetY = e.clientY;
    });

    this.animateCursor();
  }

  private animateCursor(): void {
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const loop = () => {
      this.dotX = lerp(this.dotX, this.targetX, 0.4);
      this.dotY = lerp(this.dotY, this.targetY, 0.4);
      this.ringX = lerp(this.ringX, this.targetX, 0.1);
      this.ringY = lerp(this.ringY, this.targetY, 0.1);
      if (this.cursorDot) {
        this.cursorDot.style.left = `${this.dotX}px`;
        this.cursorDot.style.top = `${this.dotY}px`;
      }
      if (this.cursorRing) {
        this.cursorRing.style.left = `${this.ringX}px`;
        this.cursorRing.style.top = `${this.ringY}px`;
      }
      this.rafId = requestAnimationFrame(loop);
    };
    loop();
  }

  initScrollProgress(): void {
    if (typeof window === 'undefined') return;
    const bar = document.createElement('div');
    bar.className = 'scroll-progress-bar';
    document.body.appendChild(bar);
    window.addEventListener('scroll', () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const pct = total > 0 ? (window.scrollY / total) * 100 : 0;
      bar.style.width = `${pct}%`;
      this.scrollProgress.set(pct / 100);
    }, { passive: true });
  }

  initScrollReveal(): void {
    if (typeof window === 'undefined') return;

    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          io.unobserve(e.target); // stop observing once visible
        }
      }),
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );

    // Observe all reveal elements
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale')
      .forEach(el => io.observe(el));

    // Force-show elements already in viewport after a short delay
    setTimeout(() => {
      document.querySelectorAll('.reveal:not(.visible), .reveal-left:not(.visible), .reveal-right:not(.visible), .reveal-scale:not(.visible)')
        .forEach(el => {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight) {
            el.classList.add('visible');
          }
        });
    }, 300);
  }

  initParticles(container: HTMLElement, count = 14): void {
    const colors = ['#f59e0b', '#f97316', '#ef4444', '#fbbf24', '#fb923c'];
    for (let i = 0; i < count; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      const size = Math.random() * 5 + 2;
      p.style.cssText = `
        width:${size}px; height:${size}px;
        left:${Math.random() * 100}%;
        background:${colors[Math.floor(Math.random() * colors.length)]};
        animation-duration:${Math.random() * 10 + 7}s;
        animation-delay:${Math.random() * 10}s;
      `;
      container.appendChild(p);
    }
  }

  initTilt(el: HTMLElement): void {
    el.addEventListener('mousemove', (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.transition = 'transform 0.08s ease';
      el.style.transform = `perspective(900px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) scale(1.02)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transition = 'transform 0.5s cubic-bezier(0.16,1,0.3,1)';
      el.style.transform = 'perspective(900px) rotateY(0deg) rotateX(0deg) scale(1)';
    });
  }

  destroy(): void {
    cancelAnimationFrame(this.rafId);
  }
}
