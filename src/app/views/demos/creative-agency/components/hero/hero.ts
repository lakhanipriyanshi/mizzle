import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { clientsData } from '../../data';
import { register } from 'swiper/element/bundle';
import { CountUpDirective } from 'ngx-countup';
import { LucideAngularModule } from 'lucide-angular';

register();

@Component({
  selector: 'creative-agency-hero',
  imports: [CountUpDirective, LucideAngularModule],
  templateUrl: './hero.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Hero {
  clientSwiperData = clientsData;
}
