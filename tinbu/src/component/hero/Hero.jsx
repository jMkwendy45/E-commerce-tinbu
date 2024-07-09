import React from 'react'
import '../../styles/hero.css'
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="pharmacy-container">
      <div className="pharmacy-content">
        <div className="text-section">
          <h1>Waste no time on the queue,<br></br> we will bring the pharmacyto you.</h1>
          <p>Shop for prescription medications, vitamins,<br></br> and over-the-counter supplies, all in one place.</p>
          <Link to="/allproduct">
          <button className="start-shopping-btn">Start shopping now</button>
          </Link>
          {/* <button className="start-shopping-btn">Start shopping now</button> */}
          <div className="customer-satisfaction">
            <p>24,000+<br></br> customers satisfied</p>
            <div className="customer-avatars">
              <img src={assets.person_1} alt=""/>
              <img src={assets.person_2} alt=""/>
              <img src={assets.person_3} alt=""/>
              <img src={assets.person_4} alt=""/>
            </div>
          </div>
        </div>
        <div className="image-section">
          <img src={assets.pharm_pic} alt="Pharmacist" />
        </div>
      </div>
      <div className="pharmacy-footer">
        <span className='blues'>Good price</span>
        <span id="health">Health<span id="xcale">Xcale</span></span>
        <span className='blues'>Super fast</span>
        <span id="health">Health<span id="xcale">Xcale</span></span>
        <span className='blues'>Easy shopping</span>
      </div>
    </div>
  );
}

export default Hero;