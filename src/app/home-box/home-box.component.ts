import { Component, Input } from '@angular/core';
import { BoxContent } from '../box-content';

@Component({
  selector: 'app-home-box',
  templateUrl: './home-box.component.html',
  styleUrls: ['./home-box.component.css']
})
export class HomeBoxComponent {
  @Input() content: BoxContent;
}
