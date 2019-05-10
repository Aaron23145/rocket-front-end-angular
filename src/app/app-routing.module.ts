import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StatusComponent } from './status/status.component';
import { CountdownComponent } from './countdown/countdown.component';
import { StartComponent } from './start/start.component';
import { ResetComponent } from './reset/reset.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'status', component: StatusComponent },
  { path: 'countdown', component: CountdownComponent },
  { path: 'start', component: StartComponent },
  { path: 'reset', component: ResetComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
