import { Directive, ElementRef, OnInit } from '@angular/core'
import { init } from 'ityped'

@Directive({
  selector: '[appTypedText]',
  standalone: true,
})
export class TypedTextDirective implements OnInit {

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    const element: HTMLElement = this.elementRef.nativeElement

    // 🔥 correct attribute name
    const textData = element.getAttribute('data-type-text')

    if (!textData) return

    // && se split karo
    const strings = textData.split('&&')

    init(element, {
      strings,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1500,
      loop: true,
      showCursor: true,
    })
  }
}
