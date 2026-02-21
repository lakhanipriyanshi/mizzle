import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from "@angular/router";
import { services } from '../../data';
import { LucideAngularModule } from "lucide-angular";

@Component({
  selector: 'digital-agency-services',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './services.html',
  styles: ``,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class Services {
  servicesData = services
  navigation = {
  nextEl: '#swiper-button-next-team',
  prevEl: '#swiper-button-prev-team'
};
}
