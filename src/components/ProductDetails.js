import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from './slice'; // Assuming you have your slice defined like this

const ProductDetails = () => {
  const { productId } = useParams();
  const [productDetails, setProductDetails] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
      const data = await response.json();
      setProductDetails(data);
    }
    fetchData();
  }, [productId]);

  // Loading state
  if (!productDetails) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = () => {
    dispatch(addToCart(productDetails)); // Dispatch action to add product to cart
    alert('Item added to cart');
  };

  return (
    <div className='grid md:grid-cols-2 w-[80%] lg:max-w-[1024px] mx-auto pt-[5rem] pb-[2rem] gap-5'>
      <div className='product-deatails-img'>
        <img src={productDetails.image} alt={productDetails.title} />
      </div>
      <div className='product-details-info'>
        <h2 className="product-title-info" >{productDetails.title}</h2>
        <p className="product-description">{productDetails.description}</p>
        <div className='flex justify-between'>
        <p className="product-category">{productDetails.category}</p>
        <div className="product-rating">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        </div>
       
        </div>
        <div className='flex justify-between mt-3'>
        <p  className="product-price">Price: ${productDetails.price}</p>
          <button className='add-btn' onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
