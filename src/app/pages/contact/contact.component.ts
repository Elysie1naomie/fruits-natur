import {
  Component, signal, AfterViewInit, inject, ChangeDetectionStrategy,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AnimationService } from '../../core/animation';

interface ContactForm {
  nom: string;
  email: string;
  sujet: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements AfterViewInit {
  private anim = inject(AnimationService);

  readonly sent = signal(false);
  readonly form: ContactForm = { nom: '', email: '', sujet: '', message: '' };

  readonly infos = [
    { emoji: '📍', label: 'Adresse',  valeur: '123 Avenue des Fruits, Abidjan, Côte d\'Ivoire' },
    { emoji: '📞', label: 'Téléphone', valeur: '+225 00 00 00 00' },
    { emoji: '✉️', label: 'Email',    valeur: 'contact@fruitsnatur.com' },
    { emoji: '🕐', label: 'Horaires', valeur: 'Lun - Ven : 8h00 - 18h00' },
  ];

  readonly sujets = ['Commande', 'Partenariat', 'Distribution', 'Autre'];

  ngAfterViewInit(): void {
    setTimeout(() => this.anim.initScrollReveal(), 100);
  }

  submit(): void {
    if (this.form.nom && this.form.email && this.form.message) {
      this.sent.set(true);
    }
  }

  reset(): void {
    this.form.nom = '';
    this.form.email = '';
    this.form.sujet = '';
    this.form.message = '';
    this.sent.set(false);
  }
}
