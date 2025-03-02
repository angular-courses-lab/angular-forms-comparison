import { Component } from '@angular/core';
import { TemplateSimpleInputComponent } from './template-simle-input.ng';

@Component({
  selector: 'app-template-dashboard',
  template: ` <app-template-simple-input /> `,
  imports: [TemplateSimpleInputComponent],
})
export class TemplateDashboardComponent {}
