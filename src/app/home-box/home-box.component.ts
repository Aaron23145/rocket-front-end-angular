import { Component, OnInit, Input } from '@angular/core';
import { BoxContent } from '../box-content';

@Component({
  selector: 'app-home-box',
  templateUrl: './home-box.component.html',
  styleUrls: ['./home-box.component.css']
})
export class HomeBoxComponent implements OnInit {
  @Input() content: BoxContent;

  constructor() { }

  ngOnInit() {
  }

}
