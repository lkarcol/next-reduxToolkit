import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/reducer';
import Link from 'next/link'

interface IProps { };

const Cart: React.FC<IProps> = () => {

    const countProductsInCart = useSelector((state: RootState) => state.cart.products.length);

    return (
        <Link href="/cart">
            <a>
                {countProductsInCart}
            </a>
        </Link>
    );
};

export default Cart;