import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @HostBinding('style.backgroundColor') bgCol : string = 'transparent';

  constructor(private elRef : ElementRef, private renderer : Renderer2) { }

  ngOnInit(){
    //this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue');
  }
  @HostListener('mouseenter') onMouseEnter(eventData : Event){
    this.bgCol = 'blue';
  }
  @HostListener('mouseleave') onMouseLeave(eventData : Event){
    this.bgCol = 'transparent'
  }
  @HostListener('mousedown') onMouseDown(eventData : Event){
    this.renderer.setStyle(this.elRef.nativeElement,'background-color','pink');
  }
  @HostListener('mouseup') onMouseUp(eventData : Event){
    this.renderer.setStyle(this.elRef.nativeElement,'background-color','transparent');
  }
}
