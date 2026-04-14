import {
  Component, inject, signal, AfterViewInit, ChangeDetectionStrategy,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataService, Marque } from '../../core/data';
import { AnimationService } from '../../core/animation';

@Component({
  selector: 'app-marques',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  templateUrl: './marques.component.html',
  styleUrl: './marques.component.scss',
})
export class MarquesComponent implements AfterViewInit {
  private data = inject(DataService);
  private anim = inject(AnimationService);

  readonly marques = this.data.marques;
  readonly selectedMarque = signal<Marque | null>(null);

  ngAfterViewInit(): void {
    setTimeout(() => this.anim.initScrollReveal(), 100);
  }

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}
