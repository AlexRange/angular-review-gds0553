import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../../interfaces/Auth';import { AuthService } from '../../servicios/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router: Router,
    private authService: AuthService) {}

  logout() {
    sessionStorage.removeItem("email")
    this.router.navigate(['login'])    
  }
}

