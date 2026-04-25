import avatar1 from '../reviews/av1.png'
import avatar2 from '../reviews/av2.png'
import avatar3 from '../reviews/av3.png'
import avatar4 from '../reviews/av4.png'

const loremText = 'Lorem ipsum dolor sit amet consectetur. Tempor mauris lectus placerat tincidunt. Eu luctus nibh euismod nec eget arcu. Aenean non urna iaculis eu felis. Dictum consectetur metus faucibus volutpat risus amet. Gravida volutpat tempor sed eu.';

export const reviews = [
  // User ID: 1
  { id: 1, userId: 1, userName: 'Sadpanda176', userAvatar: avatar1, date: '13.11.2025', rating: 4.7, comment: loremText },
  { id: 2, userId: 1, userName: 'Sadpanda176', userAvatar: avatar2, date: '13.11.2025', rating: 4.5, comment: loremText },

  // User ID: 2
  { id: 3, userId: 2, userName: 'IronMan_99', userAvatar: avatar3, date: '14.11.2025', rating: 5.0, comment: loremText },
  { id: 4, userId: 2, userName: 'IronMan_99', userAvatar: avatar4, date: '14.11.2025', rating: 4.8, comment: loremText },

  // User ID: 3
  { id: 5, userId: 3, userName: 'TechEnthusiast', userAvatar: avatar1, date: '15.11.2025', rating: 4.2, comment: 'Great product, but the delivery took a bit longer than expected.' },
  { id: 6, userId: 3, userName: 'TechEnthusiast', userAvatar: avatar2, date: '15.11.2025', rating: 4.9, comment: loremText },

  // User ID: 4
  { id: 7, userId: 4, userName: 'Alice_Wonder', userAvatar: avatar3, date: '16.11.2025', rating: 3.5, comment: 'The quality is okay, but I expected more features for this price.' },
  { id: 8, userId: 4, userName: 'Alice_Wonder', userAvatar: avatar4, date: '16.11.2025', rating: 4.0, comment: loremText },

  // User ID: 5
  { id: 9, userId: 5, userName: 'Mister_Key', userAvatar: avatar1, date: '17.11.2025', rating: 5.0, comment: 'Absolutely perfect! Highly recommended to everyone.' },
  { id: 10, userId: 5, userName: 'Mister_Key', userAvatar: avatar2, date: '17.11.2025', rating: 4.7, comment: loremText },
  { id: 11, userId: 5, userName: 'Mister_Key', userAvatar: avatar3, date: '18.11.2025', rating: 4.3, comment: loremText }
];