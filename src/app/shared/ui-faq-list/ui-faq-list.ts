import { Component, signal } from '@angular/core';
import { UiFaqCardComponent } from '../ui-faq-card/ui-faq-card';
import { UiFaqBodyComponent } from '@shared/ui-faq-body/ui-faq-body';
import { UiFaqTitleComponent } from '@shared/ui-faq-title/ui-faq-title';

@Component({
  selector: 'ui-faq-list',
  imports: [UiFaqCardComponent, UiFaqTitleComponent, UiFaqBodyComponent],
  templateUrl: './ui-faq-list.html',
  styleUrl: './ui-faq-list.css',
})
export class UiFaqListComponent {
  readonly openFaqId = signal<number | null>(null);

  setOpenFaq(id: number) {
    this.openFaqId.set(this.openFaqId() === id ? null : id);
  }
}
