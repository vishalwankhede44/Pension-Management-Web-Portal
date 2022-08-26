import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import * as globals from '../globals';
import {ApiService} from '../services/api-service.service';
import { CookiesService } from '../services/cookies.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-pensioner-detail-input',
  templateUrl: './pensioner-detail-input.component.html',
  styleUrls: ['./pensioner-detail-input.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class PensionerDetailInputComponent implements OnInit {

  aadharNumber:number=0;
  processPensionResponse = {};
  popup:boolean = false;
  popupType:string = 'success';
  popupMessage:string='';
  loading:boolean = false;

  constructor(private apiService:ApiService, private router:Router,private cookiesService:CookiesService) { }

  ngOnInit(): void {
    if(!this.cookiesService.isLoggedIn())
      this.router.navigate(["/login"]);
    
    this.popup = globals.Methods.isPopupAvailable();
    this.popupMessage = globals.Methods.getPopUpMessage();
    this.popupType = globals.Methods.getPopUpMessageType();
  }
 pensionerDetailsInputSubmit(data:any){
    
    if(!globals.Methods.isValidAadhaarNumber(data.aadhaarNumber)){
      globals.popup.msg = "Invalid Input";
      globals.popup.type = 'danger';
      this.ngOnInit();
      
      return;
    }

    this.loading = true;
    this.apiService.processPension(data).subscribe(response => { 
       this.loading = false;
       console.log(response);
       globals.pensionDetails.aadhaarNumber = data.aadhaarNumber;
       globals.pensionDetails.pensionAmount = response.pensionAmount;
       globals.pensionDetails.serviceCharge = response.bankServiceCharge;
       this.router.navigate(["/pension-detail"])
  },(error) => {
    this.loading = false;
    console.log(error);
    globals.popup.msg = error;
    globals.popup.type = 'danger';
    this.ngOnInit();
  });
  
    return true;
  }

}
