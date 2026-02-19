import { Component } from '@angular/core';
import { TypedTextDirective } from '@core/directive/ityped.directive';

@Component({
  selector: 'demo-default-hero',
  imports: [TypedTextDirective],
  templateUrl: './hero.html',
  styles: ``,
})
export class Hero {

}
