import { CommonModule } from '@angular/common';
import { Component, model } from '@angular/core';

@Component({
  selector: 'ui-faq-card',
  imports: [CommonModule],
  templateUrl: './ui-faq-card.html',
  styleUrl: './ui-faq-card.css',
})
export class UiFaqCardComponent {
  readonly isOpen = model(false);

  toggle() {
    this.isOpen.update((prev) => !prev);
  }
}
