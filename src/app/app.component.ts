import { Component } from '@angular/core';
import { TemplateSimpleInputComponent } from './modules/template/template-simle-input.ng';
import { ReactiveSimpleInputComponent } from './modules/reactive/reactive-simple-input.ng';

@Component({
  selector: 'app-root',
  imports: [TemplateSimpleInputComponent, ReactiveSimpleInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
