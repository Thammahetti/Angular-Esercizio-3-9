import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { FourComponent } from './four/four.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
@NgModule({
  declarations: [
   
   
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule
  ],
  providers: [
    provideClientHydration()
  ],
  
  
})
export class AppModule {
  constructor(private appRef: ApplicationRef) {}
  ngDoBootstrap() {
    this.appRef.bootstrap(AppComponent); // replace this with your actual component
  }
 }
