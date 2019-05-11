import { Component } from '@angular/core';
import { BoxContent } from '../box-content';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  boxesContent: BoxContent[] = [
    {
      title: 'Status',
      description: 'Check the rocket status to know if it\'s waiting, in countdown or it has been shooted.',
      icon: 'fas fa-eye',
      routerLink: 'status'
    },
    {
      title: 'Countdown',
      description: 'Check the remaining time until the rocket shoots.',
      icon: 'far fa-clock',
      routerLink: 'countdown'
    },
    {
      title: 'Start',
      description: 'Start the countdown to shoot the rocket!',
      icon: 'fas fa-play',
      routerLink: 'start'
    },
    {
      title: 'Reset',
      description: 'Cancel the countdown and set the rocket to waiting status.',
      icon: 'fas fa-stop',
      routerLink: 'reset'
    }
  ];
}
