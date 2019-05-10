import { Component, OnInit } from '@angular/core';
import { RocketRestApiService } from '../rocket-rest-api.service';
import { Response } from '../response';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  start: Response;
  loading: boolean = true;

  constructor(private apiService: RocketRestApiService) {}

  ngOnInit() {
    this.apiService.postStart().subscribe(start => {
      this.start = start;
      this.loading = false;
    });
  }
}
