
import { Button } from 'react-bootstrap'
import Form from "react-bootstrap/Form";
import Rating from './Rating';
import { CartState } from '../context/Context';

const Filters = () => {

    


  const {Productstate:{byStock,byDelivery,sort,byRating},Productdispatch} =  CartState();

  


  return (
    <div className='filters'>
      <span className='title'>Filter Products</span>

      <span>
        <Form.Check
        inline
        label="Ascending"
        name="group1"
        type="radio"
        id={`inline-1`}
        onChange={() => 
          Productdispatch({
            type:"SORT_BY_PRICE",
            payload:"lowToHigh"
          })
        }
        checked = {sort === "lowToHigh"? true:false}
        />
      </span>

      <span>
        <Form.Check
        inline
        label="Descending"
        name="group1"
        type="radio"
        id={`inline-2`}
        onChange={() => 
          Productdispatch({
            type:"SORT_BY_PRICE",
            payload:"highToLow"
          })
        }
        checked = {sort === "highToLow"? true:false}
        />
      </span>

      <span>
        <Form.Check
        inline
        label="Inlucde out of Stock"
        name="group2"
        type="checkbox"
        id={`inline-3`}
        onChange={() => 
          Productdispatch({
            type:"FILTER_BY_STOCK"
          })
        }
        checked = {byStock}
        />
      </span>

      <span>
        <Form.Check
        inline
        label="Fast Delivery only"
        name="group3"
        type="checkbox"
        id={`inline-4`}
        onChange={() => 
          Productdispatch({
            type:"FILTER_BY_DELIVERY"
          })
        }
        checked = {byDelivery}

        />
      </span>

      <span>
        <label style={{paddingRight:10}}>Rating: </label>

      <Rating 
       rating={byRating}
       onClick={(i) => 
        Productdispatch(
          {
            type:"FILTER_BY_RATING",
            payload:i+1,
          }
        )
       } 
       style={{cursor:"pointer"}}
       />
      </span>

      <Button variant="light"
      onClick={ () => {
        Productdispatch({
          type:"CLEAR_FILTERS"
        })
      }}
  
      >Clear Filters</Button>



      
    </div>
  )
}

export default Filters
