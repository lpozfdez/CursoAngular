import { Injectable } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, ValidationErrors } from '@angular/forms';

@Injectable({providedIn: 'root'})
export class ValidatorService {

  public firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  public cantBeStrider = ( control: FormControl ): ValidationErrors | null => {

    const value: string = control.value.toLowerCase().trim();

    if( value === 'strider' ){
      return {
        noStrider: true,
      }
    }
    return null;
  }

  public isFieldOneEqualFieldTwo( field1: string, field2: string ){
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const fieldValue1 = formGroup.get(field1)?.value;
      const fieldValue2 = formGroup.get(field2)?.value;

      if(fieldValue1 !== fieldValue2) {
        formGroup.get(field2)?.setErrors({notEqual: true}); //Le añadimos el error al input
        return { notEqual: true} //Le añadimos el error al formulario
      }
      formGroup.get(field2)?.setErrors(null); //Ojo con otros errores q pueda tener el input
      return null;

    }
  }

  isValidField( field: string, myForm: FormGroup ): boolean | null{
    return myForm.controls[field].errors && myForm.controls[field].touched;
  }

  isValidFieldInArray( formArray: FormArray, i:number ): boolean | null{
    return formArray.controls[i].errors && formArray.controls[i].touched;
  }

  getFieldError( field: string, myForm: FormGroup ): string | null {
    if( !myForm.controls[field] ) return null;

    const errors = myForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch(key){
        case 'required':
            return 'Este campo es requerido';
        case 'minlength':
            return `Mínimo ${ errors['minlength'].requiredLength } caracteres` ;
      }
    }

    return null;
  }



}
