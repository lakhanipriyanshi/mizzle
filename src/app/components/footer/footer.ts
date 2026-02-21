import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { communityLinks, quickLinks, socialMediaLinks } from './data';
import { RouterLink } from '@angular/router';
import { credits, currentYear } from '@common/constants';
import { BackToTop } from '../back-to-top/back-to-top';
import { LucideAngularModule } from "lucide-angular";

@Component({
  selector: 'app-footer',
  imports: [RouterLink, BackToTop, LucideAngularModule],
  templateUrl: './footer.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Footer {
  quickLink = quickLinks;
  communityList = communityLinks;
  socialLinks = socialMediaLinks;

  currentYear = currentYear;
  credits = credits;
}
