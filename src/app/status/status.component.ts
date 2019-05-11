import { Component, OnInit } from '@angular/core';
import { RocketRestApiService } from '../rocket-rest-api.service';
import { Response } from '../response';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  status: Response;
  loading: boolean = true;

  constructor(private apiService: RocketRestApiService) {}

  ngOnInit() {
    this.apiService.getStatus().subscribe(status => {
        this.status = status;
        this.loading = false;
    });
  }

  refresh() {
    this.ngOnInit();
  }
}
