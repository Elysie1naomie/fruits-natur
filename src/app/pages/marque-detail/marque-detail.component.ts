import {
  Component, inject, signal, OnInit, ChangeDetectionStrategy,
} from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DataService, Marque } from '../../core/data';

@Component({
  selector: 'app-marque-detail',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  templateUrl: './marque-detail.component.html',
  styleUrl: './marque-detail.component.scss',
})
export class MarqueDetailComponent implements OnInit {
  private data = inject(DataService);
  private route = inject(ActivatedRoute);

  readonly marque = signal<Marque | null>(null);
  readonly videoOpen = signal(false);

  readonly features = [
    { emoji: '🌿', title: '100% Naturel', desc: 'Aucun additif, aucun conservateur. Juste le fruit dans toute sa splendeur naturelle.' },
    { emoji: '⚡', title: 'Pressé à Froid', desc: 'Notre technique préserve tous les nutriments et vitamines essentiels du fruit.' },
    { emoji: '🏆', title: 'Certifié Bio', desc: 'Fruits sélectionnés auprès d\'agriculteurs certifiés biologiques partenaires.' },
  ];

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.marque.set(this.data.marques().find(m => m.id === id) ?? null);
  }
}
