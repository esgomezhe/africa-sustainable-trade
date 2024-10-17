import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../stylesheets/home/style.css';

import CleanEnergyImage from '../../img/creative/clean-energy.png';
import RenewableEnergyImage from '../../img/creative/renewable-energy.png';
import CircularEconomyImage from '../../img/creative/circular-economy.png';
import ArtisanEmpowermentImage from '../../img/creative/artisan-empowerment.png';
import CreativeIndustriesImage from '../../img/creative/creative-industries.png';
import SustainableTourismImage from '../../img/creative/sustainable-tourism.png';
import FinancialInstitutionsImage from '../../img/creative/financial-institutions.png';
import EnvironmentalTechImage from '../../img/creative/environmental-tech.png';

const Creative = ({ image, letter, title, description }) => (
  <div 
    className="creative-card"
    data-aos="fade-up"
  >
    <div className="creative-content">
      <img loading="lazy" src={image} className="creative-image" alt={title} />
      <div className="creative-letter">{letter}</div>
      <h3>{title}</h3>
    </div>
    <div className="creative-details">
      <p>{description}</p>
    </div>
  </div>
);

const creatives = [
  { letter: 'C', title: 'Clean Energy and Renewable Technologies', image: CleanEnergyImage, description: 'Focusing on sustainable energy solutions to power Africas future.' },
  { letter: 'R', title: 'Renewable Energy and Energy Efficiency', image: RenewableEnergyImage, description: 'Promoting efficient use of renewable resources across the continent.' },
  { letter: 'E', title: 'Circular Economy and Waste Management', image: CircularEconomyImage, description: 'Implementing sustainable waste management practices for a cleaner Africa.' },
  { letter: 'A', title: 'Artisan Empowerment and Sustainable Textiles', image: ArtisanEmpowermentImage, description: 'Supporting local artisans and promoting sustainable textile production.' },
  { letter: 'T', title: 'Transformative Creative Industries', image: CreativeIndustriesImage, description: 'Nurturing Africas creative talent and cultural exports.' },
  { letter: 'I', title: 'Impactful Sustainable Tourism', image: SustainableTourismImage, description: 'Developing eco-friendly tourism that benefits local communities.' },
  { letter: 'V', title: 'Visionary Financial and Investment Institutions', image: FinancialInstitutionsImage, description: 'Building robust financial systems to support sustainable growth.' },
  { letter: 'E', title: 'Environmental Technology and Innovation', image: EnvironmentalTechImage, description: 'Leveraging technology to address environmental challenges.' },
];

export default function CreativesSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section id="creatives" className="creatives">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>C.R.E.A.T.I.V.E</h2>
          <p>AST also emphasizes its CREATIVE verticals, spanning from Clean Energy and Renewable Technologies to Visionary Financial and Investment Institutions. This comprehensive approach extends beyond environmental care to encompass a spectrum of activities that drive economic growth and social equity, such as, enhancing agricultural productivity, fostering eco-friendly textiles and leveraging green technology. Through this holistic strategy, AST aims to act as a catalyst for transformative change, redefining sustainable trade and establishing a lasting legacy for future generations.</p>
        </div>

        <div className="creatives-grid">
          {creatives.map((creative, index) => (
            <Creative
              key={index}
              image={creative.image}
              letter={creative.letter}
              title={creative.title}
              description={creative.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}