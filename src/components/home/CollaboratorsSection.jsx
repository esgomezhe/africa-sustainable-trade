import React, { useEffect } from 'react';
import Slider from 'react-slick';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../stylesheets/home/style.css';

// Import client images
import client1 from '../../img/collaborators/client-1.png';
import client2 from '../../img/collaborators/client-2.png';
import client3 from '../../img/collaborators/client-3.png';
import client4 from '../../img/collaborators/client-4.png';
import client5 from '../../img/collaborators/client-5.png';
import client6 from '../../img/collaborators/client-6.png';
import client7 from '../../img/collaborators/client-7.png';
import client8 from '../../img/collaborators/client-8.png';

const clients = [
  { img: client1, alt: 'Client 1' },
  { img: client2, alt: 'Client 2' },
  { img: client3, alt: 'Client 3' },
  { img: client4, alt: 'Client 4' },
  { img: client5, alt: 'Client 5' },
  { img: client6, alt: 'Client 6' },
  { img: client7, alt: 'Client 7' },
  { img: client8, alt: 'Client 8' },
];

function CollaboratorsSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <section id="clients" className="clients section" data-aos="fade-up">
      <div className="container">
        <Slider {...settings}>
          {clients.map((client, index) => (
            <div key={index} className="client-item">
              <img src={client.img} className="img-fluid" alt={client.alt} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default CollaboratorsSection;