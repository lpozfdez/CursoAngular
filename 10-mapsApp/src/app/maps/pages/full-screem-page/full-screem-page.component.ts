import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Map } from 'mapbox-gl';

@Component({
  templateUrl: './full-screem-page.component.html',
  styleUrls: ['./full-screem-page.component.css']
})
export class FullScreemPageComponent implements AfterViewInit {

  @ViewChild('map') divMap?: ElementRef; //Traemos el elemento por referencia

  ngAfterViewInit(): void {

    if (!this.divMap) throw 'El elemento no fue encontrado'

    const map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-3.783768, 37.783642], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
  }

}
