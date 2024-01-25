import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ValidatorService } from 'src/app/shared/services/validators.service';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrls: ['./basic-page.component.css']
})
export class BasicPageComponent implements OnInit {

  //Una forma de crearlo
  // public myForm: FormGroup = new FormGroup({
  //   name: new FormControl('', [], []),//[] son validaciones
  //   price: new FormControl(0, [], []),
  //   storage: new FormControl(0, [], []),

  // });
  public ejemploProducto = {
    name: 'rtj0001',
    price: 250,
    inStorage: 0
  };

  //Otra forma de crearlo
  public myForm: FormGroup = this.fb.group({
    name: ['', [ Validators.required, Validators.minLength(3) ]],
    //El primer elemento es el valor por defecto del campo
    price: ['0', [ Validators.required, Validators.min(0) ]],
    inStorage: ['0',[ Validators.required, Validators.min(0) ]],
  });


  //FormBuilder es una clase
  constructor( private fb:FormBuilder, private validatorsServ: ValidatorService ) {}

  ngOnInit(): void {
    this.myForm.reset();
  }

  isValidField( field: string ): boolean | null{
    return this.validatorsServ.isValidField(field, this.myForm);
  }

  getFieldError( field: string ) {
    this.validatorsServ.getFieldError(field, this.myForm);
  }

  onSave():void{

    if( this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);
    //Resetea el formulario, tb los estados pristine y touch
    this.myForm.reset({price: 0, inStorage: 0});

  }

}
