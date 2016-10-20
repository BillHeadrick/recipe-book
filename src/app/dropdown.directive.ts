import {Directive, HostListener} from '@angular/core';
import {HostBinding} from "@angular/core/src/metadata/directives";

@Directive({
  selector: '[rbDropdown]'
})
export class DropdownDirective {
  //bootstrap ships with .open, it is not a custom css class
  @HostBinding('class.open') get opened(){
    return this.isOpen;
  }
  @HostListener('click') open(){
    this.isOpen = true;
  }
  @HostListener('mouseleave') close(){
    this.isOpen = false;
  }
  private isOpen = false;
}
