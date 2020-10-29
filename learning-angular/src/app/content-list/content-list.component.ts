import { ContentCardComponent } from './../content-card/content-card.component';
import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { Input } from '@angular/core';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

  // Properties
  contentItemsArray: Content[];

  constructor() { }

  ngOnInit(): void {
    this.contentItemsArray = [
      {
        id: 0,
        author: 'Fadi Findakly',
        //imageUrl: 'https://ffindakly.scweb.ca/Bootstrap/sunrise.jpg',
        type: 'Nature',
        title: 'Opeongo Lake',
        body:
          'Opeongo Lake is a lake in the Saint Lawrence River drainage basin in the geographic townships of Bower, Dickson, ' +
          'Preston and Sproule in the Unorganized South Part of Nipissing District in Northeastern Ontario, Canada. It ' +
          'is the largest lake in Algonquin Provincial Park and the source of the Opeongo River.',
        tags: [' Nature', ' Hiking', ' Camping'],
      },
      {
        id: 1,
        author: 'Fadi Findakly',
        imageUrl: 'https://ffindakly.scweb.ca/Bootstrap/niagara_falls.jpg',
        type: 'Travels',
        title: 'Niagara Falls',
        body:
          'Niagara Falls, Ontario, is a Canadian city at the famous waterfalls of the same name, linked with the U.S. by the Rainbow Bridge. ' +
          "Its site on the Niagara River's western shore overlooks the Horseshoe Falls, the cascades' most expansive section. Elevators take visitors " +
          'to a lower, wetter vantage point behind the falls. A cliffside park features a promenade alongside 520-ft.-high Skylon Tower with an observation deck',
        tags: [' Nature', ' Tourism'],
      },
      {
        id: 2,
        author: 'Fadi Findakly',
        imageUrl: 'https://ffindakly.scweb.ca/Bootstrap/meusum.jpg',
        type: 'Travels',
        title: 'Michigan University - Ann Arbour',
        body:
          'The University of Michigan Museum of Natural History is a natural history museum in Ann Arbor, Michigan, United States. ' +
          'The museum recently moved to a new location at 1105 North University Avenue, in the University of Michigan Biological Sciences Building. ' +
          'It will reopen in April 2019.',
        tags: [' Travel', ' Tourism', ' University', ' Museum', ' Michigan'],
      },
      {
        id: 3,
        author: 'Fadi Findakly',
        imageUrl: 'https://ffindakly.scweb.ca/Bootstrap/book.jpg',
        type: 'Books',
        title: 'The Seven Habbits Of Highly Effective People',
        body: 'The 7 Habits of Highly Effective People, first published in 1989, is a business and self-help book written by Stephen Covey.',
        tags: [' books', ' Self-help'],
      },
      {
        id: 4,
        author: 'www.tesla.com',
        imageUrl: 'https://ffindakly.scweb.ca/Bootstrap/tesla-models.jpg',
        type: 'Cars',
        title: 'Tesla Model S',
        body:
          'Model S sets an industry standard for performance and safety. Tesla’s all-electric powertrain delivers unparalleled performance in all weather conditions – with Dual Motor All-Wheel Drive, adaptive air suspension and ludicrous acceleration.',
          tags: [' Cars', ' Tesla', ' High Tech'],
      },
      {
        id: 5,
        author: 'www.tesla.com',
        imageUrl: 'https://ffindakly.scweb.ca/Bootstrap/tesla-cybertruck.jpg',
        type: 'Cars',
        title: 'Tesla Model Cybertruck',
        body:
          'Cybertruck is built with an exterior shell made for ultimate durability and passenger protection. Starting with a nearly impenetrable exoskeleton, every component is designed for superior strength and endurance, from Ultra-Hard 30X Cold-Rolled stainless-steel structural skin to Tesla armor glass.',
          tags: [' Cars', ' Tesla', ' High Tech'],
      }
    ];
  }

  searchPosts(userInput: string): void {
    let found = false;
    for(let i =0; i < this.contentItemsArray.length; i++) {
      if (userInput == this.contentItemsArray[i].title) {
        found = true;
      }
    }

    if (found) {
      console.log("This title is found");
    } else {
      console.log("This title does not exist");
    }
  }

}
