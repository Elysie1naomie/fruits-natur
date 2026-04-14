import {
  Component, inject, signal, AfterViewInit, ChangeDetectionStrategy,
} from '@angular/core';
import { DataService, Fruit } from '../../core/data';
import { AnimationService } from '../../core/animation';

@Component({
  selector: 'app-fruits',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './fruits.component.html',
  styleUrl: './fruits.component.scss',
})
export class FruitsComponent implements AfterViewInit {
  private data = inject(DataService);
  private anim = inject(AnimationService);

  readonly fruits = this.data.fruits;
  readonly selected = signal<Fruit | null>(null);

  readonly process = [
    { num: 1, emoji: '🌱', titre: 'Sélection', desc: 'Fruits cueillis à maturité optimale chez nos agriculteurs partenaires certifiés.' },
    { num: 2, emoji: '🚚', titre: 'Transport', desc: 'Chaîne du froid maintenue de la ferme à notre atelier de production.' },
    { num: 3, emoji: '⚙️', titre: 'Pressage', desc: 'Pressage à froid pour préserver 100% des vitamines et nutriments.' },
    { num: 4, emoji: '🍹', titre: 'Mise en bouteille', desc: 'Conditionnement hygiénique sans additifs ni conservateurs artificiels.' },
  ];

  ngAfterViewInit(): void {
    setTimeout(() => this.anim.initScrollReveal(), 100);
  }

  toggle(fruit: Fruit): void {
    this.selected.update(v => v?.id === fruit.id ? null : fruit);
  }
}
