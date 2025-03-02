import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-simple-radio-buttons',
  template: `
    <form>
      <label>
        <input type="radio" name="radio" [(ngModel)]="radio" value="1" />
        <span>Radio 1</span>
      </label>
      <label>
        <input type="radio" name="radio" [(ngModel)]="radio" value="2" />
        <span>Radio 2</span>
      </label>
      <button type="submit" (click)="submit()">Submit</button>
    </form>
  `,
  imports: [FormsModule],
})
export class TemplateSimpleRadioButtonsComponent {
  radio = signal('');

  submit() {
    alert(this.radio());
  }
}
