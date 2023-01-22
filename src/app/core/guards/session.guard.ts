import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate {
  constructor(private cook: CookieService, private router: Router) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkSessionCookie();  //TODO: verificar token
  }


  checkSessionCookie(): boolean {
    try {
      const cookie: boolean = this.cook.check('token') //true or false
      console.log(cookie);
      if (cookie) {
        return true;
      } else {
        this.router.navigate(['/', 'auth'])
        return false;
      }

    } catch (error) {
      console.log('Algo sucedio ?? en la cookie' + error);
      return false;
    }
  }
}
