import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Pipe({
  name: 'contentTagged'
})
export class ContentTaggedPipe implements PipeTransform {

  transform(posts: Content[], dType: string): Content[] {
    return posts.filter(post => post.type == dType);
  }

}
