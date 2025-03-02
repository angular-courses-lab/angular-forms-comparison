import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-simple-datalist',
  template: `
    <form>
      <label>
        <span>Datalist</span>
        <input
          type="text"
          name="datalist"
          list="datalist"
          [(ngModel)]="datalist"
        />
        <datalist id="datalist">
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
        </datalist>
      </label>
      <button type="submit" (click)="submit()">Submit</button>
    </form>
  `,
  imports: [FormsModule],
})
export class TemplateSimpleDatalistComponent {
  datalist = signal('');

  submit() {
    alert(this.datalist());
  }
}
