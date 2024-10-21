import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../stylesheets/home/style.css';
import historyImage from '../../img/impactsection/history.jpg';

function HistorySection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <main className="main">
        <div className="page-title dark-background">
            <div className="container position-relative">
                <h2>Impact</h2>
                <p>Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.</p>
                <nav className="breadcrumbs">
                    <ol>
                    <li><Link to="/">Home</Link></li>
                    <li className="current">About</li>
                    </ol>
                </nav>
            </div>
        </div>
        <section id="history" className="history-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6" data-aos="fade-left">
                        <h2 className="section-title">Our History</h2>
                        <p>
                        Africa Sustainable Trade (AST) was founded in 2010 with a vision to transform the economic landscape of Africa. 
                        Our journey began with a small team of passionate individuals committed to sustainable development and fair trade practices.
                        </p>
                        <p>
                        Over the years, we've grown into a continent-wide organization, partnering with local communities, governments, and international 
                        bodies to drive positive change. Our initiatives have touched lives across various sectors, from agriculture to renewable energy.
                        </p>
                        <p>
                        Today, AST stands as a beacon of sustainable trade practices, continually evolving to meet the challenges of a rapidly changing world 
                        while staying true to our core mission of empowering African communities through ethical and sustainable trade.
                        </p>
                    </div>
                    <div className="col-lg-6" data-aos="fade-right">
                        <img src={historyImage} alt="Organization History" className="img-fluid rounded shadow" />
                    </div>
                </div>
            </div>
        </section>
    </main>
  );
}

export default HistorySection;