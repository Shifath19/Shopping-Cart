import React from 'react'
import {Container,FormControl,Navbar,Dropdown, Nav,Badge, Button} from "react-bootstrap";
import {FaShoppingCart} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "./styles.css";
import { CartState } from '../context/Context';
import { AiFillDelete } from 'react-icons/ai';



const Header = () => {

  const{
    state:{ cart },
    dispatch,
    Productdispatch
  } = CartState();

  

  return <Navbar bg="dark" variant="dark" style={{ height :80 }}>
    <Container>

      <Navbar.Brand>
      <Link to="/">Shopping Cart</Link>
      </Navbar.Brand>

      <Navbar.Text className="search">
        <FormControl
        style={{ width:500}}
        placeholder='Search a product'
        className='m-auto'
        onChange={(e) => {
          Productdispatch({
            type:"FILTER_BY_SEARCH",
            payload:e.target.value,
          })
        }}
        />
      </Navbar.Text>

      <Nav>
      <Dropdown >
      <Dropdown.Toggle variant="success" >
        <FaShoppingCart style={{ fontSize: "25px", color:"white" }}/>
        <Badge>{cart.length}</Badge>

      </Dropdown.Toggle>

      <Dropdown.Menu className="custom-dropdown-menu">

      {cart.length > 0?
      (
        <>
        {
          cart.map((prod) => (
            <span className='cartitem' key={prod.id}>
            
            <img src={prod.image} alt={prod.name}
            className="cartItemImg" />

            <div className='cartItemDetail'>
            <span>{prod.name}</span>
            <span> $ {prod.price.split(".")[0]}</span>

            </div>

            <AiFillDelete
            fontSize="20px"
            style={{cursor:"pointer"}}
            onClick={() => 
              dispatch({
                type:"REMOVE_FROM_CART",payload:prod,
              })
            }
            />

            </span>
          ))
        }
        <Link to="/cart">
        <Button style={{width:"95%",margin:"0 10px"}}>
          Go To Cart</Button></Link>
        </>
      ):(
      <span style={{padding:0}}>Cart is Empty! </span>
       )}

      
      </Dropdown.Menu>
    </Dropdown>
      </Nav>


    </Container>
  </Navbar>
}

export default Header
