import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarItemComponent } from './navbar-item/navbar-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
