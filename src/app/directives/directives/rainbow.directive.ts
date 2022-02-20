import {
    Directive,
    ElementRef,
    HostBinding,
    HostListener,
    Renderer2
} from '@angular/core';

@Directive({
    selector: '[appRainbow]'
})
export class RainbowDirective {
    constructor(
        private el: ElementRef,
        private renderer: Renderer2
      ) {
        console.log(this.el)
        
      }

    possibleColors = [
        'darksalmon', 'hotpink', 'lightskyblue', 'goldenrod', 'peachpuff',
        'mediumspringgreen', 'cornflowerblue', 'blanchedalmond', 'lightslategrey'
    ];

    @HostBinding('style.color') color: string;
    @HostBinding('style.border-color') borderColor: string;
    @HostBinding('style.border-width') borderWidth: string = '5px';
    @HostBinding('style.height') elHeight: string = '50px';
    @HostBinding('class.hostbind') hostBind: boolean = true;

    @HostListener('keydown') newColor() {
        const colorPick = Math.floor(Math.random() * this.possibleColors.length);
        this.borderColor = this.possibleColors[colorPick];
        this.el.nativeElement.borderColor = this.possibleColors[colorPick]

        const colorPick2 = Math.floor(Math.random() * this.possibleColors.length);
        this.color = this.possibleColors[colorPick2];
    }
}