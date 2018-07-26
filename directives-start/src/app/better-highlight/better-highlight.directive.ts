import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor : string = 'transparent';
  @Input('appBetterHighlight') highlightColor : string = 'yellow';

  @HostBinding('style.backgroundColor') bgCol : string = 'transparent';

  constructor(private elRef : ElementRef, private renderer : Renderer2) { }

  ngOnInit(){
    this.bgCol = this.defaultColor;
  }
  @HostListener('mouseenter') onMouseEnter(eventData : Event){
    this.bgCol = this.highlightColor;
  }
  @HostListener('mouseleave') onMouseLeave(eventData : Event){
    this.bgCol = this.defaultColor
  }
}
