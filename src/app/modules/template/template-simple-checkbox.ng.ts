import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-simple-checkbox',
  template: `
    <form>
      <label>
        <input type="checkbox" name="checkbox" [(ngModel)]="checkbox" />
        <span>Checkbox</span>
      </label>
      <button type="submit" (click)="submit()">Submit</button>
    </form>
  `,
  imports: [FormsModule],
})
export class TemplateSimpleCheckboxComponent {
  checkbox = signal(false);

  submit() {
    alert(this.checkbox());
  }
}
