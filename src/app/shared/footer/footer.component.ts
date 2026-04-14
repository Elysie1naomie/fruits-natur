import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  readonly year = new Date().getFullYear();

  readonly links = [
    { path: '/',        label: 'Accueil' },
    { path: '/marques', label: 'Nos Marques' },
    { path: '/fruits',  label: 'Nos Fruits' },
    { path: '/contact', label: 'Contact' },
  ];

  readonly marques = [
    { label: '🍍 AnaJu',        path: '/marques/anaju' },
    { label: '🍉 PastaFresh',   path: '/marques/pastafresh' },
    { label: '🥭 Mangodélice',  path: '/marques/mangodelice' },
  ];

  readonly socials = [
    { label: 'Instagram', icon: '📸', url: '#' },
    { label: 'Facebook',  icon: '👥', url: '#' },
    { label: 'YouTube',   icon: '▶️', url: '#' },
  ];
}
