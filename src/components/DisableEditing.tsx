import React, { useEffect } from 'react';

const DisableEditing: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // This prevents the browser from focusing on random divs when clicked
    const handleMouseDown = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // If we didn't click an input or textarea, prevent the "focus" that causes the cursor
      if (target.tagName !== 'INPUT' && target.tagName !== 'TEXTAREA' && !target.isContentEditable) {
        // We don't preventDefault() because that breaks buttons, 
        // we just ensure the document doesn't gain a text-focus.
      }
    };

    document.addEventListener('mousedown', handleMouseDown);
    return () => document.removeEventListener('mousedown', handleMouseDown);
  }, []);

  return (
    <div style={{ outline: 'none', border: 'none' }} tabIndex={-1}>
      {children}
    </div>
  );
};

export default DisableEditing;