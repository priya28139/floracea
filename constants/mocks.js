const categories = [
  {
    id: 'plants',
    name: 'Plants',
    image: '~/assets/icons/plant.png',
    count: 147,
    tags: ['products', 'inspirations'],
  },
  {
    id: 'seeds',
    name: 'Seeds',
    image: '~/assets/icons/seed.png',
    count: 16,
    tags: ['products', 'shop'],
  },
  {
    id: 'flowers',
    name: 'Flowers',
    image: '~/assets/icons/flower.png',
    count: 68,
    tags: ['products', 'inspirations'],
  },
  {
    id: 'sprayers',
    name: 'Sprayers',
    image: '~/assets/icons/sprayer.png',
    count: 17,
    tags: ['products', 'shop'],
  },
  {
    id: 'pots',
    name: 'Pots',
    image: '~/assets/icons/pot.png',
    count: 47,
    tags: ['products', 'shop'],
  },
  {
    id: 'fertilizers',
    name: 'Fertilizers',
    image: '~/assets/icons/fertilizer.png',
    count: 9,
    tags: ['products', 'shop'],
  },
];

const products = [
  {
    id: 1,
    name: '16 Best Plants That Thrive In Your Bedroom',
    description:
      'Bedrooms deserve to be decorated with lush greenery just like every other room in the house – but it can be tricky to find a plant that thrives here. Low light, high humidity and warm temperatures mean only certain houseplants will flourish.',
    tags: ['Interior', '27 m²', 'Ideas'],
    gallery: [
      require('~/assets/images/plants_1.png'),
      require('~/assets/images/plants_2.png'),
      require('~/assets/images/plants_3.png'),
      require('~/assets/images/plants_1.png'),
      require('~/assets/images/plants_2.png'),
      require('~/assets/images/plants_3.png'),
    ],
  },
];

const profile = {
  username: 'Paul',
  location: 'Milan',
  email: 'paul.jameson@work.com',
  budget_cap: 1000,
  monthly_cap: 5000,
  notifications: true,
  newsletter: false,
  profile: require('~/assets/images/profile.png'),
};

const explore = [
  require('~/assets/images/explore-1.png'),
  require('~/assets/images/explore-2.png'),
  require('~/assets/images/explore-3.png'),
  require('~/assets/images/explore-4.png'),
  require('~/assets/images/explore-5.png'),
  require('~/assets/images/explore-6.png'),
];

export default {
  categories,
  products,
  profile,
  explore,
};
