import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from 'src/app/shared/services/validators.service';

@Component({
  selector: 'app-dynamic-page',
  templateUrl: './dynamic-page.component.html',
  styles: [
  ]
})
export class DynamicPageComponent {

  public myDinForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favoriteGames: this.fb.array([
      ['Metal Gear', Validators.required],
      ['Sims', Validators.required],
      ['Tekken', Validators.required],

    ]),
  });

  public newFavorite: FormControl = new FormControl('',[Validators.required]);

  constructor(private validatorsServ: ValidatorService, private fb: FormBuilder){}

  get favoriteGames(){
    // return this.myDinForm.controls['favoriteGames'];
    return this.myDinForm.get('favoriteGames') as FormArray;

  }

  isValidField( field: string ): boolean | null{
    return this.validatorsServ.isValidField(field, this.myDinForm);
  }

  isValidFieldInArray( formArray: FormArray, i:number ): boolean | null{
    return this.validatorsServ.isValidFieldInArray(formArray, i);
  }

  getFieldError( field: string ): string | null {
    return this.validatorsServ.getFieldError(field, this.myDinForm);
  }


  onAddFavorites(): void{
    if( this.newFavorite.invalid ) return;
    const newFav = this.newFavorite.value;

    // this.favoriteGames.push( new FormControl(newFav), Validators.required );

    this.favoriteGames.push( this.fb.control(newFav, Validators.required) );

    this.newFavorite.reset();

  }


  onDeleteFavorite( index: number ): void{
    this.favoriteGames.removeAt(index);
  }


  onSubmit(): void {

    if( this.myDinForm.invalid ){
      this.myDinForm.markAllAsTouched();
      return;
    }

    console.log( this.myDinForm.value );
    (this.myDinForm.controls['favoriteGames'] as FormArray ) = this.fb.array([]) ;

    this.myDinForm.reset();
  }

}
