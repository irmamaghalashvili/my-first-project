import { Directive, HostBinding, Input } from '@angular/core';
import { clsx } from 'clsx';

type ButtonType = 'ButtonBlack' | 'ButtonWite' | 'ButtonBlackArrow' | 'ButtonWiteArrow';

@Directive({
  selector: '[appButton]',
})
export class ButtonDirective {

  @Input() variant: ButtonType = 'ButtonBlack';

  @HostBinding('class')
  get additionalClasses() {
    return clsx({
      'font-["DM_Sans"] text-[12px] not-italic font-bold leading-[normal] tracking-[2px] w-[158px] h-[40px] flex-shrink-0 border-2 border-b-blue-500 hover:border-transparent': true,
      'bg-[#000] text-[#fff]': this.variant === 'ButtonBlack',
      'bg-[#fff] text-[#000]': this.variant === 'ButtonWite'
    });
  }
}
