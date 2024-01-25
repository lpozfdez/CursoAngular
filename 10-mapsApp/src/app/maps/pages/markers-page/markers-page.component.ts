import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from 'mapbox-gl';

interface MarkerAndColor{
  color: string;
  marker: Marker
}

interface PlainMarker{
  color: string;
  lngLat: number[]
}

@Component({
  templateUrl: './markers-page.component.html',
  styleUrls: ['./markers-page.component.css']
})
export class MarkersPageComponent implements AfterViewInit {

  @ViewChild('map') divMap?: ElementRef; //Traemos el elemento por referencia

  public currentZoom: number = 10;
  public map?: Map;
  public currentCenter: LngLat = new LngLat(-3.8006934158675563, 37.77188125360432);
  public markers: MarkerAndColor[] = [];

  ngAfterViewInit(): void {

    if (!this.divMap) throw 'El elemento no fue encontrado'

    this.map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentCenter, // starting position [lng, lat]
      zoom: 13
    });

    //Crear marcador personalizado
    // const markerHtml = document.createElement('div');
    // markerHtml.innerHTML = 'Lourdes';

    // const marker = new Marker({
    //   // color: 'red',
    //   //element: markerHtml
    // })
    //     .setLngLat(this.currentCenter)
    //     .addTo(this.map);

    this.readFromLocalStorage();

  }


  createMarker(){

    if(!this.map) return;
    const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.addMarker( this.map?.getCenter(),color );

  }

  addMarker( lng:LngLat, color:string = 'blue' ){
    if(!this.map) return;

    const marker = new Marker({
       color: color,
       draggable: true
    })
      .setLngLat(lng)
      .addTo(this.map);

    this.markers.push({color,marker});

    this.saveToLocalStorage();

    //controlar el movimiento del marcador
    marker.on('dragend', (ev)=>{
      console.log(marker.getLngLat());
      this.saveToLocalStorage();
    });
  }

  removeMarker( index: number ){
    this.markers[index].marker.remove();
    this.markers.splice(index, 1);
  }

  flyTo( marker: Marker ){
    this.map?.flyTo({
      zoom:14,
      center: marker.getLngLat()
    })
  }

  saveToLocalStorage(){
    const plainMarkers: PlainMarker[] = this.markers.map( ({color, marker}) => {
      return {
        color,
        lngLat: marker.getLngLat().toArray()
      }
    } );

    localStorage.setItem('plainMarkers', JSON.stringify(plainMarkers));
  }

  readFromLocalStorage(){
    const plainMarkersString = localStorage.getItem('plainMarkers') ?? '[]';
    const plainMarkers: PlainMarker[] = JSON.parse(plainMarkersString);

    plainMarkers.forEach( ({color, lngLat}) => {
      const [lng, lat] = lngLat;
      const coord = new LngLat(lng, lat);
      this.addMarker(coord, color);
    });

  }
}
