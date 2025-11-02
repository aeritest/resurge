import React from 'react';

const ResurgeLogo = ({ className = "" }) => (
  <div className={`${className} flex flex-col items-center`}>
    <img 
      src="/resurge-logo.png" 
      alt="Resurge" 
      className="w-32 h-32 mb-2"
    />
    <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">
      RESURGE
    </h1>
    <p className="text-sm font-medium text-teal-200">OVERCOME PORN ADDICTION</p>
  </div>
);

export default ResurgeLogo;