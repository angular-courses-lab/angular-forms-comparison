import { Component } from '@angular/core';
import { TemplateDashboardComponent } from './modules/template/template-dashboard.ng';
import { ReactiveDashboardComponent } from './modules/reactive/reactive-dashboard.ng';

@Component({
  selector: 'app-root',
  imports: [TemplateDashboardComponent, ReactiveDashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
