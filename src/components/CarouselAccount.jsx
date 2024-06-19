import { Carousel } from "flowbite-react";
import React from 'react';

const CarouselAccount = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
    <Carousel slide={true}>
      <img src="/banner1.png" alt="Transaction bank" />
      <img src="/banner2.png" alt="Loan bank" />
      <img src="/banner3.png" alt="Card bank" /> 
    </Carousel>
  </div>
  );
};

export default CarouselAccount;