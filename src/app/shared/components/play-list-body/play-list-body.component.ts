import { Component, Input } from '@angular/core';
// import * as rawData from '../../../data/tracks.json'
import { TrackModel } from '../../../core/models/tracks.model';
@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrls: ['./play-list-body.component.css']
})
export class PlayListBodyComponent {
  @Input() tracks: TrackModel[] = []

  optionSort: { property: string | null, order: string } = { property: null, order: 'asc' }

  ngOnInit(): void {

  }

  changeSort(property: string): void {
    const { order } = this.optionSort
    this.optionSort = {
      property: property,
      order: order === 'asc' ? 'desc' : 'asc'
    }
  }
}