import avatar1 from './img/avatar1.png'
import avatar2 from './img/avatar2.png'
import avatar3 from './img/avatar3.png'
import avatar4 from './img/avatar-4.png'
import avatar5 from './img/avatar-5.png'

// -----------stream preview-----------
import streamPreview1 from '../shops/shop2/preview/stream/streamPrev1.jpg'

// -----------video preview-----------
import videoPreview1 from '../shops/shop2/preview/video/videoPrev1.jpg'

// -----------upcoming preview-----------
import upcomingPreview1 from '../shops/shop2/preview/upcoming/upcomingPrev1.jpg'

// -----------stream-------------
import stream1 from '../shops/shop2/videos/stream/stream1.MP4'

// -----------video--------------
import video1 from '../shops/shop2/videos/video/video1.MP4'

//----------delete-------

import stream2 from './streams/stream2.mp4';
import stream3 from './streams/stream3.mp4';
import stream4 from './streams/stream4.mp4';
import stream5 from './streams/stream5.mp4';

import video2 from './video/video2.mp4';
import video3 from './video/video3.mp4';
import video4 from './video/video4.mp4';
import video5 from './video/video5.mp4';

export const streamsData = [
  {
    videoId: '1',
    userId: '1',
    userName: "Live Haul Hub",
    avatarUrl: avatar1,
    star: true,
    streamVideo: stream1,
    videoTitle: "$1 Starts, Giveaways, Macbooks, iPads, Chromebooks & More!",
    category: "Appliances",
    description: "Appliances, Home electronics, Computers, Computer Appliances, Home electronics, Computers, Computer",
    status: 'live',
    badgeText: '3K',
    isNewSeller: true,
    rating: 5,
    hasNotification: false,
    screenSaver: streamPreview1
  },
  {
    videoId: '2',
    userId: '2',
    userName: "Spotlight Sales",
    avatarUrl: avatar2,
    star: true,
    streamVideo: stream2,
    videoTitle: "1 Starts, Giveaways, Macbooks, iPads, Chromebooks & More!",
    category: "Appliances",
    description: "Appliances, Home electronics, Comasdasd",
    status: 'live',
    badgeText: '2.3K',
    rating: 4.4,
    isNewSeller: false,
    hasNotification: false,
    screenSaver: 'https://images.wallpaperscraft.ru/image/single/blesk_tochki_chernyj_fon_121191_1920x1200.jpg'

  },
  {
    videoId: '3',
    userId: '3',
    userName: "Flash Sale Live",
    avatarUrl: avatar3,
    star: true,
    streamVideo: stream3,
    videoTitle: "⚡️‼️Voltage HIGH END Electronics Show! Feat Abbie👀 Exercise Equipment",
    category: "Appliances",
    description: "Appliances, Home electronics, Coasda",
    status: 'live',
    badgeText: '1K',
    isNewSeller: true,
    rating: 4.1,
    hasNotification: false,
    screenSaver: 'https://images.wallpaperscraft.ru/image/single/blesk_tochki_chernyj_fon_121191_1920x1200.jpg'

  },
  {
    videoId: '4',
    userId: '4',
    userName: "Best buys",
    avatarUrl: avatar4,
    star: false,
    streamVideo: stream4,
    videoTitle: "Pallet Pulls and Giveaways! Join the Shady Deals Crew!",
    category: "Appliances",
    description: "Appliances, Home electronics,",
    badgeText: '835',
    status: 'live',
    rating: 4.8,
    isNewSeller: false,
    hasNotification: false,
    screenSaver: 'https://images.wallpaperscraft.ru/image/single/blesk_tochki_chernyj_fon_121191_1920x1200.jpg'

  },
  {
    videoId: '5',
    userId: '5',
    userName: "Curated Catch",
    avatarUrl: avatar5,
    star: true,
    streamVideo: stream5,
    videoTitle: "Pallet Pulls and Giveaways! Join the Shady Deals Crew!",
    category: "Appliances",
    description: "Appliances, Home electronics, Computers, Computers",
    badgeText: '120',
    status: 'live',
    rating: 4,
    isNewSeller: false,
    hasNotification: false,
    screenSaver: 'https://images.wallpaperscraft.ru/image/single/blesk_tochki_chernyj_fon_121191_1920x1200.jpg'

  },


  //---------------------upcoming----------------------

  {
    videoId: '7',
    userId: '1',
    userName: "Live Haul Hub",
    avatarUrl: avatar1,
    star: true,
    streamVideo: video1,
    videoTitle: "$1 Starts, Giveaways, Macbooks, iPads, Chromebooks & More!",
    category: "Gadgets",
    description: "Appliances, Home electronics, Computers, Computer Appliances, Home electronics, Computers, Computer",
    badgeText: '01:0:15',
    textBadge: 'Today 11:30 PM',
    status: 'upcoming',
    rating: 5,
    isNewSeller: true,
    hasNotification: true,
    screenSaver: upcomingPreview1
  },
  {
    videoId: '8',
    userId: '2',
    userName: "Spotlight Sales",
    avatarUrl: avatar2,
    star: true,
    streamVideo: video1,
    videoTitle: "1 Starts, Giveaways, Macbooks, iPads, Chromebooks & More!",
    category: "Gadgets",
    description: "Appliances, Home electronics, Comasdasd",
    badgeText: '1:10:30',
    textBadge: 'Today 11:30 PM',
    status: 'upcoming',
    rating: 4.4,
    isNewSeller: false,
    hasNotification: true,
    screenSaver: 'https://images.wallpaperscraft.ru/image/single/blesk_tochki_chernyj_fon_121191_1920x1200.jpg'
  },
  {
    videoId: '9',
    userId: '3',
    userName: "Flash Sale Live",
    avatarUrl: avatar3,
    star: true,
    streamVideo: video1,
    videoTitle: "⚡️‼️Voltage HIGH END Electronics Show! Feat Abbie👀 Exercise Equipment",
    category: "Gadgets",
    description: "Appliances, Home electronics, Coasda",
    status: 'upcoming',
    isNewSeller: true,
    badgeText: '0:1:30',
    textBadge: 'Today 11:30 PM',
    rating: 4.1,
    hasNotification: true,
    screenSaver: 'https://images.wallpaperscraft.ru/image/single/blesk_tochki_chernyj_fon_121191_1920x1200.jpg'
  },
  {
    videoId: '10',
    userId: '4',
    userName: "Best buys",
    avatarUrl: avatar4,
    star: false,
    streamVideo: video1,
    videoTitle: "Pallet Pulls and Giveaways! Join the Shady Deals Crew!",
    category: "Gadgets",
    description: "Appliances, Home electronics,",
    badgeText: '0:2:50',
    textBadge: 'Today 11:30 PM',
    status: 'upcoming',
    rating: 4.8,
    isNewSeller: false,
    hasNotification: true,
    screenSaver: 'https://images.wallpaperscraft.ru/image/single/blesk_tochki_chernyj_fon_121191_1920x1200.jpg'
  },
  {
    videoId: '11',
    userId: '5',
    userName: "Curated Catch",
    avatarUrl: avatar5,
    star: true,
    streamVideo: video1,
    videoTitle: "Pallet Pulls and Giveaways! Join the Shady Deals Crew!",
    category: "Gadgets",
    description: "Appliances, Home electronics, Computers, Computers",
    badgeText: '2:20:57',
    textBadge: 'Today 11:30 PM',
    status: 'upcoming',
    rating: 4,
    isNewSeller: false,
    hasNotification: true,
    screenSaver: 'https://images.wallpaperscraft.ru/image/single/blesk_tochki_chernyj_fon_121191_1920x1200.jpg'
  },


  //---------------------Videos----------------------

  {
    videoId: '12',
    userId: '1',
    userName: "Live Haul Hub",
    avatarUrl: avatar1,
    star: true,
    streamVideo: video1,
    videoTitle: "$1 Starts, Giveaways, Macbooks, iPads, Chromebooks & More!",
    category: "Gadgets",
    description: "Appliances, Home electronics, Computers, Computer Appliances, Home electronics, Computers, Computer",
    badgeText: '3K',
    status: 'video',
    rating: 5,
    isNewSeller: true,
    hasNotification: false,
    screenSaver: videoPreview1
  },
  {
    videoId: '13',
    userId: '2',
    userName: "Spotlight Sales",
    avatarUrl: avatar2,
    star: true,
    streamVideo: video2,
    videoTitle: "1 Starts, Giveaways, Macbooks, iPads, Chromebooks & More!",
    category: "Phones",
    description: "Appliances, Home electronics, Comasdasd",
    badgeText: '1.2K',
    status: 'video',
    rating: 4.4,
    isNewSeller: false,
    hasNotification: false,
    screenSaver: 'https://images.wallpaperscraft.ru/image/single/blesk_tochki_chernyj_fon_121191_1920x1200.jpg'
  },
  {
    videoId: '14',
    userId: '3',
    userName: "Flash Sale Live",
    avatarUrl: avatar3,
    star: true,
    streamVideo: video3,
    videoTitle: "⚡️‼️Voltage HIGH END Electronics Show! Feat Abbie👀 Exercise Equipment",
    category: "Phones",
    description: "Appliances, Home electronics, Coasda",
    status: 'video',
    isNewSeller: true,
    badgeText: '2.2K',
    rating: 4.1,
    hasNotification: false,
    screenSaver: 'https://images.wallpaperscraft.ru/image/single/blesk_tochki_chernyj_fon_121191_1920x1200.jpg'
  },
  {
    videoId: '15',
    userId: '4',
    userName: "Best buys",
    avatarUrl: avatar4,
    star: false,
    streamVideo: video4,
    videoTitle: "Pallet Pulls and Giveaways! Join the Shady Deals Crew!",
    category: "Phones",
    description: "Appliances, Home electronics,",
    badgeText: '900',
    status: 'video',
    rating: 4.8,
    isNewSeller: false,
    hasNotification: false,
    screenSaver: 'https://images.wallpaperscraft.ru/image/single/blesk_tochki_chernyj_fon_121191_1920x1200.jpg'
  },
  {
    videoId: '16',
    userId: '5',
    userName: "Curated Catch",
    avatarUrl: avatar5,
    star: true,
    streamVideo: video5,
    videoTitle: "Pallet Pulls and Giveaways! Join the Shady Deals Crew!",
    category: "Phones",
    description: "Appliances, Home electronics, Computers, Computers",
    badgeText: '754',
    status: 'video',
    rating: 4,
    isNewSeller: false,
    hasNotification: false,
    screenSaver: 'https://images.wallpaperscraft.ru/image/single/blesk_tochki_chernyj_fon_121191_1920x1200.jpg'
  },
]