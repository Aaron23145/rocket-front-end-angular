import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-redirect-to-countdown',
  templateUrl: './redirect-to-countdown.component.html',
  styleUrls: ['./redirect-to-countdown.component.css']
})
export class RedirectToCountdownComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigate(['/countdown']);
  }
}
