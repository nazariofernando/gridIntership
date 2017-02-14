import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { MyParseFirstName } from './firstname.pipe';
import { MyParseLastName } from './secondname.pipe';

import { MockService } from './mock.service'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    MyParseFirstName,
    MyParseLastName
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [MockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
