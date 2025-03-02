import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-simple-checkbox',
  template: `
    <form>
      <label>
        <input type="checkbox" [formControl]="control" />
        <span>Checkbox</span>
      </label>
      <button type="submit" (click)="submit()">Submit</button>
    </form>
  `,
  imports: [ReactiveFormsModule],
})
export class ReactiveSimpleCheckboxComponent {
  control = new FormControl(false);

  submit() {
    alert(this.control.value);
  }
}
