import { Content } from './../helper-files/content-interface';
import { CONTENTLIST } from './../contentDB';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor() {}
  
  getContentItems(): Content[] {
  return CONTENTLIST;
  }

  getContentItemsObs(): Observable<Content[]> {
    return of(CONTENTLIST);
  }

}
