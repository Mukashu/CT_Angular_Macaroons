import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[addEffectsToButtons]'
})
export class AddEffectsToButtonsDirective implements OnInit {
  @Input() defaultBgColor: string = 'red';
  @Input() hoverBgColor: string = 'green';

  constructor(private elem: ElementRef) { }

  ngOnInit() {
    this.elem.nativeElement.style.backgroundColor = this.defaultBgColor;
  }

  @HostListener('mouseenter') onMouseHover() {
    this.elem.nativeElement.style.backgroundColor = this.hoverBgColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.elem.nativeElement.style.backgroundColor = this.defaultBgColor;
  }
}
