const client1 = '/images/client/01.svg';
const client2 = '/images/client/02.svg';
const client3 = '/images/client/03.svg';
const client4 = '/images/client/04.svg';
const portfolioImg1 = '/images/portfolio/masonry/01.jpg';
const portfolioImg2 = '/images/portfolio/masonry/02.jpg';
const portfolioImg3 = '/images/portfolio/masonry/03.jpg';
const portfolioImg4 = '/images/portfolio/masonry/04.jpg';
const portfolioImg5 = '/images/portfolio/masonry/05.jpg';
const portfolioImg6 = '/images/portfolio/masonry/06.jpg';
const avatar5 = 'assets/images/avatar/05.jpg';
const avatar7 = 'assets/images/avatar/07.jpg';
const client6 = 'assets/images/client/06.svg';

const blogImg1 = 'assets/images/blog/4by3/01.jpg';
const blogImg2 = 'assets/images/blog/4by3/02.jpg';
const blogImg3 = 'assets/images/blog/4by3/03.jpg';
const blogImg4 = 'assets/images/blog/4by3/04.jpg';
const blogImg5 = 'assets/images/blog/4by3/05.jpg';

export type ClientType = {
  icon?: string;
  image?: string;
  name?: string;
  url?: string;
};

export const clientsData: ClientType[] = [
  {
    image: client1,
  },
  {
    image: client2,
  },
  {
    image: client3,
  },
  {
    image: client4,
  },
  {
    image: client3,
  },
];

export type User = {
  id?: string;
  avatar?: string;
  email?: string;
  username?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  role?: string;
  token?: string;
};

export type ProjectType = {
  image: string;
  name: string;
  description?: string;
  category?: string;
  tags?: string[];
  url: string;
  createdBy?: {
    user?: User;
    team?: User[];
  };
  createdAt?: string;
  status?: 'published' | 'private';
};

export type RecentProjectType = {
  categoryClass: string;
} & ProjectType;

export const projects: RecentProjectType[] = [
  {
    name: 'Dynamic Workflows Website',
    category: 'UI/UX design',
    categoryClass: 'marketing business brand',
    image: portfolioImg1,
    url: '/portfolio/case-studies/v1',
  },
  {
    name: 'ElevateTech Redesign',
    category: 'Brand design',
    categoryClass: 'brand ui',
    image: portfolioImg4,
    url: '/portfolio/case-studies/v1',
  },
  {
    name: 'User-Centric Redesign',
    category: 'Web design',
    categoryClass: 'business design brand',
    image: portfolioImg2,
    url: '/portfolio/case-studies/v1',
  },
  {
    name: 'Sustainability Initiative',
    category: 'Business dev',
    categoryClass: 'design marketing',
    image: portfolioImg5,
    url: '/portfolio/case-studies/v1',
  },
  {
    name: 'E-commerce Expansion',
    category: 'Digital Marketing',
    categoryClass: 'business design',
    image: portfolioImg6,
    url: '/portfolio/case-studies/v1',
  },
  {
    name: 'Social Media Engagement',
    category: 'UI/UX design',
    categoryClass: 'ui',
    image: portfolioImg3,
    url: '/portfolio/case-studies/v1',
  },
];

export type CompanyType = {
  icon?: string;
  image?: string;
  name: string;
  externalLink?: string;
  url?: string;
};

type AuthorType = {
  company?: CompanyType;
} & User;


export type TestimonialType = {
  userId?: AuthorType['id'];
  user: AuthorType;
  title?: string;
  comment: string;
  rating?: number;
};

export const testimonials: TestimonialType[] = [
  {
    comment:
      'Your assistance has been incredibly helpful. I appreciate the prompt and insightful responses, which have made my task much easier. Thank you for the great support',
    user: {
      avatar: avatar5,
      company: {
        name: 'Blogzine',
        image: client6,
      },
      role: 'Ceo and manager',
      firstName: 'Jacqueline',
      lastName: 'Miller',
    },
  },
  {
    comment:
      'It consistently delivers accurate and well-crafted responses, saving me a lot of time and effort. Thank you for this invaluable resource!',
    user: {
      avatar: avatar7,
      company: {
        name: 'Blogzine',
        image: client4,
      },
      role: 'Ceo and manager',
      firstName: 'Dennis',
      lastName: 'Barrett',
    },
  },
  {
    comment:
      "The best Bootstrap theme we've ever used - it's easy to customize and comes with all the features we need.",
    user: {
      avatar: avatar5,
      company: {
        name: 'Blogzine',
        image: client2,
      },
      role: 'Ceo and manager',
      firstName: 'Dennis',
      lastName: 'Barrett',
    },
  },
];