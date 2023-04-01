import { useContext } from 'react';
import './Product.css'
import { AppContext } from "../App";
import { REDUCER_ACTION_TYPE } from "../reducer";

type Props={
    id:number, title:string, price:number, rating:number, image:string 
}

function Product({ id, title, price, rating, image }:Props) {
    const appContext=useContext(AppContext) 
    return (
        <div className='product col-s-6 col-l-4 col-xl-3'>
            <div className='product__info'>
                <p>{title}</p>
                <p className='product__price'>
                    <small>£</small>
                    <strong>{price}</strong>
                </p>
                <div className='product__rating'>
                    {
                        Array(rating).fill(0).map((_) => <span>⭐</span>)
                    }
                </div>
            </div>
            <div>
                <img src={image} alt='pdt' />
            </div>
            <button onClick={() =>appContext.dispatch({ type: REDUCER_ACTION_TYPE.ADD_PRODUCT, id: id })}>ADD TO CART</button>
        </div>
    )
}

export default Product
