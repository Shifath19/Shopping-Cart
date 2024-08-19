import React, { useEffect, useState } from 'react'
import { CartState } from '../context/Context'
import { Button, Col, Form,FormControl,Image, ListGroup, Row } from "react-bootstrap";
import Rating from './Rating';
import { AiFillDelete } from 'react-icons/ai';
const Cart = () => {

  const {state:{cart},dispatch} = CartState();

const[total,setTotal] = useState();

useEffect( () => {
  setTotal(cart.reduce((sum,curr) =>sum+ Number(curr.price)*curr.qty,0))
},[cart])

  return (
    <div className='home'>
      <div className='productContainer'>
        <ListGroup>
        {
          cart.map((prod) =>(
            <ListGroup.Item key={prod.id}>
              <Row>
                <Col md={2}>
                <Image src={prod.image} alt={prod.name} fluid rounded/>
                </Col>
                <Col md={2}>
                <span>{prod.name}</span>
                </Col>
                <Col md={2}>$ {prod.price}</Col>
                <Col md={2}>
                <Rating rating={prod.ratings}></Rating>
                </Col>

                <Col md={2}>
                <Form.Control as="select" value={prod.qty}
                onChange={(e) => 
                  dispatch( {
                    type:"CHANGE_CART_QTY",payload:{
                      id:prod.id,
                      qty:Number(e.target.value),
                    },                    
                  })
                }>
                  
                  {
                    [...Array(prod.inStock).keys()].map((x) => (
                      <option key={x+1}>{x+1}</option>
                    ))
                  }

                </Form.Control>
                </Col>

                <Col>
                <Button
                type='button'
                variant='light'
                onClick={() => 
                  dispatch({
                    type:"REMOVE_FROM_CART",
                    payload:prod,
                  })
                }>
                  <AiFillDelete fontSize="20px"/>
                </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ) )
        }
        </ListGroup>
      </div>

      <div className='filters summary'>
        <span className='title'>Suntotal ({cart.length})items</span>

        <span style={{fontWeight:700,fontSize:20}}>Total :$ {total}</span>
      </div>
    </div>
  )
}

export default Cart
