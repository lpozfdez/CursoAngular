import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsRoutingModule } from './maps-routing.module';
import { MiniMapComponent } from './components/mini-map/mini-map.component';
import { MapsLayoutComponent } from './layout/maps-layout/maps-layout.component';
import { FullScreemPageComponent } from './pages/full-screem-page/full-screem-page.component';
import { MarkersPageComponent } from './pages/markers-page/markers-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { ZoomRangePageComponent } from './pages/zoom-range-page/zoom-range-page.component';

import * as mapboxgl from 'mapbox-gl';
import { CounterAloneComponent } from '../alone/components/counter-alone/counter-alone.component';
import { SideMenuComponent } from '../alone/components/side-menu/side-menu.component';
(mapboxgl as any).accessToken = 'pk.eyJ1IjoibG91cmRlc3AiLCJhIjoiY2xyamVxbWd6MDJycTJtcGVtZ3BvcnNrNiJ9.MCOJKj3hU3svfCX5y40caQ';


@NgModule({
  declarations: [
    MiniMapComponent,
    MapsLayoutComponent,
    FullScreemPageComponent,
    MarkersPageComponent,
    PropertiesPageComponent,
    ZoomRangePageComponent,
  ],
  imports: [
    CommonModule,
    MapsRoutingModule,
    CounterAloneComponent,
    SideMenuComponent
  ]
})
export class MapsModule { }
