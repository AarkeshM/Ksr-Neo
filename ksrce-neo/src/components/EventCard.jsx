import React from 'react';
import Button from './Button';

const EventCard = () => (
  <div className="event-card">
    <div className="event-content">
      <p className="event-title">Startup Pitch Competition</p>
      <p className="event-description">
        Join us for an exciting pitch competition where startups will showcase their innovative ideas to a panel of investors and industry experts.
      </p>
      <Button variant="secondary">Register Now</Button>
    </div>
    <div 
      className="event-image"
      style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAOofWvPxm6AfFuIBs37HkHjpdH9PREsFe6WPzpNFHfkKnJeWc_MFELXQcbRarsBiqwoexxD68Wre8naMR3MYKT_2cQjcnFaGiwqZ1k8596n824cFuKa9OLAVNKxKh8e6o_EqF7ZAayA4fpPLSYAT3DOgCXayIoeOMRT31H_xVmk0i9Q-d1XpZs8DpFCGP88pBwwBcGXmFL9jJnrayHhcMkdaI7j6n2zJrJNUDY6VRmjKp__b-DwAy3BuuEsULkOhVMEqhG-nuS5mLP")` }}
    />
  </div>
);

export default EventCard;