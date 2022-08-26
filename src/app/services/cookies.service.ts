import { Injectable } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import * as globals from '../globals';
@Injectable({
  providedIn: 'root'
})
export class CookiesService {
  
  constructor(private cookieService:CookieService) { }

  setCookie(name:string,token:string,expiry:number){
    this.cookieService.set(name,token,expiry);
  }
   
  deleteCookie(name:string){
    this.cookieService.delete(name);
  }
   
  deleteAll(){
    this.cookieService.deleteAll();
  }

  getCookie(name:string){
    return this.cookieService.get(name);
  }
   
  isLoggedIn():boolean{
    return this.getCookie(globals.authCookieName).length != 0 ;
  }

}
