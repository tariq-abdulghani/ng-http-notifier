import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgHttpNotifierModule } from 'ng-http-notifier';
import { HttpClientModule } from '@angular/common/http';
import { AppNotifierModule } from './app-notifier/app-notifier.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppNotifierModule,
    HttpClientModule,
    AppNotifierModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
