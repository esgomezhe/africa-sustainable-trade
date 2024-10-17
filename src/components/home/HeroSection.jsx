import React, { useRef, useEffect } from "react";
//import { Link } from 'react-router-dom';
import '../../stylesheets/home/style.css';
import videoInnovation from '../../videos/circular_tec.mp4';
import videoCleanEnergy from '../../videos/hydrogen_tec.mp4';
import videoRenewableTech from '../../videos/solar_panels.mp4';

const CarouselItem = ({ title, description, linkText, videoSrc, isFirst }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (isFirst && videoRef.current) {
      videoRef.current.play();
    }
  }, [isFirst]);

  return (
    <div className={`carousel-item ${isFirst ? 'active' : ''}`}>
      <div className="video-wrapper">
        <video
          ref={videoRef}
          className="video-background"
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="carousel-container">
        <h2 className="animate__animated animate__fadeInDown">{title}</h2>
        <p className="animate__animated animate__fadeInUp">{description}</p>
        {/* <Link to='' className="btn-get-started animate__animated animate__fadeInUp">{linkText}</Link> */}
      </div>
    </div>
  );
};

function HeroSection() {
  useEffect(() => {
    const carousel = document.getElementById("heroCarousel");

    const handleSlide = () => {
      const videos = document.querySelectorAll('.carousel-item video');

      videos.forEach(video => {
        if (video.closest('.carousel-item').classList.contains('active')) {
          video.play(); // Reproducir el vídeo si el ítem es activo
        } else {
          video.pause(); // Pausar el vídeo si el ítem no es activo
        }
      });
    };

    // Escuchar el evento de Bootstrap cuando el carrusel cambia de slide
    carousel.addEventListener('slid.bs.carousel', handleSlide);

    // Limpiar el evento cuando el componente se desmonte
    return () => {
      carousel.removeEventListener('slid.bs.carousel', handleSlide);
    };
  }, []);

  return (
    <section id="hero">
      <div id="heroCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">
        <div className="carousel-inner">
          <CarouselItem
            title="Global Stakeholders Uniting for Africa’s Sustainable Future"
            description=""
            linkText=""
            videoSrc={videoInnovation}
            isFirst={true}
          />

          <CarouselItem
            title="Global Stakeholders Uniting for Africa’s Sustainable Future"
            description=""
            linkText=""
            videoSrc={videoCleanEnergy}
            isFirst={false}
          />

          <CarouselItem
            title="Global Stakeholders Uniting for Africa’s Sustainable Future"
            description=""
            linkText=""
            videoSrc={videoRenewableTech}
            isFirst={false}
          />
        </div>

        <a className="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon bx bx-chevron-left" aria-hidden="true"></span>
        </a>
        <a className="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon bx bx-chevron-right" aria-hidden="true"></span>
        </a>
      </div>
    </section>
  );
}

export default HeroSection;