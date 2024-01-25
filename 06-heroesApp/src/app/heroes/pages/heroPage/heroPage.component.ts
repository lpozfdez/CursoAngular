import { Component, type OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, switchMap } from 'rxjs';
import { Hero } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-heroe-page',
  standalone: false,
  templateUrl: './heroPage.component.html',
  styleUrls: ['./heroPage.component.css']
})
export class HeroePageComponent implements OnInit {

  public hero?: Hero;

  constructor( private serv: HeroesService, private activatedRoute: ActivatedRoute, private router: Router ){}


  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.serv.getHeroById(id) ),
    ).subscribe( hero => {

      if(!hero) return this.router.navigate(['/heroes/list']);

      this.hero = hero;
      console.log({hero});

      return;

    })
  }

  goBack():void{
    this.router.navigateByUrl('heroes/list');
  }

}
