import { Component } from '@angular/core';
import { TemplateSimpleInputComponent } from './modules/template/template-simple-input.ng';
import { ReactiveSimpleInputComponent } from './modules/reactive/reactive-simple-input.ng';
import { ReactiveSimpleCheckboxComponent } from './modules/reactive/reactive-simple-checkbox.ng';
import { TemplateSimpleCheckboxComponent } from './modules/template/template-simple-checkbox.ng';
import { ReactiveSimpleRadioButtonsComponent } from './modules/reactive/reactive-simple-radio-buttons.ng';
import { TemplateSimpleRadioButtonsComponent } from './modules/template/template-simple-radio-buttons.ng';
import { ReactiveSimpleSelectComponent } from './modules/reactive/reactive-simple-select.ng';
import { TemplateSimpleSelectComponent } from './modules/template/template-simple-select.ng';

@Component({
  selector: 'app-root',
  imports: [
    TemplateSimpleInputComponent,
    ReactiveSimpleInputComponent,
    ReactiveSimpleCheckboxComponent,
    TemplateSimpleCheckboxComponent,
    ReactiveSimpleRadioButtonsComponent,
    TemplateSimpleRadioButtonsComponent,
    ReactiveSimpleSelectComponent,
    TemplateSimpleSelectComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
