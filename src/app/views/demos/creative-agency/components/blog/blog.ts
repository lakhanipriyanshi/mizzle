import { Component } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'creative-agency-blog',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './blog.html',
  styles: ``,
})
export class Blog {}
