import { Component } from '@angular/core';
import { UiAccordionGroupComponent } from '@shared/ui-accordion-group/ui-accordion-group';
import { UiAccordionItem } from '@shared/ui-accordion-item/ui-accordion-item';

@Component({
  selector: 'demos-accordion-demo',
  imports: [UiAccordionGroupComponent, UiAccordionItem],
  templateUrl: './accordion-demo.html',
  styleUrl: './accordion-demo.css'
})
export class AccordionDemoComponent {

}
