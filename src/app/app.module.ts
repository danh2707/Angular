import {  HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildFCWT } from './childNewWt/childFcwt';
import { Classroom } from './classroom/classroom.component';
import { Status } from './newLesson/class';
import { FCWT } from './newWeather/fcwt';
import { Studentcomponent } from './student/student.component';
import { abcComponent } from './abc/abc.component';
const approuter:Routes=[
  {path:'weather',component:FCWT},
  {path:'class-r',component:Classroom}
]
@NgModule({
  // khai bao các component
  declarations: [
    AppComponent,
    abcComponent,
    Classroom,
    Studentcomponent,
    Status,
    FCWT,
    ChildFCWT
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(approuter)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
