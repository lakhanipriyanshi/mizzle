import { Routes } from '@angular/router'
import { CreativeAgency } from './creative-agency/creative-agency'
import { Default } from './default/default'

export const DEMO_ROUTE: Routes = [
  {
    path: 'classic',
    component: Default,
    data: { title: 'Classic Default' },
  },
  {
    path: 'agency/creative',
    component: CreativeAgency,
    data: { title: 'Creative Agency' },
  },
  // {
  //   path: 'agency/digital',
  //   component: DigitalAgency,
  //   data: { title: 'Digital Agency' },
  // },
  // {
  //   path: 'agency/design',
  //   component: DesignAgency,
  //   data: { title: 'Design Agency' },
  // },
  // {
  //   path: 'agency/seo',
  //   component: SEOAgency,
  //   data: { title: 'SEO Agency' },
  // },
  // {
  //   path: 'product-landing',
  //   component: LandingProduct,
  //   data: { title: 'Product Landing' },
  // },
  // {
  //   path: 'mobile-app',
  //   component: MobileShowCase,
  //   data: { title: 'Mobile Showcase' },
  // },
  // {
  //   path: 'finance-consulting',
  //   component: FinanceConsulting,
  //   data: { title: 'Finance Consulting' },
  // },
]
