import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../asscets/img/img1.jpg';
import img2 from '../asscets/img/img2.jpg';


function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
  
<div className="carousel-wrapper">
<Carousel activeIndex={index} onSelect={handleSelect} >
  <Carousel.Item>
    <img src={img1} alt='img' className='' />
    <div className="custom-caption">
      <h3>Women's Collection</h3>
      <p>New Season's</p>
      <button className="shop-now-btn">Shop Now</button>
    </div>
  </Carousel.Item>
  <Carousel.Item>
    <img src={img2} alt='img' className='' />
    <div className="custom-caption">
      <h3>Men's Collection</h3>
      <p> New Arrivals</p>
      <button className="shop-now-btn">Shop Now</button>
    </div>
  </Carousel.Item>
</Carousel>
</div>

  
  );
}

export default ControlledCarousel;
