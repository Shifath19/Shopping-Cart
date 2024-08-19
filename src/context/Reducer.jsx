export const CartReducer = (state,action) =>{
  switch(action.type)
  {
    case "ADD_TO_CART":
      return{...state,
        cart:[...state.cart,
        {...action.payload, qty:1}]
      };
    
    case "REMOVE_FROM_CART":
      return {
        ...state, 
        cart :state.cart.filter((c) => c.id !== action.payload.id)
      };
    
      case "CHANGE_CART_QTY":
        return {
          ...state,
          cart: state.cart.map(c => 
            c.id === action.payload.id 
              ? 
              { ...c, qty: action.payload.qty } // Update the qty for the matched item
              : c // Return the item as is for unmatched items
          )
        };
      
    default:
      return state;
  }
}


export const productReducer = (productState,action) =>
{
  switch(action.type)
  {
    case "SORT_BY_PRICE":
      return {...productState,sort: action.payload};

    case "FILTER_BY_STOCK":
      return {...productState,byStock: !productState.byStock };
    
    case "FILTER_BY_DELIVERY":
      return {...productState,
        byDelivery :!productState.byDelivery};
    
    case "FILTER_BY_RATING":
      return {...productState,byRating: action.payload};

    case "FILTER_BY_SEARCH":
      return {...productState, bySearch:action.payload};
    
    case "CLEAR_FILTERS":
      return {
        byStock:false,
        byDelivery:false,
        byRating:0,
        bySearch:""
      }

    default:
      return productState;
  }
};