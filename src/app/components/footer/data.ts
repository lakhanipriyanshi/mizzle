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
    icon: 'square-arrow-out-up-right',
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
  iconClassName:string
};

export const socialMediaLinks: SocialMediaLink[] = [
  { icon: 'facebook', className: 'hover:bg-zinc-800', iconClassName :'size-3.5' },
  { icon: 'instagram', className: 'hover:bg-zinc-800',iconClassName :'size-3.5'  },
  { icon: 'twitter', className: 'hover:bg-zinc-700' ,iconClassName :'size-3.5'},
  { icon: 'linkedin', className: 'hover:bg-zinc-700',iconClassName :'size-3.5' },
  { icon: 'youtube', className: 'hover:bg-zinc-700' ,iconClassName :'size-4'},
];
