import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-simple-radio-buttons',
  template: `
    <form>
      <label>
        <input type="radio" name="radio" value="1" [formControl]="control" />
        <span>Radio 1</span>
      </label>
      <label>
        <input type="radio" name="radio" value="2" [formControl]="control" />
        <span>Radio</span>
      </label>
      <button type="submit" (click)="submit()">Submit</button>
    </form>
  `,
  imports: [ReactiveFormsModule],
})
export class ReactiveSimpleRadioButtonsComponent {
  control = new FormControl('');

  submit() {
    alert(this.control.value);
  }
}
