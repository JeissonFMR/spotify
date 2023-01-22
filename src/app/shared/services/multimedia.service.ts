import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Observer, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {

  callback: EventEmitter<any> = new EventEmitter<any>()

  public audio!: HTMLAudioElement
  public trackInfo$: BehaviorSubject<any> = new BehaviorSubject(undefined)


  constructor() {

  }
}
