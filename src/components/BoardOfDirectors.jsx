// src/BoardOfDirectors.jsx
import React from 'react';
import DirMain from '../assets/BoardOfDirector/DirMain.jpg';
import dir1 from '../assets/BoardOfDirector/dir1.jpg'
import dir2 from '../assets/BoardOfDirector/dir2.jpg'
import dir3 from '../assets/BoardOfDirector/dir3.jpg'
import dir4 from '../assets/BoardOfDirector/dir4.jpg'

const BoardOfDirectors = () => {
  const directors = [
    {
      name: 'Fynley Wilkinson',
      title: 'Chief Creative Officer',
      image: dir1,
      social: [
        { platform: 'facebook', iconClass: 'fa-facebook' },
        { platform: 'twitter', iconClass: 'fa-twitter' },
        { platform: 'linkedin', iconClass: 'fa-linkedin' },
        { platform: 'pinterest', iconClass: 'fa-pinterest' },
      ],
    },
    {
      name: 'Peter Welsh',
      title: 'Chief Technology Officer',
      image: dir2 ,
      social: [
        { platform: 'facebook', iconClass: 'fa-facebook' },
        { platform: 'twitter', iconClass: 'fa-twitter' },
        { platform: 'linkedin', iconClass: 'fa-linkedin' },
        { platform: 'pinterest', iconClass: 'fa-pinterest' },
      ],
    },
    {
      name: 'John Shepard',
      title: 'Chief Executive Officer',
      image: dir3,
      social: [
        { platform: 'facebook', iconClass: 'fa-facebook' },
        { platform: 'twitter', iconClass: 'fa-twitter' },
        { platform: 'linkedin', iconClass: 'fa-linkedin' },
        { platform: 'pinterest', iconClass: 'fa-pinterest' },
      ],
    },
    {
      name: 'Robyn Peel',
      title: 'Director of Finance',
      image: dir4,
      social: [
        { platform: 'facebook', iconClass: 'fa-facebook' },
        { platform: 'twitter', iconClass: 'fa-twitter' },
        { platform: 'linkedin', iconClass: 'fa-linkedin' },
        { platform: 'pinterest', iconClass: 'fa-pinterest' },
      ],
    },
  ];

  return (
    <section
      aria-label="section"
      className="relative text-light bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${DirMain})`, zIndex: 0 }}
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-[-1] clip-path-polygon-0">
        <img
          src={DirMain}
          alt=""
          className="object-cover w-full h-full pointer-events-none"
        />
      </div>
      <div className="container mx-auto text-center p-10">
        <div className="mb-10">
          <h2 className="text-4xl font-bold text-white">Board of Directors</h2>
          <div className="spacer-20"></div>
        </div>
        <div className="flex flex-wrap justify-center">
          {directors.map((director, index) => (
            <div
              key={index}
              className="lg:w-1/4 md:w-1/2 sm:w-full p-4 mb-8"
            >
              <div className="f-profile text-center text-white">
                <div className="fp-wrap f-invert relative">
                  <div className="fpw-overlay absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity">
                    <div className="fpwo-wrap flex justify-center items-center h-full">
                      <div className="fpwow-icons space-x-4">
                        {director.social.map((social, idx) => (
                          <a key={idx} href="#">
                            <i className={`fa < ${social.iconClass} /> fa-lg`}></i>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <img
                    src={director.image}
                    className="fp-image img-fluid w-full h-auto"
                    alt={director.name}
                  />
                </div>
                <h4 className="mt-4 text-xl font-semibold">{director.name}</h4>
                <p>{director.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BoardOfDirectors;
