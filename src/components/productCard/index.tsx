import React from 'react';
import { Product as IProduct } from '../../redux/slices/feed';
import style from './style.module.scss';
import { AppDispatch } from '../../redux/store';
import Link from 'next/link'

interface IProps extends IProduct {
    onProductClickCb: () => void;
}

const Product: React.FC<IProps> = ({
    id,
    albumId,
    thumbnailUrl,
    title,
    onProductClickCb
}) => {

    return (
        <div
            className={style.container}
            onClick={onProductClickCb}
        >
            <div className={style.title}>
                {title}
            </div>
            <Link href={`/product/[pid]`} as={`/product/${id}`} >
                <a>Product: {id}</a>
            </Link>
            <img src={thumbnailUrl} className={style.thumbnail} />
        </div>
    );
};

export default Product;