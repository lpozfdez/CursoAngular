import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Map, Marker } from 'mapbox-gl';

@Component({
  selector: 'map-mini-map',
  templateUrl: './mini-map.component.html',
  styleUrls: ['./mini-map.component.css']
})
export class MiniMapComponent {

  @ViewChild('map') divMap?: ElementRef;

  @Input() lngLat?: [number,number];

  ngAfterViewInit(): void {

    if (!this.divMap) throw 'El elemento no fue encontrado';
    if (!this.lngLat) throw 'El elemento no fue encontrado';

    const map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lngLat, // starting position [lng, lat]
      zoom: 14, // starting zoom
      interactive: false
    });

    new Marker()
      .setLngLat(this.lngLat)
      .addTo(map)

  }


}
