import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent  implements OnInit {

  @Input({ required: true }) placeholderInput1!: string;
  @Input({ required: true }) placeholderInput2!: string;

  form = new FormGroup({
    name1: new FormControl('', {
      validators: [Validators.required],
    }),
    name2: new FormControl('', {
      validators: [Validators.required],
    }),
  });

  constructor() { }

  ngOnInit() {}


  submitForm() {
    console.log(this.form);

    if(this.form.invalid) {
      this.form.markAllAsTouched();      
    } else {
      console.log('Form is valid');
    }
  }
}
