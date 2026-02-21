import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";

@Component({
  selector: 'digital-agency-steps',
  imports: [LucideAngularModule],
  templateUrl: './steps.html',
  styles: ``,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class Steps {
}
