import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { StudentsComponent } from './students.component';
import { StudentDetailComponent } from './student-detail.component';
import { StudentService } from './student.service';
import { StudentSearchComponent } from './student-search.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule, MdSortModule} from '@angular/material';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    BrowserAnimationsModule,
    MdButtonModule, 
    MdCheckboxModule,
    MdSortModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    StudentDetailComponent,
    StudentSearchComponent,
    StudentsComponent
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
