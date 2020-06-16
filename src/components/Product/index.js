import React, {useState, useEffect} from 'react';
import './Products.css';
const Product = ({product}) => {

    console.log('protudo');

    return(
        <div className="products">
        {
            (<div className="product">
                <figure>
                    <img src={product.image} alt=""/>
                </figure>
                <h3 className="product__name">{product.name}</h3>
                <h4 className="product__price">{product.regular_price}</h4>
                </div>)
        }
        </div>);
}

export default Product;