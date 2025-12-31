
import { jwtDecode } from 'jwt-decode';
import { useEffect, useState } from 'react';

import CreateNewBlock from '../components/Dashboard Components/CreateNewBlock';
import WelcomeCard from '../components/Dashboard Components/WelcomeCard';
import DashboardLayout from '../components/Dashboard Components/DashbardLayout';

type JwtPayload = {
  email: string;
  name?: string;
};

export const Dashboard = () => {
  const [user, setUser] = useState<JwtPayload | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      try {
        const decoded = jwtDecode<JwtPayload>(token);
        setUser(decoded);
      } catch (error) {
        console.error('Invalid token');
      }
    }
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f7fafc',
        }}
      >
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <DashboardLayout>
      {/* Welcome Card */}
      {user && <WelcomeCard email={user.email} name={user.name} />}

      {/* Create New Resume Block */}
      <CreateNewBlock />
    </DashboardLayout>
  );
};

export default Dashboard;