import { DOCUMENT } from '@angular/common';
import { ElementRef, Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilitiesService {
  private renderer: Renderer2;
  constructor(
    private rendererFactory: RendererFactory2,  
    @Inject(DOCUMENT) private document) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  printData(element, value) {
    //console.log(value)
    const child = this.document.createElement('div');
    child.innerHTML = `<strong>${value}</strong>`;
    //console.log(this.renderer.setStyle(element.nativeElement, 'background-color', 'red'));;
    this.renderer.appendChild(element.nativeElement, child);
  }
}
