import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { steps } from '../../data';

@Component({
  selector: 'digital-agency-steps',
  imports: [],
  templateUrl: './steps.html',
  styles: ``,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class Steps {
stepsData = steps
}
