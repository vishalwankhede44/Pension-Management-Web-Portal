import { Component, OnInit } from '@angular/core';
import * as globals from '../globals';
import {Router} from "@angular/router";
import { CookiesService } from '../services/cookies.service';

@Component({
  selector: 'app-pension-details',
  templateUrl: './pension-details.component.html',
  styleUrls: ['./pension-details.component.css']
})
export class PensionDetailsComponent implements OnInit {

  aadhaarNumber:number = 0;
  pensionAmount:number = 0;
  serviceCharge:number = 0;
  constructor(private router:Router,private cookiesService:CookiesService) { }

  ngOnInit(): void {
    if(!this.cookiesService.isLoggedIn())
      this.router.navigate(["/login"]);
    this.aadhaarNumber = globals.pensionDetails.aadhaarNumber ? globals.pensionDetails.aadhaarNumber : 0;
    this.pensionAmount = globals.pensionDetails.pensionAmount ? globals.pensionDetails.pensionAmount : 0;
    this.serviceCharge = globals.pensionDetails.serviceCharge ? globals.pensionDetails.serviceCharge : 0; 
    if(this.aadhaarNumber==0)
      this.router.navigate(["/home"]);
  }

  previousPage(){
    this.router.navigate(["/home"]);
  }


  
}
