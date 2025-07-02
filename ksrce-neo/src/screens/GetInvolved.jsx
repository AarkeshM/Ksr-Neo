import React from 'react';
import '../styles/GetInvolved.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
export default function GetInvolved() {
  return (
    <>
    <Header/>
    <div className="get-involved-section">
      <h1 className="get-title">Get Involved</h1>

      <div className="involved-block">
        <h2>For Students</h2>
        <p>
          Students can engage with KSRCE NEO through various avenues, including internships,
          project collaborations, and participation in workshops and events. These opportunities
          provide hands-on experience, mentorship, and exposure to the startup ecosystem.
        </p>
        <button className="cta-button">Explore Student Opportunities</button>
      </div>

      <div className="involved-block">
        <h2>For Mentors</h2>
        <p>
          Experienced professionals and industry experts can contribute to KSRCE NEO as mentors,
          guiding startups and sharing their knowledge. Mentors play a crucial role in shaping
          the next generation of entrepreneurs.
        </p>
        <button className="cta-button">Become a Mentor</button>
      </div>

      <div className="involved-block">
        <h2>For Corporate Partners</h2>
        <p>
          Corporations can partner with KSRCE NEO to foster innovation, access cutting-edge technologies,
          and engage with startups. Collaboration opportunities include sponsoring events, providing
          resources, and participating in joint projects.
        </p>
        <button className="cta-button">Explore Partnership Opportunities</button>
      </div>
    </div>
    <Footer/>
    </>
  );
}
