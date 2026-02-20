import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { services } from '../../data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'default-services',
  imports: [RouterLink],
  templateUrl: './services.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Services {
  servicesData = services;
}
