import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'
const Product = (props) => {
    const {name, img, seller, price, ratings} =props.product;
    const {addToCart, Product} =props;
    return (
        <div className='product'>
            <img src={img} alt=""></img>
            <div className="product-info">
            <p className='product-name'>{name}</p>
            <p>Price: ${price}</p>
            <p><small>Seller: {seller}</small></p>
            <p><small>Ratings: {ratings}</small></p>
            </div>

            <button onClick={()=>addToCart(Product)} className='btn-cart'>add to cart <FontAwesomeIcon icon={faShoppingCart} > </FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;<h2>This is product</h2>