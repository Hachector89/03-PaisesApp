import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Pais;

  constructor( 
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
    ) { }

  ngOnInit( ): void {

    /*
    this.activatedRoute.params
      .subscribe( ({id}) => {
        console.log(id);

        this.paisService.buscarPaisPorId( id )
          .subscribe( pais => {
            console.log(pais);
          })

      } );
      */
     this.activatedRoute.params
      .pipe(
        // el ({id}) es como poner params.id, omitiendo el params
        switchMap( ({id}) => this.paisService.buscarPaisPorId( id ) )
      )
      .subscribe( pais => {
        this.pais = pais[0];
      })

  }

}
