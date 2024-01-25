import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Hero, Publisher } from '../../interfaces/heroes.interface';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, filter, switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../components/confirmDialog/confirmDialog.component';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: [
  ]
})
export class NewPageComponent implements OnInit {

  constructor( private activateRouter: ActivatedRoute,
              private router: Router ,
              private serviceHero: HeroesService,
              private snackBar: MatSnackBar,
              private dialog: MatDialog
  ){}

  ngOnInit(): void {

    if( !this.router.url.includes('edit') ) return;

    this.activateRouter.params.pipe(
      switchMap( ({id}) => this.serviceHero.getHeroById( id ) ),

    ).subscribe( hero => {
        if(!hero) return this.router.navigateByUrl('/');
        this.heroForm.reset(hero);
        return;
    } )

  }

  public heroes: Hero[] = [];
  public publishers = [
    { id: 'DC Comics', desc: 'DC - Comics' },
    { id: 'Marvel Comics', desc: 'Marvel - Comics' },
  ];
  public heroForm = new FormGroup({
    id:               new FormControl(''),
    superhero:        new FormControl( '', { nonNullable: true } ),
    publisher:        new FormControl<Publisher>( Publisher.DCComics ),
    alter_ego:        new FormControl(''),
    first_appearance: new FormControl(''),
    characters:       new FormControl(''),
    alt_img:         new FormControl(''),
  });

  get currentHero(): Hero{//this.heroForm.value no devuelve un Hero
    const hero = this.heroForm.value as Hero;
    return hero;
  }

  showSnackbar( message: string): void{
    this.snackBar.open( message, 'done', {
      duration: 2500,
    } )
  }

  onSubmit():void{

    if( this.heroForm.invalid ) return;

    if( this.currentHero.id ){
      this.serviceHero.updateHero( this.currentHero ).subscribe( hero => {
        this.showSnackbar( `${hero.superhero} updated!` );
      } );
      return;
    }

    this.serviceHero.addHero(  this.currentHero ).subscribe( hero => {

      this.router.navigate(['/heroes/edit', hero.id]);
      this.showSnackbar( `${hero.superhero} created!` );
    });
  }

  onDeleteHero(){
    if(!this.currentHero.id) throw Error( 'Hero id is required' );

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: this.heroForm.value
    });

    dialogRef.afterClosed().pipe(
      filter( result => result === true),
      switchMap( () => this.serviceHero.deleteHero( this.currentHero.id ) ),
      filter( (wasDeleted: boolean) => wasDeleted )
    ).subscribe( result => this.router.navigate( ['/heroes'] ) );

  }






}
