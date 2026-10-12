import { Component, contentChildren, effect, input } from '@angular/core';
import { UiAccordionItem } from '@shared/ui-accordion-item/ui-accordion-item';

@Component({
  selector: 'ui-accordion-group',
  standalone: true,
  imports: [],
  template: `<ng-content></ng-content>`,
})
export class UiAccordionGroupComponent {
  readonly firstOpen = input(true, { transform: Boolean });
  readonly items = contentChildren(UiAccordionItem);

  constructor() {
  effect(() => {
    const items = this.items();

    if (this.firstOpen() && items.length > 0) {
      this.closeAll();
      items[0].isOpen.set(true);
    }
  });

  // This won't run reactively, but initializes individual watchers
  this.items().forEach(item => {
    effect(() => {
      if (item.isOpen()) {
        this.closeAll(item);
      }
    });
  });
}


  private closeAll(except?: UiAccordionItem) {
    this.items().forEach(item => {
      if (item !== except) item.isOpen.set(false);
    });
  }
}
