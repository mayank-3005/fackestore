import React from 'react';


const Product = ({ id, image, title, price, description, category, rating }) => {
 
  
  return (
    <div className="product-container mt-[75px]">
    <div className="product-card">
   
      <img className="product-img" src={image} alt="product" />
     <div className='flex justify-between'>
     <p className="product-category">{category}</p>
     <div className="product-rating">
     <i class="fa-solid fa-star"></i>
     <i class="fa-solid fa-star"></i>
     <i class="fa-solid fa-star"></i>
     <i class="fa-solid fa-star"></i>
     </div>
    
     </div>
      <h2 className="product-title">{title}</h2>
      <h2 className="product-price">${price}</h2>
     <p className="product-description">{description}</p>
     
      
    </div>
    
    </div>
  );
};

export default Product;
