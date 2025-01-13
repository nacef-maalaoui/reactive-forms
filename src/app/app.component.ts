import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule , FormGroup , FormBuilder , FormControl , Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  contactform : FormGroup;

  constructor(private fb : FormBuilder){
    let controls = {
      name : new FormControl('' , [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.pattern('^[A-Z][a-z]*(?: [A-Z][a-z]*)*$') //regular expression that validates a name starting with a capital letter
      ]),
      email : new FormControl('' , [
        Validators.required,
        Validators.email
      ]),
      subject : new FormControl('' , [
        Validators.required,
        Validators.minLength(10)
      ]),
      message : new FormControl('' , [
        Validators.required,
        Validators.minLength(20),
        Validators.maxLength(200)
      ])
    }

    this.contactform = this.fb.group(controls)
  }

  send(){
    console.log(this.contactform.value);

  }
}
