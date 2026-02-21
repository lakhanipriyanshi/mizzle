import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { About } from "./components/about/about";
import { Service } from "./components/service/service";
import { Work } from "./components/work/work";
import { Testimonial } from "./components/testimonial/testimonial";
import { Features } from "./components/features/features";
import { Blog } from "./components/blog/blog";
import { Footer } from "@app/components/footer/footer";

@Component({
  selector: 'app-creative-agency',
  imports: [Hero, About, Service, Work, Testimonial, Features, Blog, Footer],
  templateUrl: './creative-agency.html',
  styles: ``,
})
  
export class CreativeAgency {

}
