import { Component } from '@angular/core';
import { UiCardComponent } from '@shared/ui-card/ui-card';

@Component({
  selector: 'demos-card-demo',
  standalone: true,
  imports: [UiCardComponent],
  templateUrl: './card-demo.html',
})
export class CardDemoComponent {}
