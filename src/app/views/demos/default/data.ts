import { credits } from '@/app/common/constants'

const client1Img = '/images/client/01.svg'
const client2Img = '/images/client/02.svg'
const client3Img = '/images/client/03.svg'
const client4Img = '/images/client/04.svg'
const client5Img = '/images/client/05.svg'
const avatar1 = '/images/avatar/01.jpg'
const avatar2 = '/images/avatar/02.jpg'
const avatar3 = '/images/avatar/03.jpg'
const avatar5 = '/images/avatar/05.jpg'

export type ClientType = {
  icon?: string
  image?: string
  name?: string
  url?: string
}

export const clientData: ClientType[] = [
  {
    image: client1Img,
  },
  {
    image: client2Img,
  },
  {
    image: client3Img,
  },
  {
    image: client4Img,
  },
  {
    image: client5Img,
  },
  {
    image: client1Img,
  },
  {
    image: client2Img,
  },
  {
    image: client3Img,
  },
  {
    image: client4Img,
  },
  {
    image: client5Img,
  },
]

export type ServiceType = {
  title: string
  description: string
  icon: string
  url?: string
}

export const services: ServiceType[] = [
  {
    title: 'Digital Marketing',
    description: 'Growing brands online through digital channels.',
    icon: 'layers',
  },
  {
    title: 'Product Design',
    description: 'Creating products that users love and businesses need.',
    icon: 'boxes',
  },
  {
    title: 'Web Design',
    description:
      'Designing websites that are visually appealing & user-friendly.',
    icon: 'rectangle-circle',
  },
  {
    title: 'UI/UX Design',
    description:
      'Creating user interfaces that are both efficient and enjoyable.',
    icon: 'pen-tool',
  },
  {
    title: 'Business Strategy',
    description: 'Developing and executing plans to achieve business goals.',
    icon: 'briefcase-business',
  },
  {
    title: 'Research',
    description: 'Gathering and analyzing data to inform decision-making.',
    icon: 'binoculars',
  },
  {
    title: 'Web Development',
    description: 'Building and maintaining websites and web applications.',
    icon: 'code',
  },
  {
    title: 'Brand Design',
    description: 'Creating brands that are unique, memorable, and meaningful.',
    icon: 'target',
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

export const userData: User[] = [
  {
    id: '1',
    avatar: avatar3,
    firstName: 'Nix',
    lastName: 'Maxwell',
  },
  {
    id: '2',
    avatar: avatar1,
    firstName: 'Dennis',
    lastName: 'Barrett',
  },
  {
    id: '3',
    avatar: avatar2,
    firstName: 'Nix',
    lastName: 'Maxwell',
  },
  {
    id: '4',
    avatar: avatar5,
    firstName: 'Carolyn',
    lastName: 'Ortiz',
  },
]

export type TestimonialType = {
  userId?: User['id']
  user?: User
  title?: string
  comment: string
  rating: number
}

export const testimonials: TestimonialType[] = [
  {
    user: userData[0],
    comment:
      "The best Bootstrap theme we've ever used - it's easy to customize and comes with all the features we need.",
    rating: 4.5,
  },
  {
    user: userData[1],
    comment:
      "The best Bootstrap theme we've ever used - it's easy to customize and comes with all the features we need.",
    rating: 4.5,
  },

  {
    user: userData[2],
    comment:
      credits.name +
      ' helped us create a stunning website that reflects our brand perfectly.',
    rating: 4.5,
  },
  {
    user: userData[3],
    comment:
      'I highly recommend Mizzle to anyone looking for a high-quality Bootstrap theme.',
    rating: 4.5,
  },
]
