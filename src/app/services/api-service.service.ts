import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators';
import * as globals from '../globals';
import { CookiesService } from './cookies.service';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly generateTokenUrl =  'http://18.208.210.192:9000/token';
  private readonly processPensionUrl = 'http://3.80.1.8:8100/processPension';

  constructor(private http:HttpClient, private cookiesService:CookiesService) { }

  handleError(error:any){
    return throwError(error.error.message || "Server Error");
  }

  generateToken(data :any):Observable<any> {

    const headers =  {
      headers: new  HttpHeaders({ 
        'Content-Type': 'application/json'})
    };
    
    return this.http.post(this.generateTokenUrl,{
      'username':data.username,
      'password':data.password
    },headers).pipe(catchError(this.handleError))
  }

  processPension(data :any):Observable<any> {

    const headers =  {
      headers: new  HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+ this.cookiesService.getCookie(globals.authCookieName)})
    };
    
    return this.http.post(this.processPensionUrl,{
      'aadhaarNumber':data.aadhaarNumber
    },headers).pipe(catchError(this.handleError))
  }

 

}
