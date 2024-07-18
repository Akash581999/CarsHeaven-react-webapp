import React from 'react';


const Marquee = () => {
  const items = [
    'SUV', 'Hatchback', 'Crossover', 'Convertible', 'Sedan',
    'Sports Car', 'Coupe', 'Minivan', 'Station Wagon', 'Truck',
    'Minivans', 'Exotic Cars'
  ];

  return (
    <section aria-label="section" className="pt-10 pb-10 text-light bg-black">
      <div className="marquee-container text-white ">
        <div className="marquee">
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <span className="marquee-item">{item}</span>
              {index < items.length - 1 && (
                <span className="marquee-item">
                  <i className="d-item-dot"></i>
                </span>
              )}
            </React.Fragment>
          ))}
        </div>
        <div className="marquee">
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <span className="marquee-item">{item}</span>
              {index < items.length - 1 && (
                <span className="marquee-item">
                  <i className="d-item-dot"></i>
                </span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marquee;
