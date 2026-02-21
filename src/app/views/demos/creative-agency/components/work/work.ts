import { Component, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { projects } from '../../data';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from "lucide-angular";
import { IsotopeDirective } from '@core/directive/isotope-directive';

@Component({
  selector: 'creative-agency-work',
  imports: [RouterLink, CommonModule, LucideAngularModule, IsotopeDirective],
  templateUrl: './work.html',
  styles: ``,
})
  
export class Work {
  projectsData = projects;
  activeFilter: string = '*';
  @ViewChild(IsotopeDirective) isotopeDirective!: IsotopeDirective;

  filterItems(filter: string): void {
    if (this.isotopeDirective) {
      this.activeFilter = filter;
      this.isotopeDirective.arrangeIsotope(filter);
    }
  }
}
