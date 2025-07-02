// src/pages/Programs.jsx
import React from 'react';
import '../styles/Programs.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
export default function Programs() {
  return (
    <>
    <Header/>
    <div className="programs-page">
      <h1>Programs</h1>
      <ul>
        <li><strong>Incubation</strong>: Early‑stage support, funding & mentorship.</li>
        <li><strong>Acceleration</strong>: Workshops, investor introductions.</li>
        <li><strong>Mentorship</strong>: 1‑on‑1 guidance from industry experts.</li>
      </ul>
    </div>
    <Footer/>
    </>
);
}
