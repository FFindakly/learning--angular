import { ContentService } from './../services/content.service';
import { ContentCardComponent } from './../content-card/content-card.component';
import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { Input } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

  // Properties
  contentItemsArray: Content[];

  constructor(private contentService: ContentService, private messageService: MessageService) { }

  ngOnInit(): void {
    //this.contentItemsArray = this.contentService.getContentItems();
    this.contentService.getContentItemsObs().subscribe(content => {
      this.contentItemsArray = content;
    });

  }

  searchPosts(userInput: string): void {
    let found = false;
    for(let i =0; i < this.contentItemsArray.length; i++) {
      if (userInput == this.contentItemsArray[i].title) {
        found = true;
      }
    }

    if (found) {
      this.messageService.add("Content retrieved!");
    } else {
      this.messageService.add("Content was not found!");
    }
  }

}
