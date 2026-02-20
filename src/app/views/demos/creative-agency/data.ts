const client1 = 'assets/images/client/01.svg';
const client2 = 'assets/images/client/02.svg';
const client3 = 'assets/images/client/03.svg';
const client4 = 'assets/images/client/04.svg';

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