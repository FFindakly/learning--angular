import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss'],
})
export class ContentCardComponent implements OnInit {

  // Properties
  @Input() cardContent: Content;

  constructor() {
  }

  ngOnInit(): void {
  }

  // Show in the console the id value of the clicked image
  imageIsClicked() {
    console.log(`The image of post #${this.cardContent.id} is clicked`);
  }

}
