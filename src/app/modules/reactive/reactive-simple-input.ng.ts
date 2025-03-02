import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-simple-input',
  template: `
    <form>
      <label>
        <span>Name</span>
        <input type="text" [formControl]="control" />
      </label>
      <button type="submit" (click)="submit()">Submit</button>
    </form>
  `,
  imports: [ReactiveFormsModule],
})
export class ReactiveSimpleInputComponent {
  control = new FormControl('');

  submit() {
    alert(this.control.value);
  }
}
