import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentTaggedPipe } from './content-tagged.pipe';
import { DefaultTypePipe } from './default-type.pipe';
import { HoverStyleDirective } from './hover-style.directive';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [AppComponent, ContentCardComponent, ContentListComponent, ContentTaggedPipe, DefaultTypePipe, HoverStyleDirective, MessagesComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
