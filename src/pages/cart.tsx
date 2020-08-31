import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/reducer';

const Cart = () => {

    const productsInCart = useSelector((state: RootState) => state.cart.products);

    return (
        <div>
            {
                productsInCart.map( p => <div>{p.title}</div>)
            }
        </div>
    );
};

export default Cart;