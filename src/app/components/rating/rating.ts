import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  imports: [],
  templateUrl: './rating.html',
  styles: ``,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
  
export class Rating {
  @Input() rating = 0;
   stars = [1, 2, 3, 4, 5];

  isFull(index: number): boolean {
    return this.rating >= index + 1;
  }

  isHalf(index: number): boolean {
    return this.rating > index && this.rating < index + 1;
  }
}
