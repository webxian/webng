import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { DatabindComponent } from './databind/databind.component';
import {FormsModule} from '@angular/forms';
import { DirComponent } from './dir/dir.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    DatabindComponent,
    DirComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
