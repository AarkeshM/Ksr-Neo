import React from 'react';
import '../styles/Services.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
const services = [
  {
    title: 'Mentorship Programs',
    description: 'Our mentorship programs connect startups with experienced entrepreneurs, industry experts, and investors who provide guidance, feedback, and support. Mentors offer insights on business strategy, product development, marketing, and fundraising, helping startups navigate challenges and accelerate growth.'
  },
  {
    title: 'Infrastructure & Co‑working Spaces',
    description: 'KSRCE NEO provides access to state‑of‑the‑art infrastructure, including co‑working spaces, meeting rooms, and specialized labs. Our facilities offer a collaborative environment where startups can work, network, and access the resources they need to develop and test their products or services.'
  },
  {
    title: 'Funding Support',
    description: 'We assist startups in securing funding through various channels, including seed funding, angel investors, venture capital, and government grants. Our team provides guidance on preparing pitch decks, connecting with investors, and navigating the funding process to maximize their chances of success.'
  },
  {
    title: 'Networking Opportunities',
    description: 'KSRCE NEO organizes regular networking events, workshops, and conferences that bring together startups, investors, mentors, and industry leaders. These events provide valuable opportunities for startups to connect with potential partners, customers, and investors, fostering collaboration and growth.'
  },
  {
    title: 'Legal & Regulatory Assistance',
    description: 'We offer legal and regulatory assistance to help startups navigate the complexities of starting and running a business. Our network of legal experts provides guidance on intellectual property, contracts, compliance, and other legal matters, ensuring startups operate within the legal framework.'
  },
  {
    title: 'Marketing & Branding Support',
    description: 'KSRCE NEO provides marketing and branding support to help startups build their brand, reach their target audience, and generate leads. Our services include market research, brand strategy, content creation, social media marketing, and public relations.'
  }
];

export default function Services() {
  return (
    <>
    <Header/>
    <div className="services-page">
      <div className="services-container">
        <h1 className="services-title">Services</h1>
        <p className="services-intro">
          KSRCE NEO offers a comprehensive suite of services designed to support startups at every stage of their journey. From mentorship and infrastructure to funding and networking, we provide the resources and guidance needed to turn innovative ideas into successful businesses.
        </p>
        <div className="services-list">
          {services.map((svc, i) => (
            <div key={i} className="service-card">
              <h3>{svc.title}</h3>
              <p>{svc.description}</p>
            </div>
          ))}
        </div>
        <footer className="services-footer">
          <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/programs">Programs</a>
            <a href="/services">Services</a>
            <a href="/contact">Contact</a>
          </nav>
          <p>©2024 KSRCE NEO. All rights reserved.</p>
        </footer>
      </div>
    </div>
    <Footer/>
    </>
  );
}
