import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import * as globals from '../globals';
import {ApiService} from '../services/api-service.service';
import {CookiesService} from '../services/cookies.service';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  show:boolean = false;
  popup:boolean = false;
  popupType:string = 'success';
  popupMessage:string='';
  
  constructor(private router: Router,private apiService:ApiService,private cookiesService:CookiesService) { }

  ngOnInit(): void {
    
    this.popup = globals.Methods.isPopupAvailable();
    this.popupMessage = globals.Methods.getPopUpMessage();
    this.popupType = globals.Methods.getPopUpMessageType();
  }

  togglePassword(){
    this.show = !this.show;
  }

  getPopUpMessage():string{
    return globals.Methods.getPopUpMessage();

}


  onSubmit(data:any){
    if(!globals.Methods.validateText(data.username) || !globals.Methods.validateText(data.password)){
      globals.popup.msg = "Invalid Input";
      globals.popup.type = 'danger';
      this.ngOnInit();
      return;
    }
      
    this.apiService.generateToken(data).subscribe((response) => {
      this.cookiesService.setCookie(globals.authCookieName,response.token,globals.loginSessionTimeInDays);
      console.log("Logged In Successfully");
      globals.popup.msg = 'Logged In Successfully';
      globals.popup.type = 'success';
      
      this.router.navigate(['/home']);
      
    },(error) => {
      console.log(error);
      globals.popup.msg = error;
      globals.popup.type = 'danger';
      this.ngOnInit();
    })

    return false;
  }


}
