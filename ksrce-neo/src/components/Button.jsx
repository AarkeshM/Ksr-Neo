import React from 'react';

const Button = ({ children, variant = 'primary', size = 'medium', className = '', ...props }) => {
  const baseClasses = "button";
  const variantClasses = {
    primary: "btn-primary",
    secondary: "btn-secondary"
  };
  const sizeClasses = {
    medium: "",
    large: "btn-large"
  };
  
  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`} 
      {...props}
    >
      <span className="truncate">{children}</span>
    </button>
  );
};

export default Button;