import { Component, OnInit } from '@angular/core';
import { RocketRestApiService } from '../rocket-rest-api.service';
import { Response } from '../response';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {
  reset: Response;
  loading: boolean = true;

  constructor(private apiService: RocketRestApiService) {}

  ngOnInit() {
    this.apiService.postReset().subscribe(reset => {
      this.reset = reset;
      this.loading = false;
    });
  }

}
