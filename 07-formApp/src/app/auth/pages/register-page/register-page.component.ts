import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from 'src/app/shared/services/validators.service';
import { EmailValidatorService } from 'src/app/shared/validations/email-validator.services';
// import * as validatorCustom from 'src/app/shared/validations/validators';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {



  public myForm: FormGroup = this.fb.group({
    // name: ['',[Validators.required,  Validators.pattern(validatorCustom.firstNameAndLastnamePattern)]],
    // email: ['', [Validators.required, Validators.pattern(validatorCustom.emailPattern)]],
    name: ['',[Validators.required,  Validators.pattern(this.validatorsServ.firstNameAndLastnamePattern)]],
    email: ['', [Validators.required, Validators.pattern(this.validatorsServ.emailPattern)], [this.emailValid]],
    // email: ['', [Validators.required, Validators.pattern(this.validatorsServ.emailPattern)], [new EmailValidatorService()]],
    // email: ['', [Validators.required, Validators.pattern(this.validatorsServ.emailPattern)], []],
    username: ['', [Validators.required, this.validatorsServ.cantBeStrider]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]],
  }, { //Esto aplica a todo el formulario y sus campos
    validators: [
      this.validatorsServ.isFieldOneEqualFieldTwo( 'password', 'password2' ),
    ]
  });

  constructor( private fb: FormBuilder, private validatorsServ: ValidatorService, private emailValid: EmailValidatorService ){}

  isValidField( field: string ){
    return this.validatorsServ.isValidField(field, this.myForm);
  }

  onSubmit(){
    if( this.myForm.invalid ){
      this.myForm.markAllAsTouched();
      return ;
    }
    console.log(this.myForm.value);
    this.myForm.reset();
  }

}
