import { Component } from '@angular/core';
import { SearchService } from '@modules/history/services/search.service';
import { Observable, of } from 'rxjs';
import { TrackModel } from '../../../../core/models/tracks.model';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent {

  listResults$: Observable<any> = of([])
  constructor(private searchService: SearchService) {

  }

  recibeData(event: string): void {
    //TODO: agarras el termino y sabes que solo se ejecuta cuanto tiene 3 caracteres
    console.log('estoy en el padre jua jua', event);
    this.listResults$ = this.searchService.searchTrack$(event)
    //TODO: no necesito el suscribe ya que se teiene async en history-page-component


  }
}
