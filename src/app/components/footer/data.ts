type FooterLinkType = {
  name: string;
  link?: string;
  badge?: string;
  icon?: string;
  className?: string;
};

export const quickLinks: FooterLinkType[] = [
  {
    name: 'About us',
    link: '/about/v1',
  },
  {
    name: 'Contact us',
    link: '/contact/v1',
  },
  {
    name: 'Career',
    link: '/career',
    badge: '2 Job',
  },
  {
    name: 'Career detail',
    link: '/career/single',
  },
  {
    name: 'Become a partner',
    link: '/contact/v1',
  },
  {
    name: 'Sign in',
    link: '/auth/sign-in',
  },
  {
    name: 'Sign up',
    link: '/auth/sign-up',
  },
];

export const communityLinks: FooterLinkType[] = [
  {
    name: 'Documents',
  },
  {
    name: 'Supports',
    icon: 'lucide:square-arrow-out-up-right',
    link: '/contact/v1',
    className: 'flex items-center',
  },
  {
    name: 'Faqs',
    link: '/faq',
  },
  {
    name: 'Privacy Policy',
  },
  {
    name: 'News and blogs',
    link: '/blog/grid',
  },
  {
    name: 'Terms & condition',
    link: '/terms-conditions',
  },
];

type SocialMediaLink = {
  icon: string;
  className: string;
};

export const socialMediaLinks: SocialMediaLink[] = [
  { icon: 'lucide:facebook', className: 'hover:bg-zinc-800' },
  { icon: 'lucide:instagram', className: 'hover:bg-zinc-800' },
  { icon: 'lucide:twitter', className: 'hover:bg-zinc-700' },
  { icon: 'lucide:linkedin', className: 'hover:bg-zinc-700' },
  { icon: 'lucide:youtube', className: 'hover:bg-zinc-700' },
];
