import product1 from '../assets/shops/shop1/products/product1.webp'
import product2 from '../assets/shops/shop1/products/product2.webp'
import product3 from '../assets/shops/shop1/products/product3.webp'
import product4 from '../assets/shops/shop1/products/product4.webp'
import product5 from '../assets/shops/shop1/products/product5.webp'
import product6 from '../assets/shops/shop1/products/product6.webp'
import product7 from '../assets/shops/shop1/products/product7.webp'
import product8 from '../assets/shops/shop1/products/product8.webp'

import product21 from '../assets/shops/shop2/products/product1.webp'
import product22 from '../assets/shops/shop2/products/product2.webp'
import product23 from '../assets/shops/shop2/products/product3.webp'
import product24 from '../assets/shops/shop2/products/product4.webp'
import product25 from '../assets/shops/shop2/products/product5.webp'
import product26 from '../assets/shops/shop2/products/product6.webp'
import product27 from '../assets/shops/shop2/products/product7.webp'
import product28 from '../assets/shops/shop2/products/product8.webp'

import product31 from '../assets/shops/shop3/products/product1.webp'
import product32 from '../assets/shops/shop3/products/product2.webp'
import product33 from '../assets/shops/shop3/products/product3.webp'
import product34 from '../assets/shops/shop3/products/product4.webp'
import product35 from '../assets/shops/shop3/products/product5.webp'
import product36 from '../assets/shops/shop3/products/product6.webp'
import product37 from '../assets/shops/shop3/products/product7.webp'
import product38 from '../assets/shops/shop3/products/product8.webp'

import product41 from '../assets/shops/shop4/products/product1.webp'
import product42 from '../assets/shops/shop4/products/product2.webp'
import product43 from '../assets/shops/shop4/products/product3.webp'
import product44 from '../assets/shops/shop4/products/product4.webp'
import product45 from '../assets/shops/shop4/products/product5.webp'
import product46 from '../assets/shops/shop4/products/product6.webp'
import product47 from '../assets/shops/shop4/products/product7.webp'
import product48 from '../assets/shops/shop4/products/product8.webp'

import product51 from '../assets/shops/shop5/products/product1.webp'
import product52 from '../assets/shops/shop5/products/product2.webp'
import product53 from '../assets/shops/shop5/products/product3.webp'
import product54 from '../assets/shops/shop5/products/product4.webp'
import product55 from '../assets/shops/shop5/products/product5.webp'
import product56 from '../assets/shops/shop5/products/product6.webp'
import product57 from '../assets/shops/shop5/products/product7.webp'
import product58 from '../assets/shops/shop5/products/product8.webp'


export const products = [
  {
    userId: '1',
    products: [
      {
        productId: '1',
        variant: 'default',
        imgSrc: product1,
        description: 'Lightweight Rose Gold Notebook',
        price: '299',
        type: 'giveaway',
        oldPrice: '999',
        time: '13:17',
        sale: '11 joined'
      },
      {
        productId: '2',
        variant: 'default',
        imgSrc: product2,
        description: 'ASUS Zenbook Lumina OLED',
        price: '999',
        oldPrice: '1299',
        type: 'showing-now',
      },
      {
        productId: '3',
        variant: 'default',
        imgSrc: product3,
        description: 'ASUS Zenbook Lumina OLED',
        oldPrice: '2099',
        time: '10:00',
        price: '999',
        type: 'discount',
        discountLabel: '89% OFF'
      },
      {
        productId: '4',
        variant: 'default',
        imgSrc: product4,
        description: 'ASUS ROG Strix Gaming Laptop',
        oldPrice: '7085',
        time: '7:14',
        price: '$1299',
        type: 'auction',
      },
      {
        productId: '5',
        variant: 'default',
        imgSrc: product5,
        description: 'Premium Silver Ultrabook',
        oldPrice: '2000',
        price: '1799',
        time: '10:00',
        joined: 11,
        type: 'default',
      },
      {
        productId: '6',
        variant: 'auction',
        imgSrc: product6,
        description: 'AI-Powered Smart Laptop',
        price: '999',
        type: 'default'
      },
      {
        productId: '7',
        variant: 'default',
        imgSrc: product7,
        description: 'ASUS Zenbook 14 Dark',
        price: '499',
        type: 'default'
      },
      {
        productId: '8',
        variant: 'giveaway',
        imgSrc: product8,
        description: 'ASUS ROG Zephyrus Gaming',
        price: '799',
        type: 'default',
      },
    ]
  },
  {
    userId: '2',
    products: [
      {
        productId: '9',
        variant: 'default',
        imgSrc: product21,
        description: 'Lorem ipsum dolor sit amet consectetur.',
        price: '13',
        type: 'showing-now',
        oldPrice: '129',
        time: false,
        sale: 'Next 2 hours Only!'
      },
      {
        productId: '10',
        variant: 'default',
        imgSrc: product22,
        description: 'Lorem ipsum dolor sit amet consectetur.',
        oldPrice: '7085',
        time: '10:00',
        price: '13',
        type: 'discount',
        discountLabel: '89% OFF'
      },
      {
        productId: '11',
        variant: 'default',
        imgSrc: product23,
        description: 'Lorem ipsum dolor sit amet consectetur.',
        oldPrice: '7085',
        time: '10:00',
        joined: 11,
        type: 'giveaway',
      },
      {
        productId: '12',
        variant: 'default',
        imgSrc: product24,
        description: 'Lorem ipsum dolor sit amet consectetur.',
        price: '13',
        type: 'default',
      },

      {
        productId: '13',
        variant: 'default',
        imgSrc: product25,
        description: 'Lorem ipsum dolor sit amet consectetur.',
        oldPrice: '7085',
        time: '7:14',
        price: '13',
        type: 'auction',
      },

      {
        productId: '14',
        variant: 'auction',
        imgSrc: product26,
        description: 'Lorem ipsum dolor sit amet consectetur.',
        price: 785,
        type: 'default'
      },
      {
        productId: '15',
        variant: 'default',
        imgSrc: product27,
        description: 'Lorem ipsum dolor sit amet consectetur.',
        price: 45,
        type: 'default'
      },
      {
        productId: '16',
        variant: 'giveaway',
        imgSrc: product28,
        description: 'Lorem ipsum dolor sit amet consectetur.',
        price: 'VALUE OF $145',
        type: 'default',
      },
    ]
  },
  {
    userId: '3',
    products: [
      {
        productId: '17',
        variant: 'default',
        imgSrc: product31,
        description: 'Lorem ipsum dolor sit amet consectetur.',
        oldPrice: '1999',
        price: '599',
        time: '6:55',
        joined: 11,
        type: 'discount',
        sale: 'Next 4 hours!'

      },
      {
        productId: '18',
        variant: 'default',
        imgSrc: product32,
        description: 'Lorem ipsum dolor sit amet consectetur.',
        price: '599',
        type: 'giveaway',
        joined: 3,
        oldPrice: '1999',
        time: false,
        sale: 'Next 4 hours!'
      },
      {
        productId: '19',
        variant: 'default',
        imgSrc: product33,
        description: 'Lorem ipsum dolor sit amet consectetur.',
        price: '13',
        type: 'showing-now',
      },
      {
        productId: '20',
        variant: 'default',
        imgSrc: product34,
        description: 'Lorem ipsum dolor sit amet consectetur.',
        oldPrice: '7085',
        time: '10:00',
        price: '13',
        type: 'default',
        discountLabel: '89% OFF'
      },
      {
        productId: '21',
        variant: 'default',
        imgSrc: product35,
        description: 'Lorem ipsum dolor sit amet consectetur.',
        oldPrice: '7085',
        time: '7:14',
        price: '13',
        type: 'auction',
      },
      {
        productId: '22',
        variant: 'auction',
        imgSrc: product36,
        description: 'Lorem ipsum dolor sit amet consectetur.',
        price: 785,
        type: 'default'
      },
      {
        productId: '23',
        variant: 'default',
        imgSrc: product37,
        description: 'Lorem ipsum dolor sit amet consectetur.',
        price: 45,
        type: 'default'
      },
      {
        productId: '24',
        variant: 'giveaway',
        imgSrc: product38,
        description: 'Lorem ipsum dolor sit amet consectetur.',
        price: '145',
        type: 'default',
      },
    ]
  },
  {
    userId: '4',
    products: [
      {
        productId: '25',
        variant: 'default',
        imgSrc: product41,
        description: 'Lorem ipsum dolor sit amet consectetur.',
        oldPrice: '599',
        price: '499',
        time: '5:25',
        joined: 11,
        type: 'discount',
        sale: 'Today Only!'
      },
      {
        productId: '26',
        variant: 'default',
        imgSrc: product42,
        description: 'Lorem ipsum dolor sit amet consectetur.',
        oldPrice: '7085',
        time: false,
        price: '13',
        type: 'giveaway',
        joined: 3,
        discountLabel: '89% OFF'
      },
      {
        productId: '27',
        variant: 'default',
        imgSrc: product43,
        description: 'Lorem ipsum dolor sit amet consectetur.',
        price: '13',
        type: 'showing-now',
      },
      {
        productId: '28',
        variant: 'default',
        imgSrc: product44,
        description: 'Lorem ipsum dolor sit amet consectetur.',
        price: '499',
        type: 'default',
        oldPrice: '7541',
        time: false,

      },
      {
        productId: '29',
        variant: 'default',
        imgSrc: product45,
        description: 'Lorem ipsum dolor sit amet consectetur.',
        oldPrice: '7085',
        time: '7:14',
        price: '13',
        type: 'auction',
      },
      {
        productId: '30',
        variant: 'auction',
        imgSrc: product46,
        description: 'Lorem ipsum dolor sit amet consectetur.',
        price: 785,
        type: 'default'
      },
      {
        productId: '31',
        variant: 'default',
        imgSrc: product47,
        description: 'Lorem ipsum dolor sit amet consectetur.',
        price: 45,
        type: 'default'
      },
      {
        productId: '32',
        variant: 'giveaway',
        imgSrc: product48,
        description: 'Lorem ipsum dolor sit amet consectetur.',
        price: '145',
        type: 'default',
      },
    ]
  },
  {
    userId: '5',
    products: [
      {
        productId: '33',
        variant: 'default',
        imgSrc: product51,
        description: 'Lorem ipsum dolor sit amet consectetur.',
        oldPrice: '7085',
        price: '3999',
        time: '10:00',
        joined: 11,
        type: 'discount',
        sale: 'Today Only!'

      },
      {
        productId: '34',
        variant: 'default',
        imgSrc: product52,
        description: 'Lorem ipsum dolor sit amet consectetur.',
        oldPrice: '7085',
        time: false,
        price: '13',
        type: 'giveaway',
        joined: 3,
        discountLabel: '89% OFF'
      },
      {
        productId: '35',
        variant: 'default',
        imgSrc: product53,
        description: 'Lorem ipsum dolor sit amet consectetur.',
        price: '13',
        type: 'showing-now',
      },
      {
        productId: '36',
        variant: 'default',
        imgSrc: product54,
        description: 'Lorem ipsum dolor sit amet consectetur.',
        price: '1299',
        type: 'default',
        oldPrice: '7800',
        time: false,
        sale: 'Today Only!'
      },

      {
        productId: '37',
        variant: 'default',
        imgSrc: product55,
        description: 'Lorem ipsum dolor sit amet consectetur.',
        oldPrice: '7085',
        time: '7:14',
        price: '13',
        type: 'auction',
      },
      {
        productId: '38',
        variant: 'auction',
        imgSrc: product56,
        description: 'Lorem ipsum dolor sit amet consectetur.',
        price: 785,
        type: 'default'
      },
      {
        productId: '39',
        variant: 'default',
        imgSrc: product57,
        description: 'Lorem ipsum dolor sit amet consectetur.',
        price: 45,
        type: 'default'
      },
      {
        productId: '40',
        variant: 'giveaway',
        imgSrc: product58,
        description: 'Lorem ipsum dolor sit amet consectetur.',
        price: '145',
        type: 'default',
      },
    ]
  },
]