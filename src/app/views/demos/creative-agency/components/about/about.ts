import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { LucideAngularModule } from "lucide-angular";

@Component({
  selector: 'creative-agency-about',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './about.html',
  styles: ``,
})
export class About {}
