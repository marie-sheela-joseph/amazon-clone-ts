import { useContext } from 'react'
import './CheckoutProduct.css'
import { AppContext } from "../App";
import { REDUCER_ACTION_TYPE } from '../reducer';

type Props={
    id:number, title:string, price:number, rating:number, image:string 
}

function CheckoutProduct({ id, title, price, rating, image }:Props) {
    const appContext=useContext(AppContext) 
    return (
        <div className='checkoutProduct'>
            <div className='checkoutProduct__image'>
                <img src={image} alt='pdt' />
            </div>
            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className='checkoutProduct__price'>
                    <small>£</small>
                    <strong>{price}</strong>
                </p>
                <div className='checkoutProduct__rating'>
                    {Array(rating).fill(0).map((_) => <span>⭐</span>)}
                </div>
                <button onClick={() => appContext.dispatch({ type: REDUCER_ACTION_TYPE.REMOVE_FROM_CART, id: id })}>REMOVE FROM CART</button>
            </div>
        </div >
    )
}

export default CheckoutProduct