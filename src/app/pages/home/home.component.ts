import {
  Component, inject, signal, OnInit, AfterViewInit, OnDestroy, ChangeDetectionStrategy, ElementRef,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataService } from '../../core/data';
import { AnimationService } from '../../core/animation';

@Component({
  selector: 'app-home',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  private data = inject(DataService);
  private anim = inject(AnimationService);
  private el = inject(ElementRef);

  readonly marques = this.data.marques;
  readonly fruits = this.data.fruits;
  readonly realisations = this.data.realisations;

  readonly heroVisible = signal(false);
  readonly statsVisible = signal(false);
  readonly activeMarque = signal(0);

  readonly stats = [
    { valeur: '3',   suffix: '',  label: 'Marques Premium',   emoji: '🏆' },
    { valeur: '100', suffix: '%', label: 'Fruits Naturels',   emoji: '🌿' },
    { valeur: '500', suffix: '+', label: 'Agriculteurs',      emoji: '👨‍🌾' },
    { valeur: '50K', suffix: '+', label: 'Clients Satisfaits',emoji: '❤️' },
  ];

  readonly ticker = [
    '🍍 AnaJu — Saveur Ananas', '✦',
    '🍉 PastaFresh — Fraîcheur Pastèque', '✦',
    '🥭 Mangodélice — Délice Tropical', '✦',
    '🌿 100% Naturel', '✦',
    '🏆 Certifié Bio', '✦',
    '❤️ 50 000+ Clients', '✦',
  ];

  private rotationTimer: ReturnType<typeof setInterval> | null = null;

  ngOnInit(): void {
    setTimeout(() => this.heroVisible.set(true), 80);
    this.rotationTimer = setInterval(
      () => this.activeMarque.update(i => (i + 1) % this.marques().length),
      3800,
    );
  }

  ngAfterViewInit(): void {
    // Stats observer
    const statsEl = this.el.nativeElement.querySelector('#stats-section');
    if (statsEl) {
      new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) this.statsVisible.set(true); },
        { threshold: 0.25 },
      ).observe(statsEl);
    }
    // Particles
    const particlesEl = this.el.nativeElement.querySelector('#hero-particles');
    if (particlesEl) this.anim.initParticles(particlesEl, 14);
    // Tilt on hero card
    setTimeout(() => {
      const card = this.el.nativeElement.querySelector('.hero-card');
      if (card) this.anim.initTilt(card);
    }, 600);
  }

  ngOnDestroy(): void {
    if (this.rotationTimer) clearInterval(this.rotationTimer);
  }
}
