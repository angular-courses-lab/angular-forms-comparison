import { Component } from '@angular/core';
import { ReactiveSimpleInputComponent } from './reactive-simple-input.ng';

@Component({
  selector: 'app-reactive-dashboard',
  template: ` <app-reactive-simple-input /> `,
  imports: [ReactiveSimpleInputComponent],
})
export class ReactiveDashboardComponent {}
