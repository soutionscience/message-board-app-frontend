import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MessagesComponent} from './messages.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatInputModule, MatSnackBarModule, MatToolbarModule} from '@angular/material';
import { WebService} from './web.service';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule, MatButtonModule , MatCardModule, MatInputModule, MatSnackBarModule, MatToolbarModule

  ],
  providers: [WebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
