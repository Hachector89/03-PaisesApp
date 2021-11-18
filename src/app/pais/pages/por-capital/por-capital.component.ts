import { Component } from '@angular/core';
import { Capital } from '../../interfaces/capital.interfaces';
import { CapitalService } from '../../services/capital.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino: string = '';
  hayError: boolean = false;
  capitales: Capital[] = [];

  constructor( private capitalService: CapitalService) { }

  buscar ( termino: string ) {

    this.hayError = false;
    this.termino = termino;

    this.capitalService.buscarCapital( this.termino )
      .subscribe( capitales => {

        this.capitales = capitales;

      }, ( error ) => {

        this.hayError = true;
        this.capitales = []

      });

  }

  sugerencias( termino: string ) {
    //this.hayError = false;
    // TODO: crear sugerencias
  }

}
