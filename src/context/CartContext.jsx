import React from 'react'
import { createContext, useReducer } from 'react'

export const CartContext = createContext();

const initialState = {
    cart: [],
    wishlist:[],
};

const cartReducer =(state,action) =>{
    switch(action.type)
        {
           case "ADD_TO_CART":
            const existingBook = state.cart.find(
                (book) => book.id == action.payload.id
            );

            if(existingBook){
                return{
                    ...state,
                    cart:state.cart.map((book) =>
                    book.id == action.payload.id ? {...book,quantity: book.quantity+1 } :book),
                    }
                }
                return{
                    ...state,
                    cart:[...state.cart,{...action.payload,quantity:1}],

                };

                case "INCREMENT":
                    return{
                        ...state,
                        cart:state.cart.map((book) =>
                        book.id == action.payload ? {...book,quantity: book.quantity+1 } :book
                    ),
                    }
                
                case "DECREMENT":
                    return{
                        ...state,
                        cart:state.cart.map((book) =>
                        book.id == action.payload ?{...book,quantity:book.quantity-1}:book
                    )
                    .filter((book) => book.quantity > 0),
                    }

                case "REMOVE_FROM_CART":
                        return{
                            ...state,
                            cart:state.cart.filter(
                                (book) => book.id !== action.payload
                            ),
                        }

                case "ADD_TO_WISHLIST":
                    {
                        const alreadyExists = state.wishlist.some(
                        (book) => book.id = action.payload.id
                    );
                    
                    if(alreadyExists){
                        return state;
                    }

                    return{
                        ...state,
                        wishlist:[...state.wishlist, action.payload],
                    };

                    }
                
                case "REMOVE_FROM_WISHLIST":
                    return{
                        ...state,
                        wishlist:state.wishlist.filter(
                            (book) => book.id !== action.payload
                        ),
                    }
                        
                     
                    


                default:
                    return state;        

        }
            

    }


const CartProvider =({children}) =>{
    const[state,dispatch] = useReducer(cartReducer,initialState);
    return(
        <CartContext.Provider value={{state,dispatch}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;




