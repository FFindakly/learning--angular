import { ElementRef, HostListener, Input } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appHoverStyle]'
})
export class HoverStyleDirective {
  constructor(private elm: ElementRef) {}

  @Input() fontWeight?: string;
  @Input() textDecoration?: string;

  @HostListener('mouseenter') onMouseEnter(btn) {
    this.mouseEnterEffect(this.textDecoration, this.fontWeight);
  }
  @HostListener('mouseleave') onMouseLeave(btn) {
    this.mouseLeaveEffect(this.textDecoration, this.fontWeight);
  }

  private mouseEnterEffect(textDecoration, fontWeight) {
    if (this.textDecoration) {
      this.elm.nativeElement.style.textDecoration = textDecoration;
    }
    if (fontWeight) {
      this.elm.nativeElement.style.fontWeight = fontWeight;
    }
  }
  private mouseLeaveEffect(textDecoration, fontWeight) {
    if (this.textDecoration) {
      this.elm.nativeElement.style.textDecoration = '';
    }
    if (fontWeight) {
      this.elm.nativeElement.style.fontWeight = 'normal';
    }
  }



}
