import { Component } from '@angular/core';
import { Topbar } from "./components/topbar/topbar";
import { Hero } from "./components/hero/hero";
import { Client } from "./components/client/client";
import { About } from "./components/about/about";
import { Services } from "./components/services/services";
import { Pricing } from "./components/pricing/pricing";
import { Testimonial } from "./components/testimonial/testimonial";
import { Cta } from "./components/cta/cta";

@Component({
  selector: 'app-default',
  imports: [Topbar, Hero, Client, About, Services, Pricing, Testimonial, Cta],
  templateUrl: './default.html',
  styles: ``,
})
export class Default {

}
