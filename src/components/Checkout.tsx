import React, { useContext } from 'react'
import { AppContext } from "../App";
import CheckoutProduct from './CheckoutProduct'
import './Checkout.css'
function Checkout() {
    const appContext=useContext(AppContext)     
    // let total = state.cart.reduce((acc, id) => {
    //     return acc + state.products.find((p) => p.id === id).price
    // }, 0)
    return (
        <section className='checkout'>
            <div className='checkout__ad_subTotal'>
                <div className='checkout__ad'>
                    <img src='./assets/creditCard.jpg' alt='credit card' />
                </div>
                <div className='checkout_subTotal'>
                    {/* <p>Subtotal ({appContext.state.cart.length}) items:<strong>{total}</strong></p> */}
                    <div>
                        <input type='checkbox' id='gift' />
                        <label htmlFor='gift'>This order contains a gift</label>
                    </div>
                    <button>Proceed to checkout</button>
                </div>
            </div>

            {appContext.state.cart.length > 0 ?
                <div>
                    <h2>Your shopping cart</h2>
                </div> :
                <div>
                    <h2>Your shopping cart is empty</h2>
                    <p>You have no items in your cart. To buy one or more items, click 'Add to cart' next to the item.</p>
                </div>
            }
            {appContext.state.cart.map((id) => {
                let product = appContext.state.products.find((p) => p.id === id)
                return <CheckoutProduct id={product?.id!} title={product?.title!} price={product?.price!} rating={product?.rating!} image={product?.image!} />
            })}
        </section>
    )
}

export default Checkout