import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[blueColor]'
})
export class BlueColorDirective {

  constructor(element: ElementRef) {
    console.log('element-->', element);
    element.nativeElement.style.color = 'blue';
   }
   @HostListener('click') doSomething() {
    alert('yes it works');
   }
  //  @HostListener('document:click', ['$event'])
  //   elemClicked(elem) {
  //     console.log('elem----', elem);
  //   }

}
