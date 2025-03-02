import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-simple-datalist',
  template: `
    <form>
      <label>
        <span>Datalist</span>
        <input type="text" name="datalist" list="datalist" [formControl]="control" />
        <datalist id="datalist">
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
        </datalist>
      </label>
      <button type="submit" (click)="submit()">Submit</button>
    </form>
  `,
  imports: [ReactiveFormsModule],
})
export class ReactiveSimpleDatalistComponent {
  control = new FormControl('');

  submit() {
    alert(this.control.value);
  }
}
