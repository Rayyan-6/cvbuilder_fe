// src/components/Dashboard/WelcomeCard.tsx
import React from 'react';

interface WelcomeCardProps {
  email: string;
  name?: string;
}

const WelcomeCard: React.FC<WelcomeCardProps> = ({ email, name }) => {
  const displayName = name || email.split('@')[0];

  return (
    <div
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '2.5rem',
        borderRadius: '16px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
        maxWidth: '480px',
        width: '100%',
        textAlign: 'center' as const,
      }}
    >
      <h1 style={{ fontSize: '2.5rem', margin: '0 0 0.5rem 0', fontWeight: '700' }}>
        Welcome back, {displayName}!
      </h1>
      <p style={{ fontSize: '1.2rem', opacity: 0.9, margin: '0' }}>
        Let's build something amazing today.
      </p>
    </div>
  );
};

export default WelcomeCard;