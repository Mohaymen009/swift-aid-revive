import React from 'react';

interface CallButtonProps {
  phoneNumber: string;
  children: React.ReactNode;
  className?: string;
}

const CallButton = ({ phoneNumber, children, className = '' }: CallButtonProps) => {
  // Format phone number for tel: link (remove all non-numeric characters except '+')
  const telNumber = `tel:${phoneNumber.replace(/[^0-9+]/g, '')}`;
  
  return (
    <a 
      href={telNumber}
      className={`inline-flex items-center justify-center px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent/90 transition-colors ${className}`}
    >
      <svg 
        className="w-5 h-5 mr-2" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
        />
      </svg>
      {children}
    </a>
  );
};

export default CallButton;
