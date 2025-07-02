import React from 'react';
import '../styles/Domains.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
const domains = [
  {
    icon: '🤖',
    title: 'Artificial Intelligence',
    desc: 'Developing intelligent systems and applications.',
  },
  {
    icon: '📶',
    title: 'Internet of Things',
    desc: 'Connecting devices and creating smart environments.',
  },
  {
    icon: '🌱',
    title: 'Green Energy',
    desc: 'Innovating sustainable energy solutions.',
  },
  {
    icon: '🏭',
    title: 'Advanced Manufacturing',
    desc: 'Transforming manufacturing processes with technology.',
  },
  {
    icon: '🔋',
    title: 'Energy Storage',
    desc: 'Advancing battery technology for efficient energy storage.',
  },
  {
    icon: '🧪',
    title: 'Advanced Materials',
    desc: 'Exploring new materials with enhanced properties.',
  }
];

export default function Domains() {
  return (
  <>
  <Header/>
    <div className="domains-section">
      <h1 className="title">Domains</h1>
      <p className="subtitle">
        Explore the diverse fields of innovation and technology that KSRCE NEO supports and nurtures. Our focus spans across various sectors, driving advancements and fostering growth in each domain.
      </p>
      <div className="cards-container">
        {domains.map((domain, index) => (
          <div key={index} className="domain-card">
            <div className="icon">{domain.icon}</div>
            <h3 className="domain-title">{domain.title}</h3>
            <p className="domain-desc">{domain.desc}</p>
          </div>
        ))}
      </div>
      <footer className="footer">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <p>©2024 KSRCE NEO. All rights reserved.</p>
      </footer>
    </div>
    <Footer/>
  </>
  );
}
