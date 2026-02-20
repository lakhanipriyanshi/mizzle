import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  imports: [],
  templateUrl: './back-to-top.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BackToTop {
  constructor(private eleRef: ElementRef) {}

  scrollOffset = 450;
  button!: HTMLElement;

  offsetFromTop!: number;
  progress!: SVGGeometryElement | null;
  length!: number;

  ngOnInit() {
    this.button = this.eleRef.nativeElement.querySelector('.back-top');
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    if (!this.button) return;
    const target = window;
    if (target && target.scrollY > this.scrollOffset) {
      this.button.classList.add('show');
    } else {
      this.button.classList.remove('show');
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
