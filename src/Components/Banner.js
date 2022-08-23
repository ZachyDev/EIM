import { useState, useEffect } from 'react';

function Banner({ discountPromo }) {
    
    let [data, setData] = useState('Macbook');
    // useEffect hook
    useEffect(() => {
        console.log('Rendered');
        
        return () => {
            console.log('unmounted');
        }
    })

    // changeProduct function
    const changeProduct = () => {
        setData('PS5 Gaming Console');
    }
  return (
    <div>
        <h3>{ discountPromo } of { data }</h3>
        <button onClick={ changeProduct }>Change Product</button>
    </div>
  )
}

export default Banner