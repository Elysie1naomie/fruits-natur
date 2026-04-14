import {
  Component, signal, HostListener, inject, AfterViewInit, ChangeDetectionStrategy,
} from '@angular/core';
import { RouterLink, RouterLinkActive, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements AfterViewInit {
  private router = inject(Router);

  readonly scrolled = signal(false);
  readonly menuOpen = signal(false);

  readonly navLinks = [
    { path: '/',        label: 'Accueil',     emoji: '🏠' },
    { path: '/marques', label: 'Nos Marques', emoji: '🏷️' },
    { path: '/fruits',  label: 'Nos Fruits',  emoji: '🍍' },
    { path: '/contact', label: 'Contact',     emoji: '✉️' },
  ];

  ngAfterViewInit(): void {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => this.menuOpen.set(false));
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 60);
  }

  toggleMenu(): void {
    this.menuOpen.update(v => !v);
  }
}
