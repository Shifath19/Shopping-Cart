import React from 'react'
import { CartState } from '../context/Context'
import Product from './Product';
import "./styles.css"
import Filters from './Filters';


const Home = () => {

const {state : {products},
 Productstate :{sort,byStock,byDelivery,byRating,bySearch},} = CartState();

const transformProducts = () => {
  let sortedProducts = products;

  if(sort)
  {
    sortedProducts = sortedProducts.sort((a,b) => 
    sort ==="lowToHigh" ?
    parseFloat(a.price) - parseFloat(b.price)
    :
    parseFloat(b.price) - parseFloat(a.price)
  );
  }

  if (!byStock) {
    sortedProducts = sortedProducts.filter((prod) => prod.inStock);
  }
  

  if(byDelivery){
    sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery)
  }

  if(byRating)
  {
    sortedProducts = sortedProducts.filter((prod) => prod.ratings >=byRating)
  }

  if(bySearch)
  {
    sortedProducts = sortedProducts.filter((prod) => 
      prod.name.toLowerCase().includes(bySearch));
  }

  return sortedProducts;
};

  return (
    <div className='home'>
          <Filters/>

      <div className="productContainer">
        {
          transformProducts().map( prod => {
            return <Product prod ={prod} key={prod.id}/>;
          })
        }
      </div>

      
    </div>
  )
}

export default Home
