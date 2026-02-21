import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { testimonials } from '../../data';

@Component({
  selector: 'creative-agency-testimonial',
  imports: [LucideAngularModule],
  templateUrl: './testimonial.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Testimonial {
  testimonials = testimonials;
}
