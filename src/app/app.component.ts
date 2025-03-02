import { Component } from '@angular/core';
import { TemplateSimpleInputComponent } from './modules/template/template-simle-input.ng';
import { ReactiveSimpleInputComponent } from './modules/reactive/reactive-simple-input.ng';
import { ReactiveSimpleCheckboxComponent } from './modules/reactive/reactive-simple-checkbox.ng';
import { TemplateSimpleCheckboxComponent } from './modules/template/template-simple-checkbox.ng';

@Component({
  selector: 'app-root',
  imports: [
    TemplateSimpleInputComponent,
    ReactiveSimpleInputComponent,
    ReactiveSimpleCheckboxComponent,
    TemplateSimpleCheckboxComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
