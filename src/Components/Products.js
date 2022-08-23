import React from 'react';
import { useState } from 'react';
import './style.css';

function Products() {
    let [products, setProducts] = useState([
        {   
            id: 1,
            name: 'HP Laptop',
            price: 10000
        },
        {   
            id: 2,
            name: 'ASUS Laptop',
            price: 2200
        },
        {
            id: 3,
            name: 'Dell Laptop',
            price: 50000
        }
    ])
  return (
    <div className='products-container'>
        <h1>Products</h1>
        {
            products.map(product => {
                return(
                    <ul className='products'>
                        <li key = { product.id }>{ product.name }</li>
                        <li>{ product.price }</li>
                    </ul>
                )
            })
        }
    </div>
  )
}

export default Products