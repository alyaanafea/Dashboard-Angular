import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  errMsgs: any = {
    required: 'This field is required',
    email: 'This is an invalid email',
    minlength: 'user password should be at least 8 chars',
  };
  @Input() inputId = '';
  @Input() type = '';
  @Input() control = new FormControl();
  @Input() label = '';
}
