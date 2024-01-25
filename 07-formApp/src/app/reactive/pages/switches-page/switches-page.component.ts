import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from 'src/app/shared/services/validators.service';

@Component({
  selector: 'app-switches-page',
  templateUrl: './switches-page.component.html',
  styles: [
  ]
})
export class SwitchesPageComponent implements OnInit{

  public myForm: FormGroup = this.fb.group({
    gender: ['M', Validators.required],
    wantNotifications: [true, Validators.required],
    termsAndConditions: [false, Validators.requiredTrue],
  });

  public person = {
    gender: 'F',
    wantNotifications: true
  }

  constructor(private fb: FormBuilder, private validatorsServ: ValidatorService) {}

  ngOnInit(): void {
    this.myForm.reset(this.person);
  }

  isValidField( field: string ): boolean | null{
    return this.validatorsServ.isValidField(field, this.myForm);
  }

  getFieldError( field: string ): string | null {
    return this.validatorsServ.getFieldError(field, this.myForm);
  }


  onSave(){
    if( this.myForm.invalid ){
      this.myForm.markAllAsTouched();
      return ;
    }

    console.log(this.myForm.value);
    this.myForm.reset(this.person);
  }

}
