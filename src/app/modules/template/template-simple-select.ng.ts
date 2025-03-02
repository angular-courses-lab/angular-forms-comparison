import { Component } from '@angular/core';

import { signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-simple-select',
  template: `
    <form>
      <label>
        <span>Select</span>
        <select name="select" [(ngModel)]="select">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </select>
      </label>
      <button type="submit" (click)="submit()">Submit</button>
    </form>
  `,
  imports: [FormsModule],
})
export class TemplateSimpleSelectComponent {
  select = signal('');

  submit() {
    alert(this.select());
  }
}
