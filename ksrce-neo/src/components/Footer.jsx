import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#ffffff',
    padding: '40px 20px 24px',
    borderTop: '1px solid #e5e7eb',
    textAlign: 'center',
  };

  const linkContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '24px',
    marginBottom: '20px',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#4b5563',
    fontSize: '16px',
  };

  const linkHoverStyle = {
    color: '#111827',
  };

  const copyrightStyle = {
    fontSize: '14px',
    color: '#9ca3af',
  };

  return (
    <footer style={footerStyle}>
      <div style={linkContainerStyle}>
        {['About', 'Programs', 'Events', 'Resources', 'Contact'].map((item) => (
          <a
            key={item}
            href="#"
            style={linkStyle}
            onMouseOver={e => (e.target.style.color = linkHoverStyle.color)}
            onMouseOut={e => (e.target.style.color = linkStyle.color)}
          >
            {item}
          </a>
        ))}
      </div>
      <p style={copyrightStyle}>
        ©2024 KSRCE NEO. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
