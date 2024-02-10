import React from 'react';
import nav from '../img/nav.png';

const Footer: React.FC = () => {
  return (
    <div>
      <div className='footer_cont'>
        <div className='footer-info'>
          <ul className='footer-list'>
            <li className="heading">Product</li>
            <li>Employee database</li>
            <li>Payroll</li>
            <li>Absences</li>
            <li>Time tracking</li>
            <li>Shift planner</li>
            <li>Recruiting</li>
          </ul>
          <ul className='footer-list'>
            <li className="heading">Information</li>
            <li>FAQ</li>
            <li>Blog</li>
            <li>Support</li>
          </ul>
          <ul className='footer-list'>
            <li className="heading">Company</li>
            <li>About us</li>
            <li>Careers</li>
            <li>Contact us</li>
            <li>Life Media</li>
          </ul>
        </div>
        <div className='footer-info-2'>
          <p>Subscribe</p>
          <input type="email" placeholder="Email address" />
          <i className="fa-solid fa-arrow-right"></i>
          <p>Hello, we are Lift Media. Our goal is to translate the positive effects from revolutionizing how companies engage with their clients & their team.</p>
        </div>
      </div>
      <div className='the_end'>
        <div className='the_end_bar'></div>
        <div className='the_end_cont'>
          <p>Terms</p>
          <p>Privacy</p>
          <p>Cookies</p>
        </div>
        <img className='F-img' src={nav} alt="Navigation" />
        <div className='links'>
          <i className="fa-brands fa-linkedin-in"></i>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-twitter"></i>
        </div>
      </div>
    </div>
  );
}

export default Footer;
