import React from 'react';

const DisableEditing: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div style={{ outline: 'none' }} tabIndex={-1}>
      {children}
    </div>
  );
};

export default DisableEditing;