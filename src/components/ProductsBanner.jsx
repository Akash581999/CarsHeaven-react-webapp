import { useState } from 'react';
import bmw from "../assets/Cars/bmw-m5.jpg"
import ferrari from "../assets/Cars/ferrari-enzo.jpg"
import ford from "../assets/Cars/ford-raptor.jpg"
import jeep from "../assets/Cars/jeep-renegade.jpg"
import mini from "../assets/Cars/mini-cooper.jpg"
import vw from "../assets/Cars/vw-polo.jpg"
  ;
const ProductsBanner = () => {
  const cars = [
    {
      id: 1,
      image: bmw,
      name: 'Jeep Renegade',
      attributes: ['5 seats', '2 doors', '4 wheels', 'SUV'],
      price: '$265'
    },
    {
      id: 2,
      image: ferrari,
      name: 'BMW M2',
      attributes: ['5 seats', '2 doors', '4 wheels', 'Sedan'],
      price: '$244'
    },
    {
      id: 1,
      image: ford,
      name: 'Jeep Renegade',
      attributes: ['5 seats', '2 doors', '4 wheels', 'SUV'],
      price: '$265'
    },
    {
      id: 2,
      image: jeep,
      name: 'BMW M2',
      attributes: ['5 seats', '2 doors', '4 wheels', 'Sedan'],
      price: '$244'
    },
    {
      id: 1,
      image: mini,
      name: 'Jeep Renegade',
      attributes: ['5 seats', '2 doors', '4 wheels', 'SUV'],
      price: '$265'
    },
    {
      id: 2,
      image: vw,
      name: 'BMW M2',
      attributes: ['5 seats', '2 doors', '4 wheels', 'Sedan'],
      price: '$244'
    },
    // Add more car objects here
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cars.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cars.length) % cars.length);
  };

  return (
    <div>
      {/* Banner Section */}
      <div className="w-full bg-gray-300 py-20 px-4 md:px-20">
        <div className="text-center mb-12 flex flex-col justify-center items-center">
          <div className="text-green-600 font-semibold text-lg">Why Choose Us</div>
          <h2 className="text-4xl font-bold mt-2">Our Features</h2>
          <p className="mt-6 w-[90vw] md:w-[40vw] font-semibold text-gray-600">
            Discover a world of convenience, safety, and customization, paving the way for unforgettable adventures and seamless mobility solutions.
          </p>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="relative p-4">
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
        >
          &lt;
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
        >
          &gt;
        </button>
        <div className="flex overflow-x-hidden">
          <div
            className="flex flex-nowrap transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {cars.map((car) => (
              <div key={car.id} className=" flex-shrink-0 p-8">
                <div className="bg-white p-4 border rounded-lg shadow-md flex items-center">
                  <div className="flex flex-col h-[38vh]">
                    <img src={car.image} alt={car.name} className="w-full h-40 object-cover border rounded-md mb-10" />
                    <h4 className="text-lg font-semibold mb-2">{car.name}</h4>
                    <div className="mb-2 flex space-x-2">
                      {car.attributes.map((attr, index) => (
                        <div key={index} className="text-sm text-gray-600">{attr}</div>
                      ))}
                    </div>
                    <hr className='mt-2' />
                    <div className="font-bold flex flex-col mt-6">
                      Daily rate from
                      <span className="text-green-600">{car.price}</span>
                      <button className='relative w-[5vw] -top-10 -right-48 p-2 border rounded-md bg-green-500'>Rent It</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsBanner;
