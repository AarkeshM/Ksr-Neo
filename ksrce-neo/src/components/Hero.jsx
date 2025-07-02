import React from 'react';
import Button from './Button';

const Hero = () => (
  <div className="hero" style={{ 
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBXofVcDMhxx6wB0zBIyDeqVQftbPOlJ5tqrMEqE8xtjK5MC7pJ1SUqT2YVpbQRIWd45fvDoYDA5NlH7-zrgn-olmWNLZADa96aXM1rg1B3he3q9WMJXWCCnNC9mAx5A3ReH6IZc1N-4TZAC6-ZnXWFIHNkERlFz-zDW7FPrDvfOvvrVlPdHxI68aTl8XQMh7CXI-tcNlDTGtCr7Y5W0vidxfnne1wXw89Mhrgic0VgdKi6dJ2begfTvrafS_nwBW6hzxLqOS2LnKnC")` 
  }}>
    <div className="hero-content">
      <h1 className="hero-title">Empowering the Next Generation of Innovators</h1>
      <h2 className="hero-subtitle">
        KSRCE NEO is an incubation center dedicated to nurturing and accelerating the growth of early-stage startups.
      </h2>
    </div>
    <Button variant="primary" size="large">Explore Programs</Button>
  </div>
);

export default Hero;