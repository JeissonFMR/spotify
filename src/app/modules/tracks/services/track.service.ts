import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
// import { map } from 'rxjs/operators'
import { TrackModel } from '../../../core/models/tracks.model';
import { HttpClient } from '@angular/common/http';
import { enviroment } from '../../../../enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
// consumir api
export class TrackService {

  private readonly URL = enviroment.api;

  constructor(private httpClient: HttpClient) {

  }

  /**
   * 
   * @returns DEVOLVER TODAS LAS CANCIONES!!!
   */
  getAllTrack$(): Observable<any> {

    //TODO: {data:[...1,...2,...3]}
    return this.httpClient.get(`${this.URL}/tracks`)
      .pipe(
        map(({ data }: any) => {
          return data //me llega el arreglo
        })
      )

  }

  /**
   * TODO: Devolver canciones random
   */
  getRandomTrack$(): Observable<any> {
    //TODO: {data:[...1,...2,...3]}
    return this.httpClient.get(`${this.URL}/tracks`)
      .pipe(
        map(({ data }: any) => {
          return data.reverse() //me llega el arreglo
        }),
        catchError((error => {
          const { status, statusText } = error
          console.log('algo paso ⁉️');
          console.table([status, statusText])
          return of([])
        }))
      )

  }
}
