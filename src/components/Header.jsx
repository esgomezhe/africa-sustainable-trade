import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import '../stylesheets/header.css';

function Header() {
  useEffect(() => {
    const navbar = document.getElementById('navbar');

    const handleMobileNavToggle = (e) => {
      navbar.classList.toggle('navbar-mobile');
      e.target.classList.toggle('bi-list');
      e.target.classList.toggle('bi-x');
    };

    const handleDropdownClick = (e) => {
      if (navbar.classList.contains('navbar-mobile')) {
        e.preventDefault();
        e.target.nextElementSibling?.classList.toggle('dropdown-active');
      }
    };

    const handleScrollTo = (hash) => {
      const targetElement = document.querySelector(hash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    if (mobileNavToggle) {
      mobileNavToggle.addEventListener('click', handleMobileNavToggle);
    }

    const dropdownLinks = document.querySelectorAll('.navbar .dropdown > a');
    if (dropdownLinks) {
      dropdownLinks.forEach(item => {
        item.addEventListener('click', handleDropdownClick, true);
      });
    }

    const scrollToLinks = document.querySelectorAll('.scrollto');
    if (scrollToLinks) {
      scrollToLinks.forEach(item => {
        item.addEventListener('click', (e) => handleScrollTo(e.target.hash), true);
      });
    }

    return () => {
      if (mobileNavToggle) {
        mobileNavToggle.removeEventListener('click', handleMobileNavToggle);
      }
      if (dropdownLinks) {
        dropdownLinks.forEach(item => {
          item.removeEventListener('click', handleDropdownClick, true);
        });
      }
      if (scrollToLinks) {
        scrollToLinks.forEach(item => {
          item.removeEventListener('click', (e) => handleScrollTo(e.target.hash), true);
        });
      }
    };
  }, []);

  return (
    <header className='header'>
      <div className='header__container'>
        <div className='header--logo'>
          <Link to='/'>
            <img className='header--image' src={require('../img/logo.jpg')} alt="Africa Sustainable Trade" />
          </Link>
        </div>
        <nav id="navbar" className="navbar">
          <ul>
            <li><a href="/">Impact</a></li>
            <li><a href="/pillars/">Pillars</a></li>
            <li><a href="/creatives/">C.R.E.A.T.I.V.E</a></li>
            <li><a href="/">Africa Sustainable Trade Consortium</a></li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
}

export default Header;