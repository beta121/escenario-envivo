import prod1 from '../assets/shops/shop1/products/products1.png'
import prod2 from '../assets/shops/shop1/products/products2.png'
import prod3 from '../assets/shops/shop1/products/products3.png'
import prod4 from '../assets/shops/shop1/products/products4.png'
import prod5 from '../assets/shops/shop1/products/products5.png'
import prod6 from '../assets/shops/shop1/products/products6.png'
import prod7 from '../assets/shops/shop1/products/products7.png'
import prod8 from '../assets/shops/shop1/products/products8.png'


//--------------delete---------------

import tel1 from './tel/tel1.jpg'
import tel2 from './tel/tel2.jpg'
import tel3 from './tel/tel3.jpg'
import tel4 from './tel/tel4.jpg'
import tel5 from './tel/tel5.jpg'

import pcProduct from './AllProducts/pcProduct.png'
import phoneProduct from './AllProducts/phoneProduct.png'
import phoneProduct1 from './AllProducts/phoneProduct1.png'
import phoneProduct2 from './AllProducts/phoneProduct2.png'
import sonyProduct from './AllProducts/sonyProduct.png'

export const productsData = [
  {
    userId: '1',
    products: [
      {
        productId: '1',
        variant: 'default',
        imgSrc: prod1,
        description: 'Lorem ipsum dolor sit amet consectetur.',
        price: '0',
        type: 'giveaway',
        oldPrice: '7085',
        time: '13:17',
        sale: '11 joined'
      },
      {
        productId: '2',
        variant: 'default',
        imgSrc: prod2,
        description: 'Lorem ipsum dolor sit amet consectetur.',
        price: '13',
        type: 'showing-now',
      },
      {
        productId: '3',
        variant: 'default',
        imgSrc: prod3,
        description: 'Lorem ipsum dolor sit amet consectetur.',
        oldPrice: '7085',
        time: '10:00',
        price: '13',
        type: 'discount',
        discountLabel: '89% OFF'
      },
      {
        productId: '4',
        variant: 'default',
        imgSrc: prod4,
        description: 'Lorem ipsum dolor sit amet consectetur.',
        oldPrice: '7085',
        time: '7:14',
        price: '13',
        type: 'auction',
      },
      {
        productId: '5',
        variant: 'default',
        imgSrc: prod5,
        description: 'Lorem ipsum dolor sit amet consectetur.',
        oldPrice: '7085',
        price: '1300',
        time: '10:00',
        joined: 11,
        type: 'default',
      },
      {
        productId: '6',
        variant: 'auction',
        imgSrc: prod6,
        description: 'Lorem ipsum dolor sit amet consectetur.',
        price: 785,
        type: 'default'
      },
      {
        productId: '7',
        variant: 'default',
        imgSrc: prod7,
        description: 'Lorem ipsum dolor sit amet consectetur.',
        price: 45,
        type: 'default'
      },
      {
        productId: '8',
        variant: 'giveaway',
        imgSrc: prod8,
        description: 'Lorem ipsum dolor sit amet consectetur.',
        price: '145',
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
        imgSrc: phoneProduct,
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
        imgSrc: tel2,
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
        imgSrc: tel4,
        description: 'Lorem ipsum dolor sit amet consectetur.',
        oldPrice: '7085',
        time: '10:00',
        joined: 11,
        type: 'giveaway',
      },
      {
        productId: '12',
        variant: 'default',
        imgSrc: tel1,
        description: 'Lorem ipsum dolor sit amet consectetur.',
        price: '13',
        type: 'default',
      },

      {
        productId: '13',
        variant: 'default',
        imgSrc: tel3,
        description: 'Lorem ipsum dolor sit amet consectetur.',
        oldPrice: '7085',
        time: '7:14',
        price: '13',
        type: 'auction',
      },

      {
        productId: '14',
        variant: 'auction',
        imgSrc: tel5,
        description: 'Lorem ipsum dolor sit amet consectetur.',
        price: 785,
        type: 'default'
      },
      {
        productId: '15',
        variant: 'default',
        imgSrc: tel3,
        description: 'Lorem ipsum dolor sit amet consectetur.',
        price: 45,
        type: 'default'
      },
      {
        productId: '16',
        variant: 'giveaway',
        imgSrc: tel2,
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
        imgSrc: phoneProduct1,
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
        imgSrc: prod5,
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
        imgSrc: prod3,
        description: 'Lorem ipsum dolor sit amet consectetur.',
        price: '13',
        type: 'showing-now',
      },
      {
        productId: '20',
        variant: 'default',
        imgSrc: prod3,
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
        imgSrc: prod4,
        description: 'Lorem ipsum dolor sit amet consectetur.',
        oldPrice: '7085',
        time: '7:14',
        price: '13',
        type: 'auction',
      },
      {
        productId: '22',
        variant: 'auction',
        imgSrc: prod1,
        description: 'Lorem ipsum dolor sit amet consectetur.',
        price: 785,
        type: 'default'
      },
      {
        productId: '23',
        variant: 'default',
        imgSrc: prod2,
        description: 'Lorem ipsum dolor sit amet consectetur.',
        price: 45,
        type: 'default'
      },
      {
        productId: '24',
        variant: 'giveaway',
        imgSrc: prod3,
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
        imgSrc: phoneProduct2,
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
        imgSrc: prod3,
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
        imgSrc: prod3,
        description: 'Lorem ipsum dolor sit amet consectetur.',
        price: '13',
        type: 'showing-now',
      },
      {
        productId: '28',
        variant: 'default',
        imgSrc: prod5,
        description: 'Lorem ipsum dolor sit amet consectetur.',
        price: '499',
        type: 'default',
        oldPrice: '7541',
        time: false,

      },
      {
        productId: '29',
        variant: 'default',
        imgSrc: prod4,
        description: 'Lorem ipsum dolor sit amet consectetur.',
        oldPrice: '7085',
        time: '7:14',
        price: '13',
        type: 'auction',
      },
      {
        productId: '30',
        variant: 'auction',
        imgSrc: prod1,
        description: 'Lorem ipsum dolor sit amet consectetur.',
        price: 785,
        type: 'default'
      },
      {
        productId: '31',
        variant: 'default',
        imgSrc: prod2,
        description: 'Lorem ipsum dolor sit amet consectetur.',
        price: 45,
        type: 'default'
      },
      {
        productId: '32',
        variant: 'giveaway',
        imgSrc: prod3,
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
        imgSrc: sonyProduct,
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
        imgSrc: prod3,
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
        imgSrc: prod3,
        description: 'Lorem ipsum dolor sit amet consectetur.',
        price: '13',
        type: 'showing-now',
      },
      {
        productId: '36',
        variant: 'default',
        imgSrc: prod5,
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
        imgSrc: prod4,
        description: 'Lorem ipsum dolor sit amet consectetur.',
        oldPrice: '7085',
        time: '7:14',
        price: '13',
        type: 'auction',
      },
      {
        productId: '38',
        variant: 'auction',
        imgSrc: prod1,
        description: 'Lorem ipsum dolor sit amet consectetur.',
        price: 785,
        type: 'default'
      },
      {
        productId: '39',
        variant: 'default',
        imgSrc: prod2,
        description: 'Lorem ipsum dolor sit amet consectetur.',
        price: 45,
        type: 'default'
      },
      {
        productId: '40',
        variant: 'giveaway',
        imgSrc: prod3,
        description: 'Lorem ipsum dolor sit amet consectetur.',
        price: '145',
        type: 'default',
      },
    ]
  },
]