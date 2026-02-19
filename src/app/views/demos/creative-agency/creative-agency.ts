import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { About } from "./components/about/about";


@Component({
  selector: 'app-creative-agency',
  imports: [Hero, About],
  templateUrl: './creative-agency.html',
  styles: ``,
})
  
export class CreativeAgency {

}
