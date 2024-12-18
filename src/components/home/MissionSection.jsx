import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import WhyUs from '../../img/why-us2.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const IconBox = ({ iconClass, title, linkTo, description }) => (
  <div className="icon-box">
    <div className="icon"><i className={`bx ${iconClass}`}></i></div>
    <h4 className="title">
      <a href={linkTo}>{title}</a>
    </h4>
    <p className="description">{description}</p>
  </div>
);

function MissionSection() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <main className="main">
      <div className="page-title dark-background">
        <div className="container position-relative">
          <h2>Focus</h2>
          <p>Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.</p>
          <nav className="breadcrumbs">
            <ol>
              <li><Link to="/">Home</Link></li>
              <li className="current">Pillars</li>
            </ol>
          </nav>
        </div>
      </div>
      <section className="why-us section-bg" data-aos="fade-up" data-aos-delay="200">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 video-box">
              <img loading="lazy" src={WhyUs} className="img-fluid" alt="" />
              <Link to={'https://www.youtube.com/watch?v=jDDaplaOz7Q'} className="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true"></Link>
            </div>
            <div className="col-lg-6 d-flex flex-column justify-content-center p-5">
              <IconBox
                iconClass="bi bi-lightbulb"
                title="Our Mission"
                linkTo="/"
                description="Africa Sustainable Trade (AST) envisions a future where African nations lead in sustainable trade and innovation, driving prosperity 
                with a focus on environmental stewardship, social responsibility, and 
                economic sustainability"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default MissionSection;