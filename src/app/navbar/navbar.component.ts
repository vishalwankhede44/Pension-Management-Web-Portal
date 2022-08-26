import { Component, OnInit } from '@angular/core';
import {CookiesService} from '../services/cookies.service';
import {Router} from "@angular/router";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router,private cookiesService:CookiesService) { }
  isLoggedIn:boolean = false;
  ngOnInit(): void {
    this.isLoggedIn = this.cookiesService.isLoggedIn();
  }

  logout(){
    this.cookiesService.deleteAll();
    this.router.navigate(['/login']);
  }


}
