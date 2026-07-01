import avatar1 from '../assets/shops/avatars/avatar1.webp'
import avatar2 from '../assets/shops/avatars/avatar2.webp'
import avatar3 from '../assets/shops/avatars/avatar3.webp'
import avatar4 from '../assets/shops/avatars/avatar4.webp'
import avatar5 from '../assets/shops/avatars/avatar5.webp'

// -----------stream preview-----------
import streamPreview1 from '../assets/shops/shop1/preview/stream/streamPrev1.webp'
import streamPreview21 from '../assets/shops/shop2/preview/stream/streamPrev1.webp'
import streamPreview31 from '../assets/shops/shop3/preview/stream/streamPrev1.webp'
import streamPreview41 from '../assets/shops/shop4/preview/stream/streamPrev1.webp'
import streamPreview51 from '../assets/shops/shop5/preview/stream/streamPrev1.webp'


// -----------video preview-----------
import videoPreview1 from '../assets/shops/shop1/preview/video/videoPrev1.webp'
import videoPreview21 from '../assets/shops/shop2/preview/video/videoPrev1.webp'
import videoPreview31 from '../assets/shops/shop3/preview/video/videoPrev1.webp'
import videoPreview41 from '../assets/shops/shop4/preview/video/videoPrev1.webp'
import videoPreview51 from '../assets/shops/shop5/preview/video/videoPrev1.webp'



// -----------upcoming preview-----------
import upcomingPreview1 from '../assets/shops/shop1/preview/upcoming/upcomingPrev1.webp'
import upcomingPreview21 from '../assets/shops/shop2/preview/upcoming/upcomingPrev1.webp'
import upcomingPreview31 from '../assets/shops/shop3/preview/upcoming/upcomingPrev1.webp'
import upcomingPreview41 from '../assets/shops/shop4/preview/upcoming/upcomingPrev1.webp'
import upcomingPreview51 from '../assets/shops/shop5/preview/upcoming/upcomingPrev1.webp'



// -----------stream-------------
import stream1 from '../assets/shops/shop1/videos/stream/stream1.mp4'
import stream21 from '../assets/shops/shop2/videos/stream/stream1.mp4'
import stream31 from '../assets/shops/shop3/videos/stream/stream1.mp4'
import stream41 from '../assets/shops/shop4/videos/stream/stream1.mp4'
import stream51 from '../assets/shops/shop5/videos/stream/stream1.mp4'



// -----------video--------------
import video1 from '../assets/shops/shop1/videos/video/video1.mp4'
import video21 from '../assets/shops/shop2/videos/video/video1.mp4'
import video31 from '../assets/shops/shop3/videos/video/video1.mp4'
import video41 from '../assets/shops/shop4/videos/video/video1.mp4'
import video51 from '../assets/shops/shop5/videos/video/video1.mp4'





export const streamsData = [
  {
    videoId: '1',
    userId: '1',
    userName: "CompWorld",
    avatarUrl: avatar1,
    star: true,
    streamVideo: stream1,
    videoTitle: "Crazy tech & Blowout! Super stream",
    category: "Computers",
    description: "Computers, Phones",
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
    streamVideo: stream21,
    videoTitle: "1 Starts, Giveaways, Macbooks, iPads, Chromebooks & More!",
    category: "Appliances",
    description: "Appliances, Home electronics",
    status: 'live',
    badgeText: '2.3K',
    rating: 4.4,
    isNewSeller: false,
    hasNotification: false,
    screenSaver: streamPreview21

  },
  {
    videoId: '3',
    userId: '3',
    userName: "Flash Sale Live",
    avatarUrl: avatar3,
    star: true,
    streamVideo: stream31,
    videoTitle: "⚡️‼️Voltage HIGH END Electronics Show! Feat Abbie👀 Exercise Equipment",
    category: "Appliances",
    description: "Appliances, Home electronics",
    status: 'live',
    badgeText: '1K',
    isNewSeller: true,
    rating: 4.1,
    hasNotification: false,
    screenSaver: streamPreview31

  },
  {
    videoId: '4',
    userId: '4',
    userName: "Best buys",
    avatarUrl: avatar4,
    star: false,
    streamVideo: stream41,
    videoTitle: "Pallet Pulls and Giveaways! Join the Shady Deals Crew!",
    category: "Appliances",
    description: "Appliances, Home electronics",
    badgeText: '835',
    status: 'live',
    rating: 4.8,
    isNewSeller: false,
    hasNotification: false,
    screenSaver: streamPreview41

  },
  {
    videoId: '7',
    userId: '1',
    userName: "CompWorld",
    avatarUrl: avatar1,
    star: true,
    videoTitle: "Clearance Blowout: Double Laptops, Insane Prices!",
    category: "Computers",
    description: "Computers, Phones",
    badgeText: '01:0:15',
    textBadge: 'Today 11:30 PM',
    status: 'upcoming',
    rating: 5,
    isNewSeller: true,
    hasNotification: true,
    screenSaver: upcomingPreview1

  },


  //---------------------upcoming----------------------
  {
    videoId: '5',
    userId: '5',
    userName: "Curated Catch",
    avatarUrl: avatar5,
    star: true,
    streamVideo: stream51,
    videoTitle: "Pallet Pulls and Giveaways! Join the Shady Deals Crew!",
    category: "Appliances",
    description: "Appliances, Home electronics, Computers",
    badgeText: '120',
    status: 'live',
    rating: 4,
    isNewSeller: false,
    hasNotification: false,
    screenSaver: streamPreview51

  },

  {
    videoId: '8',
    userId: '2',
    userName: "Spotlight Sales",
    avatarUrl: avatar2,
    star: true,
    videoTitle: "1 Starts, Giveaways, Macbooks, iPads, Chromebooks & More!",
    category: "Gadgets",
    description: "Appliances, Home electronics",
    badgeText: '1:10:30',
    textBadge: 'Today 11:30 PM',
    status: 'upcoming',
    rating: 4.4,
    isNewSeller: false,
    hasNotification: true,
    screenSaver: upcomingPreview21
  },
  {
    videoId: '11',
    userId: '5',
    userName: "Curated Catch",
    avatarUrl: avatar5,
    star: true,
    videoTitle: "Pallet Pulls and Giveaways! Join the Shady Deals Crew!",
    category: "Gadgets",
    description: "Appliances, Home electronics, Computers",
    badgeText: '2:20:57',
    textBadge: 'Today 11:30 PM',
    status: 'upcoming',
    rating: 4,
    isNewSeller: false,
    hasNotification: true,
    screenSaver: upcomingPreview51
  },

  //////////////////////////////
  {
    videoId: '15',
    userId: '4',
    userName: "Best buys",
    avatarUrl: avatar4,
    star: false,
    streamVideo: video41,
    videoTitle: "Pallet Pulls and Giveaways! Join the Shady Deals Crew!",
    category: "Phones",
    description: "Appliances, Home electronics",
    badgeText: '900',
    status: 'video',
    rating: 4.8,
    isNewSeller: false,
    hasNotification: false,
    screenSaver: videoPreview41
  },
  //////////////////

  {
    videoId: '9',
    userId: '3',
    userName: "Flash Sale Live",
    avatarUrl: avatar3,
    star: true,
    videoTitle: "⚡️‼️Voltage HIGH END Electronics Show! Feat Abbie👀 Exercise Equipment",
    category: "Gadgets",
    description: "Appliances, Home electronics",
    status: 'upcoming',
    isNewSeller: true,
    badgeText: '0:1:30',
    textBadge: 'Today 11:30 PM',
    rating: 4.1,
    hasNotification: true,
    screenSaver: upcomingPreview31
  },

  //---------------------Videos----------------------


  {
    videoId: '13',
    userId: '2',
    userName: "Spotlight Sales",
    avatarUrl: avatar2,
    star: true,
    streamVideo: video21,
    videoTitle: "1 Starts, Giveaways, Macbooks, iPads, Chromebooks & More!",
    category: "Phones",
    description: "Appliances, Home electronics",
    badgeText: '1.2K',
    status: 'video',
    rating: 4.4,
    isNewSeller: false,
    hasNotification: false,
    screenSaver: videoPreview21
  },
  {
    videoId: '10',
    userId: '4',
    userName: "Best buys",
    avatarUrl: avatar4,
    star: false,
    videoTitle: "Pallet Pulls and Giveaways! Join the Shady Deals Crew!",
    category: "Gadgets",
    description: "Appliances, Home electronics",
    badgeText: '0:2:50',
    textBadge: 'Today 11:30 PM',
    status: 'upcoming',
    rating: 4.8,
    isNewSeller: false,
    hasNotification: true,
    screenSaver: upcomingPreview41
  },
  {
    videoId: '14',
    userId: '3',
    userName: "Flash Sale Live",
    avatarUrl: avatar3,
    star: true,
    streamVideo: video31,
    videoTitle: "⚡️‼️Voltage HIGH END Electronics Show! Feat Abbie👀 Exercise Equipment",
    category: "Phones",
    description: "Appliances, Home electronics",
    status: 'video',
    isNewSeller: true,
    badgeText: '2.2K',
    rating: 4.1,
    hasNotification: false,
    screenSaver: videoPreview31
  },


  {
    videoId: '12',
    userId: '1',
    userName: "CompWorld",
    avatarUrl: avatar1,
    star: true,
    streamVideo: video1,
    videoTitle: "Live stream! Crazy tech & Blowout!",
    category: "Computers",
    description: "Computers, Phones",
    badgeText: '3K',
    status: 'video',
    rating: 5,
    isNewSeller: true,
    hasNotification: false,
    screenSaver: videoPreview1
  },
  {
    videoId: '16',
    userId: '5',
    userName: "Curated Catch",
    avatarUrl: avatar5,
    star: true,
    streamVideo: video51,
    videoTitle: "Pallet Pulls and Giveaways! Join the Shady Deals Crew!",
    category: "Phones",
    description: "Appliances, Home electronics, Computers",
    badgeText: '754',
    status: 'video',
    rating: 4,
    isNewSeller: false,
    hasNotification: false,
    screenSaver: videoPreview51
  },
]