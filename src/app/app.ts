import { Component } from '@angular/core';
import { IconButtonDemoComponent } from '@demos/icon-button-demo/icon-button-demo';
import { CardDemoComponent } from '@demos/card-demo/card-demo';
import { AccordionDemoComponent } from '@demos/accordion-demo/accordion-demo';
import { FaqListDemoComponent } from '@demos/faq-list-demo/faq-list-demo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IconButtonDemoComponent, CardDemoComponent, AccordionDemoComponent, FaqListDemoComponent],
  templateUrl: './app.html'
})
export class App {}
