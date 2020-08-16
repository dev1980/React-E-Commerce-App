import React, { createContext } from 'react';

import camera from '../assets/camera.jpg';
import camera from '../assets/bike.jpg';
import camera from '../assets/headphone.jpg';
import camera from '../assets/iphone.jpg';
import camera from '../assets/microphone.jpg';
import camera from '../assets/perfume.jpg';
import camera from '../assets/ring.jpg';



export const ProductsContext = createContext();

const ProductsContextProvider = () => {
const [] = useState(
  [{id: 1, name: 'camera', price: 300, image: 'camera', status: 'hot'},
  {id: 2, name: 'bike', price: 200, image: 'bike', status: 'hot'},
  {id: 3, name: 'headphone', price: 100, image: 'headphone', status: 'hot'},
  {id: 4, name: 'iphone', price: 500, image: 'iphone', status: 'hot'},
  {id: 5, name: 'microphone', price: 100, image: 'microphone', status: 'hot'},
  {id: 6, name: 'perfume', price: 300, image: 'perfume', status: 'hot'},
  {id: 7, name: 'ring', price: 300, image: 'ring', status: 'hot'}
 
]
)

  return {

  }
}

export default ProductsContextProvider;