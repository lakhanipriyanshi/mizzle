import { Component } from '@angular/core';
import { statData } from '../../data';
import { CountUpDirective } from "ngx-countup";

@Component({
  selector: 'digital-agency-Statistics',
  imports: [CountUpDirective],
  templateUrl: './statistics.html',
  styles: ``,
})
export class Statistics {
statData = statData
}
