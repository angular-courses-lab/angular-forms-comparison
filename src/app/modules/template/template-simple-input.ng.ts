import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-simple-input',
  template: `
    <form>
      <label>
        <span>Name</span>
        <input type="text" name="name" [(ngModel)]="name" />
      </label>
      <button type="submit" (click)="submit()">Submit</button>
    </form>
  `,
  imports: [FormsModule],
})
export class TemplateSimpleInputComponent {
  name = signal('');

  submit() {
    alert(this.name());
  }
}
