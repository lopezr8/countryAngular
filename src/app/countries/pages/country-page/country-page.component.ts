import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit {

  public country?: Country;

  constructor( private activateRoute: ActivatedRoute,
               private router: Router,
               private countriesService: CountriesService,
     ){}

  ngOnInit(): void {
    this.activateRoute.params
      .pipe(
        switchMap( ({id}) => this.countriesService.searchCountryByAlphaCode(id)  )
      )
      // .subscribe( (params) => {
      //   console.log([{params: params['id'] }])
      // }

      // )
      //-------------------------------
      // .subscribe( ({id}) => {
      //   this.countriesService.searchCountryByAlphaCode(id)
      //     .subscribe( country => {
      //       console.log({country})
      //     } );     ----> todo esto es antes del pipe, con el pipe ahora esta suscrito al resultado de ese observable
      // });

      .subscribe( country => {
          if (!country) return this.router.navigateByUrl('');
          return this.country = country;

      } );

  }

}
