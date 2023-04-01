import Product from './Product'
import './Products.css'
import { useContext } from "react";
import { AppContext } from "../App";

const Products=()=>{
    const appContext=useContext(AppContext)    
    return (
        <section className='products'>
            <div className='container'>
                <div className='products__d-flex'>
                    {appContext.state.products.map((p) => <Product id={p.id} title={p.title} price={p.price} rating={p.rating} image={p.image} />)}
                </div>
            </div>
        </section>
    )
}

export default Products