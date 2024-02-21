import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';

//type Region = 'Africa'|'Americas'|'Asia'|'Europe'|'Oceania';  //? podria ser cualquiera de esos

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent implements OnInit{
  public countries: Country[] = [];
  //public regions:String[] = ['Africa','Americas','Asia','Europe','Oceania']
  public regions:Region[]= ['Africa','Americas','Asia','Europe','Oceania'] //? estoy diciendo que debe ser un arreglo especificamente con esos valores
  public selectedRegion?: Region;

  constructor(private countriesService: CountriesService){}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byRegion.countries;
    this.selectedRegion = this.countriesService.cacheStore.byRegion.region;
  }

  searchByRegion(region:Region):void{
    this.selectedRegion = region;
    this.countriesService.searchRegion(region)
      .subscribe( countries => {
         this.countries = countries;
      } )
  }
}
