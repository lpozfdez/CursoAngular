import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';
import { Region } from '../../interfaces/region.type';


@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent implements OnInit {

  public countries: Country[] = [];
  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public selectedRegion?: Region;
  public isLoading: boolean = false;


  constructor(private countrySer: CountriesService){}

  ngOnInit(): void {
    this.countries = this.countrySer.cacheStore.byRegion.countries;
    this.selectedRegion = this.countrySer.cacheStore.byRegion.region;
  }

  searchByRegion( region:Region ):void{
    this.isLoading = true;

    this.selectedRegion = region;

    this.countrySer.searchRegion(region).subscribe( countries => {
      this.countries = countries;
      this.isLoading = false;

    });
  }
}