import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../stylesheets/home/style.css';

const FooterLink = ({ iconClass, text, href }) => (
  <li><i className={iconClass}></i> <a href={href}>{text}</a></li>
);

function Footer() {
  useEffect(() => {
    AOS.init();

    // Back to top button
    let backtotop = document.querySelector('.back-to-top');

    if (backtotop) {
      const toggleBacktotop = () => {
        if (window.scrollY > 100) {
          backtotop.classList.add('active');
        } else {
          backtotop.classList.remove('active');
        }
      }

      window.addEventListener('load', toggleBacktotop);
      window.addEventListener('scroll', toggleBacktotop);

      // Cleanup on component unmount
      return () => {
        window.removeEventListener('load', toggleBacktotop);
        window.removeEventListener('scroll', toggleBacktotop);
      };
    }
  }, []);

  const handleBackToTop = () => {
    // Scrolls to the top of the page
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <footer id="footer" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="500">
        <div className="footer-newsletter">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h4>Our Newsletter</h4>
                <p>Subscribe to our Newsletter to get updates on our tools and exclusive offers.</p>
              </div>
              <div className="col-lg-6">
                <form action="" method="post">
                  <input type="email" name="email" /><input type="submit" value="Subscribe" />
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-top">
          <div className="container">
            <div className="row">

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Site Map</h4>
                <ul>
                  <FooterLink iconClass="bx bx-chevron-right" text="About AST" href="/" />
                  <FooterLink iconClass="bx bx-chevron-right" text="AST Exclusive Roundtables" href="/" />
                  <FooterLink iconClass="bx bx-chevron-right" text="Key Initiatives" href="/" />
                  <FooterLink iconClass="bx bx-chevron-right" text="AST Consortium" href="/" />
                  <FooterLink iconClass="bx bx-chevron-right" text="Get Involved" href="/" />
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-contact">
                <h4>Contact Us</h4>
                <p>
                  Novotel London West<br />
                  1 Shortlands Hammersmith<br />
                  International Ctre, London W6 8DR<br /><br />
                  <strong>Tel: </strong>(00) 00000<br />
                  <strong>Email: </strong>contact@ast.com<br />
                </p>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Africa Sustainable Trade</h4>
                <p>
                  At Africa Sustainable Trade (AST), we believe in a future where Africa leads in sustainable business practices. 
                  We are dedicated to empowering individuals and organisations to make impactful trade decisions that drive economic growth, social development, and environmental stewardship. 
                </p>
              </div>

              <div className="col-lg-3 col-md-6 footer-info">
                <div className="social-links mt-3">
                  <a href="/" className="twitter"><i className="bx bxl-twitter"></i></a>
                  <a href="/" className="facebook"><i className="bx bxl-facebook"></i></a>
                  <a href="/" className="instagram"><i className="bx bxl-instagram"></i></a>
                  <a href="/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="copyright">
            &copy; Copyright <strong><span>Africa Sustainable Trade</span></strong>. All Rights Reserved
          </div>
        </div>
      </footer>

      {/* Back to top button */}
      <a href="/" className="back-to-top d-flex align-items-center justify-content-center" onClick={handleBackToTop}>
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
}

export default Footer;