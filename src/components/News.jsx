import React, { useState } from 'react';
import news1 from '../assets/News/pic-blog-1.jpg';
import news2 from '../assets/News/pic-blog-2.jpg';
import news3 from '../assets/News/pic-blog-3.jpg';
import feedback1 from '../assets/Feedback/feed1.jpg'
import feedback2 from '../assets/Feedback/feed2.jpg'
import feedback3 from '../assets/Feedback/feed3.jpg'

const News = () => {

  const cars = [
    // {
    //   id: 1,
    //   image: feedback1,
    //   name: 'Jeep Renegade',
    //   paragraph: 'I have been using Rentaly for my Car Rental needs for over 5 years now. I have never had any problems with their service. Their customer support is always responsive and helpful. I would recommend Rentaly to anyone looking for a reliable Car Rental provider.',
    //   subParagraph: 'Excellent Service! Car Rent Service!;'

    // },
    {
        id: 2,
        image: feedback1,
        name: 'BMW M2',
        attributes: ['5 seats', '2 doors', '4 wheels', 'Sedan'],
        price: '$244'
      },
    {
      id: 2,
      image: feedback2,
      name: 'BMW M2',
      attributes: ['5 seats', '2 doors', '4 wheels', 'Sedan'],
      price: '$244'
    },
    {
      id: 1,
      image: feedback3,
      name: 'Jeep Renegade',
      attributes: ['5 seats', '2 doors', '4 wheels', 'SUV'],
      price: '$265'
    },
    
    // Add more car objects here
  ];

  const newsData = [
    {
      id: 1,
      image: news1,
      title: 'Noteworthy technology acquisitions 2021',
      description: 'Traveling is an enriching experience that allows us to explore new destinations, immerse ourselves in different cultures, and create lifelong memories.',
    },
    {
      id: 2,
      image: news2,
      title: 'Technology advancements in 2021',
      description: 'As technology continues to advance at a rapid pace, the car rental industry is poised for a transformative shift. The future of car rental promises..',
    },
    {
      id: 3,
      image: news3,
      title: 'The future of AI next Gen For cars',
      description: 'For adventure seekers and budget-conscious travelers, backpacking offers a thrilling and immersive way to explore the world. Whether you are embarking..',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cars.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cars.length) % cars.length);
  };

  return (
    <>
      <div className="w-full bg-white py-20 px-7" >
        <div className="text-center mb-12 flex flex-col justify-center items-center">
          <div className="text-green-600 font-semibold text-lg">Why Choose Us</div>
          <h2 className="text-4xl font-bold mt-2">Our Features</h2>
          <p className="mt-6 w-[90vw] md:w-[40vw] font-semibold text-gray-600">
            Discover a world of convenience, safety, and customization, paving the way for unforgettable adventures and seamless mobility solutions.
          </p>
        </div>

        <div className='flex justify-center items-center flex-wrap gap-10'>
          {newsData.map((item) => (
            <div key={item.id} className="w-full max-w-sm bg-white rounded-lg dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img className="rounded-t-lg w-full" src={item.image} alt={item.title} />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Read more
                  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

      {/* Carousel Section */}
      {/* Carousel Section */}
      <div className="relative mt-40">
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-20"
          >
            &lt;
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-20"
          >
            &gt;
          </button>
          <div className="flex overflow-x-hidden">
            <div
              className="flex flex-nowrap transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {cars.map((car) => (
                <div key={car.id} className=" flex-shrink-0 h-screen px-10 overflow-hidden">
                  <div className="bg-white border rounded-xl flex items-center">
                    <div className="flex flex-col w-[28vw]">
                      <img src={car.image} alt={car.name} className="w-full h-screen object-cover border rounded-md mb-10" />
                      <h4 className="text-lg font-semibold mb-2">{car.name}</h4>
                      <div className="mb-2 flex space-x-2">
                        {car.attributes.map((attr, index) => (
                          <div key={index} className="text-sm text-gray-600">{attr}</div>
                        ))}
                      </div>
                      <hr className='mt-3' />
                      <div className="font-bold flex flex-col overflow-hidden mt-2">
                        Daily rate from
                        <span className="text-green-600 mt-2 text-2xl">{car.price}</span>
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
    </>
  );
}

export default News;
