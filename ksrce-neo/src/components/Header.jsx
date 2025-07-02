import React from 'react';
import Button from './Button';

const Header = () => {
  const headerStyle = {
    background: 'white',
    padding: '16px 32px',
    borderBottom: '1px solid #e5e7eb',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  };

  const innerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const logoGroupStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  };

  const logoTextStyle = {
    fontSize: '20px',
    fontWeight: '600',
    color: '#111827',
  };

  const navStyle = {
    display: 'flex',
    gap: '28px',
  };

  const navLinkStyle = {
    fontSize: '16px',
    color: '#4b5563',
    textDecoration: 'none',
  };

  const navLinkHoverStyle = {
    color: '#111827',
  };

  const ctaStyle = {
    marginLeft: '16px',
  };

  const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'Domains', href: '/domains' },
    { name: 'Programs', href: '/programs' },
    { name: 'Start Ups', href: '/startups' },
    { name: 'Services', href: '/services' },
    { name: 'Get Involved', href: '/get-involved' },
  ];

  return (
    <header style={headerStyle}>
      <div style={innerStyle}>
        {/* Logo group */}
        <div style={logoGroupStyle}>
          <div style={{ height: 28, width: 28 }}>
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" height="28" width="28">
              <circle cx="24" cy="24" r="20" fill="#10b981" />
              <text x="50%" y="55%" textAnchor="middle" fill="#fff" fontSize="18" fontFamily="Arial" dy=".3em">N</text>
            </svg>
          </div>
          <h2 style={logoTextStyle}>KSRCE NEO</h2>
        </div>

        {/* Nav links */}
        <nav style={navStyle}>
          {navLinks.map(({ name, href }) => (
            <a
              key={name}
              href={href}
              style={navLinkStyle}
              onMouseOver={e => (e.target.style.color = navLinkHoverStyle.color)}
              onMouseOut={e => (e.target.style.color = navLinkStyle.color)}
            >
              {name}
            </a>
          ))}
        </nav>

        {/* Call to action */}
        <div style={ctaStyle}>
          <Button variant="primary" size="small" href="/apply">Apply Now</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
