import React from 'react';
import '../styles/AboutUs.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
export default function AboutUs() {
  return (<>
    <Header />
    <div className="about-container">
      
      <section className="about-section">
        <h1>About Us</h1>
        <p className="intro-text">
          KSRCE NEO is an incubation center dedicated to nurturing innovative ideas and fostering entrepreneurial growth. 
          Our mission is to provide a supportive ecosystem where startups can thrive and make a significant impact.
        </p>

        <div className="about-subsection">
          <h2>Our Vision</h2>
          <p>
            To be a leading incubation center recognized for its commitment to innovation, entrepreneurship, and societal impact.
            We envision a future where KSRCE NEO serves as a catalyst for transformative ideas, driving economic growth and positive change.
          </p>
        </div>

        <div className="about-subsection">
          <h2>Our Mission</h2>
          <p>
            To empower aspiring entrepreneurs by providing comprehensive support, resources, and mentorship. 
            We aim to cultivate a vibrant community of innovators, fostering collaboration and driving the successful 
            launch and growth of startups.
          </p>
        </div>

        <div className="core-values-section">
          <h2>Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="icon">💡</div>
              <h3>Innovation</h3>
              <p>We champion creativity and encourage the exploration of novel ideas.</p>
            </div>
            <div className="value-card">
              <div className="icon">🤝</div>
              <h3>Collaboration</h3>
              <p>We believe in the power of teamwork and shared knowledge.</p>
            </div>
            <div className="value-card">
              <div className="icon">🤍</div>
              <h3>Integrity</h3>
              <p>We uphold the highest ethical standards in all our endeavors.</p>
            </div>
            <div className="value-card">
              <div className="icon">🎯</div>
              <h3>Impact</h3>
              <p>We are committed to creating meaningful and lasting contributions to society.</p>
            </div>
          </div>
        </div>
      </section>

      {/* <footer className="about-footer">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <p>©2023 KSRCE NEO. All rights reserved.</p>
      </footer> */}
    </div>
    <Footer/>
    </>
  );
}
