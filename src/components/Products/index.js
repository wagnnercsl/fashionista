import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Products.css';
import { getCatalog } from '../../service/api';
const Products = () => {

    const [products, setProducts] = useState([]);
    const unavailableImage = 'https://via.placeholder.com/300x379.png?text=Imagem não disponível';


    const formatProductName = (productName) => {
        return productName.toLowerCase().split(' ').join('-');
    }

    useEffect(() => {
        getCatalog().then(response => {
            setProducts(response)
        })
    },[])

    return(
        <div className="products-list">
        {
            products.map((product, index) => {
                return(
                    <Link key={index} to={`/product/${formatProductName(product.name)}`}>
                    <div key={index} className="product">
                    <figure>
                        <img src={product.image ? product.image : unavailableImage} alt=""/>
                    </figure>
                    <h3 className="product__name">{product.name}</h3>
                    <h4 className="product__price">{product.regular_price}</h4>
                    </div>
                    </Link>
                    )
            })
        }
        </div>);
}

export default Products;