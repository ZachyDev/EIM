import React from 'react';
import { useState } from 'react';
import './style.css';

function Products() {
    let [products, setProducts] = useState([
        {
            name: 'HP Laptop',
            price: 10000
        },
        {
            name: 'ASUS Laptop',
            price: 2200
        },
        {
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
                        <li>{ product.name }</li>
                        <li>{ product.price }</li>
                    </ul>
                )
            })
        }
    </div>
  )
}

export default Products