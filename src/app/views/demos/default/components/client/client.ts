import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { clientData } from '../../data';
import { register } from 'swiper/element/bundle';
register()

@Component({
  selector: 'default-client',
  imports: [],
  templateUrl: './client.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Client {
  clientTestimonialData = clientData

}
