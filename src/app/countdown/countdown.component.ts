import { Component, OnInit } from '@angular/core';
import { RocketRestApiService } from '../rocket-rest-api.service';
import { Response } from '../response';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {
  countdown: Response;
  remainingTime: number;
  loading: boolean = true;

  constructor(private apiService: RocketRestApiService) { }

  ngOnInit() {
    this.apiService.getCountdown().subscribe(countdown => {
      this.countdown = countdown;
      this.loading = false;
    });
  }

  refresh() {
    this.ngOnInit();
  }
}
