import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from './product';
import { useDispatch } from 'react-redux';
import {addToCart } from './slice';
import ControlledCarousel from './Carousel';


function Home() {

    const [allProducts, setAllProducts] = useState([]);
    const Dispatch = useDispatch();

    const handleaddBtn=(item)=>{
        Dispatch(addToCart(item))
    };

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        try {
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            setAllProducts(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    

    return (
       <div>
        <ControlledCarousel />
        <div className='grid md:grid-cols-4 '>
            {allProducts.map((item) => (
                <div key={item.id} className='product-card shadow-xl'>
                    <Link to={`/product/${item.id}`}>
                        <Product {...item}/>
                       
                    </Link>
                    {<button className='add-btn' onClick={()=>handleaddBtn(item)}>Add to cart</button>}
                </div>
            ))}
        </div>
        </div>
    );
}

export default Home;
