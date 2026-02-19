import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgIcon } from "@ng-icons/core";
import { clientsData } from '../../data';
import { register } from 'swiper/element/bundle';
import { CountUpDirective } from 'ngx-countup';

register();

@Component({
  selector: 'creative-agency-hero',
  imports: [NgIcon, CountUpDirective],
  templateUrl: './hero.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Hero {
  clientSwiperData = clientsData;
}
