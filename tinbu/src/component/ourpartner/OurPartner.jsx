import React from 'react';
import { partners } from '../../assets/assets';
import '../../styles/ourpartner.css'
const OurPartners = () => {
  return (
    <section className="partners-section">
      <h2>Our partners</h2>
      <div className="partner-logos">
        {partners.map((partner, index) => (
          <img 
            key={index}
            src={partner.logo}
            alt={`${partner.name} logo`}
            className="partner-logo"
          />
        ))}
      </div>
    </section>
  );
};

export default OurPartners;