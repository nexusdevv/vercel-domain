'use client';

import React from 'react';

interface PageTitleProps {
  children: React.ReactNode;
}

const PageTitle = ({ children }: PageTitleProps) => {
  return (
    <h1 
      className="text-3xl lg:text-4xl font-bold cursor-pointer" 
      onClick={() => window.location.reload()}
    >
      {children}
    </h1>
  );
};

export default PageTitle; 