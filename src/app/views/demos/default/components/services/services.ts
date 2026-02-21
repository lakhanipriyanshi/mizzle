import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { services } from '../../data';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from "lucide-angular";

@Component({
  selector: 'default-services',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './services.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Services {
  servicesData = services;
}
