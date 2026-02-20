import { Component } from '@angular/core';
import { Footer } from "@app/components/footer/footer";
import { Hero } from "./components/hero/hero";
import { About } from "./components/about/about";
import { Services } from "./components/services/services";
import { DigitalJourney } from "./components/digital-journey/digital-journey";
import { Steps } from "./components/steps/steps";
import { TourVideo } from "./components/tour-video/tour-video";
import { Projects } from "./components/projects/projects";
import { Statistics } from "./components/statistics/statistics";
import { Testimonials } from "./components/testimonials/testimonials";
import { Cta } from "./components/cta/cta";
import { Blogs } from "./components/blogs/blogs";

@Component({
  selector: 'app-digital-agency',
  imports: [Footer, Hero, About, Services, DigitalJourney, Steps, TourVideo, Projects, Statistics, Testimonials, Cta, Blogs],
  templateUrl: './digital-agency.html',
  styles: ``,
})
export class DigitalAgency {

}
