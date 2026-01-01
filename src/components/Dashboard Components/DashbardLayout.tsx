import React from 'react';

type DashboardLayoutProps = {
  children: React.ReactNode;
}

const DashboardLayout = (props: DashboardLayoutProps) => {
  return (
    <div className='min-h-screen bg-[#f7fafc] flex flex-col items-center px-4 py-16 gap-12'
    
    >
      {props.children}
    </div>
  );
};

export default DashboardLayout;
