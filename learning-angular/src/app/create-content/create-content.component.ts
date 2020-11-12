import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SelectControlValueAccessor } from '@angular/forms';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {
  @Output() newPostEvent = new EventEmitter<Content>();

  // Properties
  newContent: Content;

  constructor() { 
    this.newContent = {
        id: 0,
        author: '',
        imageUrl: '',
        type: '',
        title: '',
        body: ''
    }
  }

  ngOnInit(): void {
    this.newPostEvent.emit(this.newContent);
  }

  addContent(): void{
      let promise = new Promise((success, fail) => {
      let validInputs = false;

      if (this.newContent.author != "" && this.newContent.imageUrl != "" && this.newContent.type != "" && this.newContent.title != "" && this.newContent.body != "") {
        validInputs = true;
      }
      if (validInputs) {
        success("New post has been added");
      } else {
        fail("Fill missing fields");
      }
    });
    this.newPostEvent.emit(this.newContent);
  }

}
