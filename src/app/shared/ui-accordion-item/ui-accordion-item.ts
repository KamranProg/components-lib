import { CommonModule } from '@angular/common';
import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'ui-accordion-item',
  imports: [CommonModule],
  templateUrl: './ui-accordion-item.html',
  styleUrl: './ui-accordion-item.css',
})
export class UiAccordionItem {
  isOpen = signal(false);
  title = input<string>('');
  toggle() {
    this.isOpen.update((open) => !open);
  }
}
