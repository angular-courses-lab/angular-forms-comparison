import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-simple-select',
  template: `
    <form>
      <label>
        <span>Select</span>
        <select name="select" [formControl]="control">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </select>
      </label>
      <button type="submit" (click)="submit()">Submit</button>
    </form>
  `,
  imports: [ReactiveFormsModule],
})
export class ReactiveSimpleSelectComponent {
  control = new FormControl('');

  submit() {
    alert(this.control.value);
  }
}
