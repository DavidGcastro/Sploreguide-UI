
const experiences = [
  {
    category: 'Top Trending',
    title: 'Ecuador, Living Among Giants',
    location: 'Cotopaxi, Ecuador',
    duration: 120,
    languages: 'Spanish',
    activityType: 'Tour',
    included: null,
    overview: 'Ecuadorian Horse Tour',
    media: require('./assets/img/experiences/ecuador.jpg'),
    reviews: 1,
    host: {
      name: 'David',
      age: 25,
      sex: 'male',
      languages: ['english', 'spanish']
    },
    advisement: 'Must be 21 and over',
    offerings: [{ date: '8/20/93', price: 100 }],
    basePricePerPerson: 100, // int - base price per person
    basePricePerGroup: 200, // int - base price for a group},
    images: [
      require('./assets/img/experiences/nightlife.jpg'),
      require('./assets/img/experiences/graffiti.jpg'),
      require('./assets/img/experiences/seattle.jpg')
    ],
    description: '”Forget all the common touristy sites. I’m going to show you how we really party in New York City. They don’t call it “the city that never sleeps” for nothing."'
  },

  {
    category: 'Top Trending',
    title: "NYC's Hidden Nature",
    location: 'Bronx, New York',
    duration: 120,
    languages: 'English',
    activityType: 'Nature',
    included: null,
    overview: "Join me to discover the city's underated nature",
    media: require('./assets/img/experiences/nature.jpg'),
    reviews: 10,
    host: {
      name: 'Will',
      age: 30,
      sex: 'male',
      languages: ['english', 'german']
    },
    advisement: 'All ages',
    offerings: [{ date: '8/20/93', price: 100 }],
    basePricePerPerson: 100, // int - base price per person
    basePricePerGroup: 200,
    images: [
      require('./assets/img/experiences/ecuador.jpg'),
      require('./assets/img/experiences/ecuador.jpg'),
      require('./assets/img/experiences/ecuador.jpg')
    ],
    description: '”Forget all the common touristy sites. I’m going to show you how we really party in New York City. They don’t call it “the city that never sleeps” for nothing."'

  },
  {
    category: 'New in Your City',
    title: 'Hidden Gems: Queens',
    location: 'Queens, New York',
    duration: 200,
    languages: 'English',
    activityType: 'Nightlife',
    included: null,
    overview: "A unique experience into Queen's underground culinary scene.",
    media: require('./assets/img/experiences/queens.jpg'),
    reviews: 20,
    host: {
      name: 'Joe',
      age: 50,
      sex: 'male',
      languages: ['english', 'spanish']
    },
    advisement: 'Allergen Warning',
    offerings: [{ date: '8/20/93', price: 100 }],
    basePricePerPerson: 100, // int - base price per person
    basePricePerGroup: 200, // int - base price for a group},
    images: [
      require('./assets/img/experiences/ecuador.jpg'),
      require('./assets/img/experiences/ecuador.jpg'),
      require('./assets/img/experiences/ecuador.jpg')
    ],
    description: '”Forget all the common touristy sites. I’m going to show you how we really party in New York City. They don’t call it “the city that never sleeps” for nothing."'

  },
  {
    category: 'Weekly Top Picks',
    title: 'Tokyo, How I See It',
    location: 'Tokyo, Japan',
    duration: 200,
    languages: 'Japanese',
    activityType: 'Tour',
    included: null,
    overview: 'Live in Tokyo, Like A Local.',
    media: require('./assets/img/experiences/tokyo-skyline.jpg'),
    reviews: 20,
    host: {
      name: 'Alfred',
      age: 50,
      sex: 'male',
      languages: ['english', 'Japanese']
    },
    advisement: 'Allergen Warning',
    offerings: [{ date: '8/20/93', price: 100 }],
    basePricePerPerson: 100, // int - base price per person
    basePricePerGroup: 200, // int - base price for a group},
    images: [
      require('./assets/img/experiences/ecuador.jpg'),
      require('./assets/img/experiences/ecuador.jpg'),
      require('./assets/img/experiences/ecuador.jpg')
    ],
    description: '”Forget all the common touristy sites. I’m going to show you how we really party in New York City. They don’t call it “the city that never sleeps” for nothing."'

  },
  {
    category: 'Weekly Top Picks',
    title: 'A Sunny Day in Seattle',
    location: 'Seattle, Washinton',
    duration: 200,
    languages: 'English',
    activityType: 'Tour',
    included: null,
    overview: "A unique experience into Queen's underground culinary scene.",
    media: require('./assets/img/experiences/seattle.jpg'),
    reviews: 20,
    host: {
      name: 'Alfred',
      age: 50,
      sex: 'male',
      languages: ['english', 'spanish']
    },
    advisement: 'Allergen Warning',
    offerings: [{ date: '8/20/93', price: 100 }],
    basePricePerPerson: 100, // int - base price per person
    basePricePerGroup: 200, // int - base price for a group},
    images: [
      require('./assets/img/experiences/ecuador.jpg'),
      require('./assets/img/experiences/ecuador.jpg'),
      require('./assets/img/experiences/ecuador.jpg')
    ],
    description: '”Forget all the common touristy sites. I’m going to show you how we really party in New York City. They don’t call it “the city that never sleeps” for nothing."'

  },
  {
    category: 'Best Rated',
    title: 'The Blue Pearl',
    location: 'Chefchaouen, Morocco',
    duration: 200,
    languages: 'French',
    activityType: 'Tour',
    included: null,
    overview: "A unique experience into Queen's underground culinary scene.",
    media: require('./assets/img/experiences/morocco.jpg'),
    reviews: 20,
    host: {
      name: 'Omar',
      age: 50,
      sex: 'male',
      languages: ['english', 'French']
    },
    advisement: 'Allergen Warning',
    offerings: [{ date: '8/20/93', price: 100 }],
    basePricePerPerson: 100, // int - base price per person
    basePricePerGroup: 200, // int - base price for a group},
    images: [
      require('./assets/img/experiences/ecuador.jpg'),
      require('./assets/img/experiences/ecuador.jpg'),
      require('./assets/img/experiences/ecuador.jpg')
    ],
    description: '”Forget all the common touristy sites. I’m going to show you how we really party in New York City. They don’t call it “the city that never sleeps” for nothing."'

  },
  {
    category: 'Best Rated',
    title: 'A Bike Ride in Amsterdam',
    location: 'Amsterdam, Netherlands ',
    duration: 200,
    languages: 'Dutch',
    activityType: 'Tour',
    included: null,
    overview: "A unique experience into Queen's underground culinary scene.",
    media: require('./assets/img/experiences/amsterdam.jpg'),
    reviews: 20,
    host: {
      name: 'Alfred',
      age: 50,
      sex: 'male',
      languages: ['english', 'spanish']
    },
    advisement: 'Allergen Warning',
    offerings: [{ date: '8/20/93', price: 100 }],
    basePricePerPerson: 100, // int - base price per person
    basePricePerGroup: 200, // int - base price for a group},
    images: [
      require('./assets/img/experiences/ecuador.jpg'),
      require('./assets/img/experiences/ecuador.jpg'),
      require('./assets/img/experiences/ecuador.jpg')
    ],
    description: '”Forget all the common touristy sites. I’m going to show you how we really party in New York City. They don’t call it “the city that never sleeps” for nothing."'

  },
  {
    category: 'Best Rated',
    title: 'Graffiti in Bushwick',
    location: 'Bushwick, Brooklyn ',
    duration: 200,
    languages: 'English',
    activityType: 'Tour',
    included: null,
    overview: "A walk through Bushwick's graffiti scene.",
    media: require('./assets/img/experiences/graffiti.jpg'),
    reviews: 20,
    host: {
      name: 'Alfred',
      age: 50,
      sex: 'male',
      languages: ['english', 'spanish']
    },
    advisement: 'Allergen Warning',
    offerings: [{ date: '8/20/93', price: 100 }],
    basePricePerPerson: 100, // int - base price per person
    basePricePerGroup: 200, // int - base price for a group},
    images: [
      require('./assets/img/experiences/ecuador.jpg'),
      require('./assets/img/experiences/ecuador.jpg'),
      require('./assets/img/experiences/ecuador.jpg')
    ],
    description: '”Forget all the common touristy sites. I’m going to show you how we really party in New York City. They don’t call it “the city that never sleeps” for nothing."'

  }
]

export default experiences
