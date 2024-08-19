import React,{createContext,useContext,useReducer} from 'react'
import { faker } from '@faker-js/faker';
import { CartReducer, productReducer } from './Reducer';

const Cart = createContext();
faker.seed(99);

const Context = ({ children}) => {

  const products = [...Array(21)].map(()=>({
    id: faker.string.uuid(),
    name:faker.commerce.productName(),
    price:faker.commerce.price(),
    image:faker.image.urlLoremFlickr(),
    inStock: Math.floor(Math.random() * 11),
    fastDelivery:faker.datatype.boolean(),
    ratings:Math.floor((Math.random() * 5) + 1),
  }));


const[state,dispatch] = useReducer(CartReducer,{
  products:products,
  cart:[]
});

const[Productstate,Productdispatch] = useReducer(productReducer,
  {
  byStock:true,
  byDelivery:false,
  byRating:0,
  bySearch:"",
});

  return (
    <Cart.Provider value ={{state,dispatch,Productstate,Productdispatch}}>
      {children}
    </Cart.Provider>
  );


};

export default Context

export const CartState = ()=>{
  return useContext(Cart)
}
