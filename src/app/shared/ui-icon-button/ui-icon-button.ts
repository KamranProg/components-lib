import { Component, input } from '@angular/core';

@Component({
  selector: 'ui-icon-button',
  standalone: true,
  templateUrl: './ui-icon-button.html',
  styleUrls: ['./ui-icon-button.css'],
})
export class UiIconButtonComponent {
  readonly ariaLabel = input<string>();
  readonly type = input<'button' | 'submit' | 'reset'>('button');
  readonly disabled = input<boolean>(false);
  readonly variant = input<'default' | 'filled' | 'ghost'>('default');
}
