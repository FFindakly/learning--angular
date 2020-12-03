import { ContentService } from './../../services/content.service';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-content',
  templateUrl: './add-content.component.html',
  styleUrls: ['./add-content.component.scss']
})
export class AddContentComponent implements OnInit {
  @Input() newContent: any;

  constructor(private contentService: ContentService, public dialog: MatDialog) { 
    this.newContent = {
      title: "",
      imageUrl: ""
    };
  }

  ngOnInit(): void {
  }


  openAddContentDialog(): void {
    const contentDialogRef = this.dialog.open(AddContentDialog);

    contentDialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  addContent(): void {
    console.log("A new content has been added");
  }

  updateContent(): void {
    console.log("Contnet has been updated");
    this.addContent();
  }

}


@Component({
  selector: 'app-add-content-dialog',
  templateUrl: './add-content-dialog-component.html',
})
export class AddContentDialog {
  newContent: any;

  constructor(
    public dialogRef: MatDialogRef<AddContentDialog>) {
      this.newContent = {
      title: "",
      imageUrl: ""
    };
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
