import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { LngLat, Map } from 'mapbox-gl';


@Component({
  templateUrl: './zoom-range-page.component.html',
  styleUrls: ['./zoom-range-page.component.css']
})
export class ZoomRangePageComponent implements AfterViewInit, OnDestroy{



  @ViewChild('map') divMap?: ElementRef; //Traemos el elemento por referencia

  public currentZoom: number = 10;
  public map?: Map;
  public currentCenter: LngLat = new LngLat(-3.8006934158675563, 37.77188125360432);

  ngAfterViewInit(): void {

    if (!this.divMap) throw 'El elemento no fue encontrado'

    this.map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentCenter, // starting position [lng, lat]
      zoom: this.currentZoom, // starting zoom
    });

    this.mapListeners();
  }

  ngOnDestroy(): void {
    this.map?.remove(); //Se limpian los listeners
  }

  mapListeners(){
    if(!this.map) throw 'Mapa no inicializado';

    this.map.on('zoom', (ev) => {
      this.currentZoom = this.map!.getZoom();
    });

    this.map.on('zoomend', (ev) => {
      if (this.map!.getZoom() < 18 )return;
      this.map!.zoomTo(18);
    });

    this.map.on('move', (ev) => {
      this.currentCenter = this.map!.getCenter();
    });

  }

  //Botones de zoom
  zoomIn(){
    this.map?.zoomIn();
  }

  zoomOut(){
    this.map?.zoomOut();
  }

  //Barra de zoom
  zoomChange(value: string){
    this.currentZoom = Number(value);
    this.map?.zoomTo(this.currentZoom);
  }


}
