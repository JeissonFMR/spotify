import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { TrackModel } from '../../../core/models/tracks.model';
import { MultimediaService } from '../../services/multimedia.service';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent {
  mockCover!: TrackModel

  constructor(public multimediaService: MultimediaService) {

  }
  listObserver$: Array<Subscription> = []
  ngOnInit(): void {

    this.multimediaService.trackInfo$.subscribe((res) => {
      console.log(' DEBO REPRODUCIR ESTA CANCION 😀😀', res);
    })
  }

  ngOnDestroy(): void {
    this.listObserver$.forEach(n => n.unsubscribe())
    console.log('ADIOS BEBE');
  }
}
