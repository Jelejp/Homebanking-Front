import { Carousel } from "flowbite-react";
import React from 'react';

const CarouselAccount = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
    <Carousel slide={true}>
      <img src="src\assets\banner-banking.png" alt="..." />
      <img src="src\assets\banner-desc.png" alt="..." />
      <img src="src\assets\banner-teccno.png" alt="..." />
    </Carousel>
  </div>
  );
};

export default CarouselAccount;