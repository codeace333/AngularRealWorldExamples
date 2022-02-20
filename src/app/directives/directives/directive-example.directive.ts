import { Directive, ElementRef, HostListener, Input, OnChanges, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDirectiveExample]'
})
export class DirectiveExampleDirective implements OnChanges{

  @Input() bgColor: string;
  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {
    console.log(this.el)
    console.log(this.bgColor)
    
  }

  @HostListener('mouseover') onMouseOver() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'red');
  }

  @HostListener('mouseout') onMouseOut() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'green');
  }

  @HostListener('click') onClick() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'yellow');
  }

  ngOnChanges(){
    this.renderer.setStyle(this.el.nativeElement, 'background-color', this.bgColor);
  }
}
