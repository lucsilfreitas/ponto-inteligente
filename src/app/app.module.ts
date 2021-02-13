
import { LoginModule } from './autentcacao/login/login.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { from } from 'rxjs';
import {
  LoginRoutingModule,
} from './autentcacao/login/login-routing.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    MatButtonModule,
    BrowserAnimationsModule,
    LoginModule,
    LoginRoutingModule,

    AppRoutingModule //sempre o ultimo
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
