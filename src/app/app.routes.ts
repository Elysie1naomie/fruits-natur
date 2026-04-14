import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'marques',
    loadComponent: () =>
      import('./pages/marques/marques.component').then(m => m.MarquesComponent),
  },
  {
    path: 'marques/:id',
    loadComponent: () =>
      import('./pages/marque-detail/marque-detail.component').then(m => m.MarqueDetailComponent),
  },
  {
    path: 'fruits',
    loadComponent: () =>
      import('./pages/fruits/fruits.component').then(m => m.FruitsComponent),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact.component').then(m => m.ContactComponent),
  },
  { path: '**', redirectTo: '' },
];
