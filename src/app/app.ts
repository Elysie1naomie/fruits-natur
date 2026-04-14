import { Component, inject, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AnimationService } from './core/animation';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  private anim = inject(AnimationService);
  private router = inject(Router);

  ngOnInit(): void {
    this.anim.initCursor();
    this.anim.initScrollProgress();
  }

  ngAfterViewInit(): void {
    this.anim.initScrollReveal();
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => setTimeout(() => this.anim.initScrollReveal(), 120));
  }

  ngOnDestroy(): void {
    this.anim.destroy();
  }
}
