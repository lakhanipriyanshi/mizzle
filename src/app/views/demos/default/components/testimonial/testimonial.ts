import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { testimonials } from '../../data';
import { LucideAngularModule } from 'lucide-angular';
register();
@Component({
  selector: 'default-testimonial',
  imports: [LucideAngularModule],
  templateUrl: './testimonial.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Testimonial {
  testimonialSwiperData = testimonials;
}
