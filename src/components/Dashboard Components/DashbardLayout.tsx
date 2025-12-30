// src/components/Dashboard/DashboardLayout.tsx
import React from 'react';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#f7fafc',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '4rem 1rem',
        gap: '3rem',
      }}
    >
      {children}
    </div>
  );
};

export default DashboardLayout;