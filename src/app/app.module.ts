import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { ModuleService } from '../services/index';
import { ModuleComponent } from '../directives/index';
import { user_dirComponent } from '../user-dir/user-dir.component';
import { user_dirService } from '../user-dir/user-dir.service.ts';


@NgModule({
  imports:      [ BrowserModule , CommonModule ,FormsModule , HttpModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
