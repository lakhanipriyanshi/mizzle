const serviceImg1 = '/images/services/4by3/01.jpg'
const serviceImg2 = '/images/services/4by3/02.jpg'
const serviceImg3 = '/images/services/4by3/03.jpg'
const serviceImg4 = '/images/services/4by3/04.jpg'
const serviceImg5 = '/images/services/4by3/05.jpg'
const serviceImg6 = '/images/services/4by3/06.jpg'

const project1 = '/images/portfolio/list/02.jpg'
const project2 = '/images/portfolio/list/03.jpg'

const avatar2 = '/images/avatar/02.jpg'
const avatar4 = '/images/avatar/04.jpg'
const avatar5 = '/images/avatar/05.jpg'
const avatar6 = '/images/avatar/06.jpg'
const avatar9 = '/images/avatar/09.jpg'

const blogImg3 = '/images/blog/4by3/03.jpg'
const blogImg7 = '/images/blog/4by3/07.jpg'
const blogImg8 = '/images/blog/4by3/08.jpg'


export type ServiceType = {
  icon?: string
  image?: string
  title: string
  description?: string
  url: string
}

export const services: ServiceType[] = [
  {
    title: 'Custom Software Development',
    description:
      'We prioritize user experience, scalability, and security to ensure your...',
    image: serviceImg1,
    url: '/services/single',
  },
  {
    title: 'Web Design and Development',
    description: 'from responsive websites to e-commerce platforms.',
    image: serviceImg2,
    url: '/services/single',
  },
  {
    title: 'Digital Marketing Strategies',
    description:
      'Reach your target drive results with our comprehensive digital marketing.',
    image: serviceImg3,
    url: '/services/single',
  },
  {
    title: 'Cybersecurity Solutions',
    description:
      'Protect your business from cyber threats with our cybersecurity solutions.',
    image: serviceImg4,
    url: '/services/single',
  },
  {
    title: 'IT Consulting and Support',
    description:
      'Leverage our expertise to optimize your IT infrastructure and operations.',
    image: serviceImg5,
    url: '/services/single',
  },
  {
    title: 'UI/UX Design Services',
    description: 'Enhance user satisfaction and engagement with our services.',
    image: serviceImg6,
    url: '/services/single',
  },
]

export type User = {
  id?: string
  avatar?: string
  email?: string
  username?: string
  password?: string
  firstName?: string
  lastName?: string
  role?: string
  token?: string
}

export type DateType = {
  date?: number
  month?: string | number
  year?: number
  hour?: number
  minute?: number
}

export type ProjectType = {
  image: string
  name: string
  description?: string
  category?: string
  tags?: string[]
  url: string
  createdBy?: {
    user?: User
    team?: User[]
  }
  createdAt?: DateType
  status?: 'published' | 'private'
}

export const projects: ProjectType[] = [
  {
    name: 'Website optimization for techWave',
    category: 'Graphic design',
    image: project1,
    url: '/portfolio/case-studies/v2',
  },
  {
    name: 'Transforming ideas into reality',
    category: 'UI/UX design',
    image: project2,
    url: '/portfolio/case-studies/v2',
  },
]

export type StatisticType = {
  title: string
  stat: number
  prefix?: string
  suffix?: string
}

export const statData: StatisticType[] = [
  {
    title: 'Worldwide client',
    stat: 30,
    prefix: '>',
    suffix: 'K',
  },
  {
    title: 'Analyze business reports',
    stat: 99,
    suffix: '%',
  },
  {
    title: 'Worldwide projects',
    stat: 350,
    suffix: '+',
  },
]

export type TestimonialType = {
  userId?: User['id']
  user: User
  title?: string
  comment: string
  rating?: number
}

export const testimonials: TestimonialType[] = [
  {
    title: "Transformed My Agency's Results",
    comment:
      'As an employer, the platform exceeded my expectations. We swiftly found top-tier talent for our company, thanks to the user-friendly interface and the ability to connect with candidates that perfectly fit our requirements.',
    rating: 5,
    user: {
      firstName: 'Louis',
      lastName: 'Ferguson',
      role: 'Web Developer',
      avatar: avatar4,
    },
  },
  {
    title: "Transformed My Agency's Results",
    comment:
      'As an employer, the platform exceeded my expectations. We swiftly found top-tier talent for our company, thanks to the user-friendly interface and the ability to connect with candidates that perfectly fit our requirements.',
    rating: 4.5,
    user: {
      firstName: 'Emma',
      lastName: 'Watson',
      role: 'Co-Founder',
      avatar: avatar5,
    },
  },
  {
    title: "Transformed My Agency's Results",
    comment:
      'As an employer, the platform exceeded my expectations. We swiftly found top-tier talent for our company, thanks to the user-friendly interface and the ability to connect with candidates that perfectly fit our requirements.',
    rating: 4.5,
    user: {
      firstName: 'Samuel',
      lastName: 'Bishop',
      role: 'Product designer',
      avatar: avatar6,
    },
  },
]


export type BlogType = {
  image?: string
  title: string
  description?: string
  category?: string
  tags?: string[]
  url: string
  publishedBy?: User
  publishedAt?: DateType
}

export const blogs: BlogType[] = [
  {
    title: 'Sleek and Responsive - Designing with Bootstrap and Mizzle',
    category: 'Technology',
    publishedAt: {
      date: 15,
      month: 'April',
      year: 2024,
    },
    publishedBy: {
      avatar: avatar2,
      firstName: 'Emma',
      lastName: 'Watson',
    },
    image: blogImg3,
    url: '/blog/single/v2',
  },
  {
    title:
      'Mastering HTML Website Templates - Unleash Your Creativity with Bootstrap',
    category: 'Research',
    publishedAt: {
      date: 12,
      month: 'April',
      year: 2024,
    },
    publishedBy: {
      avatar: avatar4,
      firstName: 'Louis',
      lastName: 'Ferguson',
    },
    image: blogImg8,
    url: '/blog/single/v2',
  },
  {
    title: 'Effortless Web Design with Mizzle - Unlock Your Creative Potential',
    category: 'Design',
    publishedAt: {
      date: 8,
      month: 'April',
      year: 2024,
    },
    publishedBy: {
      avatar: avatar9,
      firstName: 'Allen',
      lastName: 'Smith',
    },
    image: blogImg7,
    url: '/blog/single/v2',
  },
]
