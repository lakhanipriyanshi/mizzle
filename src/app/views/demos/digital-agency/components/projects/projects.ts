import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from "@angular/router";
import { projects } from '../../data';
import { LucideAngularModule } from 'lucide-angular'

@Component({
  selector: 'digital-agency-projects',
  imports: [RouterLink,LucideAngularModule],
  templateUrl: './projects.html',
  styles: ``,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class Projects {
 projectsData = projects
}
