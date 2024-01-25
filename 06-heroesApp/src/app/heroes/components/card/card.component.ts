import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/heroes.interface';

@Component({
  selector: 'heroes-hero-card',
  standalone: false,
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit{

  @Input() public hero!: Hero;

  ngOnInit(): void {
    if (!this.hero) throw Error('Hero is required');
  }


}
