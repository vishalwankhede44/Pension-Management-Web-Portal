import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { PensionerDetailInputComponent } from './pensioner-detail-input/pensioner-detail-input.component';
import {FormsModule} from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { Routes, RouterModule } from '@angular/router';
import { PensionDetailsComponent } from './pension-details/pension-details.component';

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'home', component:PensionerDetailInputComponent},
  {path: 'pension-detail',component:PensionDetailsComponent},
  {path: '', redirectTo:'/login', pathMatch:'full'},
  {path: '**',redirectTo:'/login'}
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PensionerDetailInputComponent,
    NavbarComponent,
    PensionDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
