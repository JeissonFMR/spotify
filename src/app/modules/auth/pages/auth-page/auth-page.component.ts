import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent {
  formLogin: FormGroup = new FormGroup({})
  errorSession: boolean = false;


  constructor(private authService: AuthService, private cookie: CookieService, private router: Router) {

  }
  ngOnInit(): void {
    this.formLogin = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
    })
  }

  sendLogin(): void {
    const { email, password } = this.formLogin.value
    this.authService.sendCredentials(email, password)
      .subscribe((responseOK) => { //TODO: cuando el usuario ingresa sus credenciales correctas
        console.log('Session iniciada');
        const { tokenSession, data } = responseOK
        this.cookie.set('token', tokenSession, 4, '/')  //TODO: Guardamos la cookie
        this.router.navigate(['/', 'tracks'])
      }, error => {
        this.errorSession = true
        console.log('Ocurrio un error');
      })
  }
}

