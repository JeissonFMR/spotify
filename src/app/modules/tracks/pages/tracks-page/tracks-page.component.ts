import { Component } from '@angular/core';


import { TrackModel } from '../../../../core/models/tracks.model';
import { TrackService } from '../../services/track.service';
import { Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent {
  tracksTrending: Array<TrackModel> = []
  tracksRandom: Array<TrackModel> = []

  listObservers$: Array<Subscription> = []
  constructor(private trackservice: TrackService) {

  }
  ngOnInit(): void {
    //suscribirse a las canciones (viene desde api)
    this.loadDataAll()

    //suscribirse a las canciones (viene desde api)
    this.loadDataRandom()
  }

  //FORMAS PARA CARGAR LOS DATOS 1. PROMESA 2. SUBSCRIBE
  async loadDataAll(): Promise<any> {
    this.tracksTrending = await this.trackservice.getAllTrack$().toPromise()
  }

  loadDataRandom(): void {
    this.trackservice.getRandomTrack$().subscribe((response: TrackModel[]) => {
      this.tracksRandom = response
    })
  }
  ngOnDestroy(): void {

  }
}
