import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {

  @HostListener('error') hendleError(): void {
    const elNative = this.elHOst.nativeElement
    console.log('😃 Esta img revento -->' + this.elHOst);
    elNative.src = 'https://avatars.githubusercontent.com/u/89231420?s=400&u=7dd4cec7cec6ceec955f8aca9fce3119228ac6bf&v=4'
  }
  constructor(private elHOst: ElementRef) { }

}
