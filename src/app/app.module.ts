import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarItemComponent } from './navbar-item/navbar-item.component';
import { HomeComponent } from './home/home.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { HomeBoxComponent } from './home-box/home-box.component';
import { AppRoutingModule } from './app-routing.module';
import { StatusComponent } from './status/status.component';
import { CountdownComponent } from './countdown/countdown.component';
import { StartComponent } from './start/start.component';
import { ResetComponent } from './reset/reset.component';
import { NetworkErrorComponent } from './network-error/network-error.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarItemComponent,
    HomeComponent,
    MainContainerComponent,
    HomeBoxComponent,
    StatusComponent,
    CountdownComponent,
    StartComponent,
    ResetComponent,
    NetworkErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
