/*
* @Author: Abhi
* @Date:   2018-06-27 17:18:22
* @Last Modified by:   Abhi
* @Last Modified time: 2018-07-15 03:34:31
*/

import moment from 'moment';

// Hardcode days for the sake of simplicity
const days = [
  'Today',
  'Tomorrow',
  moment()
    .add(2, 'days')
    .format('ddd, MMM D')
];
// Same for times
const times = [
  '9:00 AM',
  '11:10 AM',
  '12:00 PM',
  '1:50 PM',
  '4:30 PM',
  '6:00 PM',
  '7:10 PM',
  '9:45 PM'
];

const price = {
  single: 10,
  group: 8
};
const location = {
  borough: 'brooklyn',
  city: 'new york',
  country: 'u s a'
};
const duration = 4; // in hours by default
const language = ['english'];
const activity_type = 'nightlife';
const reviews = [
  {
    stars: 4,
    review: 'text'
  },
  {
    stars: 4,
    review: 'text'
  },
  {
    stars: 4,
    review: 'text'
  },
  {
    stars: 4,
    review: 'text'
  }
];
const included = ['free shots', 'food', 'entry'];
const overview =
  '"Forgot all the common touristy sites. I\'m going to show you how we really party \
                  in New York City. They dont call it "the city that never sleeps" for nothing."';
const images = [
  'https://s-media-cache-ak0.pinimg.com/originals/40/4f/83/404f83e93175630e77bc29b3fe727cbe.jpg',
  'https://s-media-cache-ak0.pinimg.com/originals/8d/1a/da/8d1adab145a2d606c85e339873b9bb0e.jpg',
  'https://s-media-cache-ak0.pinimg.com/originals/ee/51/39/ee5139157407967591081ee04723259a.png',
  'https://s-media-cache-ak0.pinimg.com/originals/ee/51/39/ee5139157407967591081ee04723259a.png',
  'https://s-media-cache-ak0.pinimg.com/originals/ee/51/39/ee5139157407967591081ee04723259a.png'
];

const color = 'red';

export const experiences = [
  {
    title: "Discover the City's Party Scene",
    poster: 'https://i.imgur.com/po7UezG.jpg',
    genre: 'Drama/Romance',
    days,
    times,
    price,
    location,
    duration,
    language,
    activity_type,
    reviews,
    included,
    overview,
    images,
    color
  },
  {
    title: 'Paterson',
    poster: 'https://i.imgur.com/pE0C9E0.jpg',
    genre: 'Drama/Comedy',
    days,
    times,
    price,
    location,
    duration,
    language,
    activity_type,
    reviews,
    included,
    overview,
    images,
    color
  },
  {
    title: 'Jackie',
    poster: 'https://i.imgur.com/VqUi1sw.jpg',
    genre: 'Drama/Biography',
    days,
    times,
    price,
    location,
    duration,
    language,
    activity_type,
    reviews,
    included,
    overview,
    images,
    color
  },
  {
    title: 'Lo and Behold Reveries of the Connected World',
    poster: 'https://i.imgur.com/s106X7S.jpg',
    genre: 'Documentary',
    days,
    times,
    price,
    location,
    duration,
    language,
    activity_type,
    reviews,
    included,
    overview,
    images,
    color
  },
  {
    title: '10 Cloverfield Lane',
    poster: 'https://i.imgur.com/kV2BVdH.jpg',
    genre: 'Drama',
    days,
    times,
    price,
    location,
    duration,
    language,
    activity_type,
    reviews,
    included,
    overview,
    images,
    color
  },
  {
    title: 'Birth of a Nation',
    poster: 'https://i.imgur.com/a6HJj8S.jpg',
    genre: 'Fantasy/Myster',
    days,
    times,
    price,
    location,
    duration,
    language,
    activity_type,
    reviews,
    included,
    overview,
    images,
    color
  },
  {
    title: 'De Palma',
    poster: 'https://i.imgur.com/oOIa73M.jpg',
    genre: 'Documentary',
    days,
    times,
    price,
    location,
    duration,
    language,
    activity_type,
    reviews,
    included,
    overview,
    images,
    color
  },
  {
    title: 'Doctor Strange',
    poster: 'https://i.imgur.com/kyHDVOk.jpg',
    genre: 'Fantasy/Science Fiction',
    days,
    times,
    price,
    location,
    duration,
    language,
    activity_type,
    reviews,
    included,
    overview,
    images,
    color
  },
  {
    title: 'Eddie the Eagle',
    poster: 'https://i.imgur.com/GNrdAuF.jpg',
    genre: 'Drama/Sport',
    days,
    times,
    price,
    location,
    duration,
    language,
    activity_type,
    reviews,
    included,
    overview,
    images,
    color
  },
  {
    title: 'Pride and prejudice and zombies',
    poster: 'https://i.imgur.com/KhbG0Lw.jpg',
    genre: 'Thriller/Action',
    days,
    times,
    price,
    location,
    duration,
    language,
    activity_type,
    reviews,
    included,
    overview,
    images,
    color
  },
  {
    title: 'Finding Dory',
    poster: 'https://i.imgur.com/BTexHYJ.jpg',
    genre: 'Comedy/Adventure',
    days,
    times,
    price,
    location,
    duration,
    language,
    activity_type,
    reviews,
    included,
    overview,
    images,
    color
  },
  {
    title: 'Green Room',
    poster: 'https://i.imgur.com/Q0Ysh7L.jpg',
    genre: 'Crime/Thriller',
    days,
    times,
    price,
    location,
    duration,
    language,
    activity_type,
    reviews,
    included,
    overview,
    images,
    color
  },
  {
    title: 'Kubo and the Two Strings',
    poster: 'https://i.imgur.com/uTFCKZc.jpg',
    genre: 'Fantasy/Adventure',
    days,
    times,
    price,
    location,
    duration,
    language,
    activity_type,
    reviews,
    included,
    overview,
    images,
    color
  },
  {
    title: 'In a Valley of Violence',
    poster: 'https://i.imgur.com/DTtJ62G.jpg',
    genre: 'Drama/Western',
    days,
    times,
    price,
    location,
    duration,
    language,
    activity_type,
    reviews,
    included,
    overview,
    images,
    color
  },
  {
    title: 'O.J.: Made in America',
    poster: 'https://i.imgur.com/T8uc6x8.jpg',
    genre: 'Documentary',
    days,
    times,
    price,
    location,
    duration,
    language,
    activity_type,
    reviews,
    included,
    overview,
    images,
    color
  },
  {
    title: 'Rogue One: A Star Wars Story',
    poster: 'https://i.imgur.com/zOF2iYc.jpg',
    genre: 'Science Fiction/Action',
    days,
    times,
    price,
    location,
    duration,
    language,
    activity_type,
    reviews,
    included,
    overview,
    images,
    color
  },
  {
    title: 'Sing Street',
    poster: 'https://i.imgur.com/C3ExEb6.jpg',
    genre: 'Drama/Romance',
    days,
    times,
    price,
    location,
    duration,
    language,
    activity_type,
    reviews,
    included,
    overview,
    images,
    color
  },
  {
    title: 'Zoolander 2',
    poster: 'https://i.imgur.com/ejlIijD.jpg',
    genre: 'Comedy',
    days,
    times,
    price,
    location,
    duration,
    language,
    activity_type,
    reviews,
    included,
    overview,
    images,
    color
  }
];
