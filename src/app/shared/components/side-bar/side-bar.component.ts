import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TrackService } from '../../../modules/tracks/services/track.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  // linksMenu: Array<any> = [
  //   {
  //     name: 'Home',
  //     icon: 'uil-estate'
  //   },
  //   {
  //     name: 'Buscar',
  //     icon: 'uil-estate'
  //   }
  // ]

  mainMenu: { defaultOptions: Array<any>, accesLink: Array<any> } = { defaultOptions: [], accesLink: [] }

  customOptions: Array<any> = []

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: 'uil uil-estate',
        router: ['/', 'auth']
      },
      {
        name: 'Buscar',
        icon: 'uil uil-search',
        router: ['/', 'history']
      },
      {
        name: 'Tu biblioteca',
        icon: 'uil uil-chart',
        router: ['/', 'favorites'],
        query: { hola: 'mundo' }
      }
    ]

    this.mainMenu.accesLink = [
      {
        name: 'Crear lista',
        icon: 'uil-plus-square'
      },
      {
        name: 'Canciones que te gustan',
        icon: 'uil-heart-medical'
      }
    ]

    this.customOptions = [
      {
        name: 'Mi lista º1',
        router: ['/']
      },
      {
        name: 'Mi lista º2',
        router: ['/']
      },
      {
        name: 'Mi lista º3',
        router: ['/']
      },
      {
        name: 'Mi lista º4',
        router: ['/']
      }
    ]


  }

  // goTo($event: any): void {
  //   this.router.navigate(['/', 'favorites'], {
  //     queryParams: [

  //     ]
  //   })
  //   console.log($event);
  // }
}
