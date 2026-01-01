import React from "react";

interface WelcomeCardProps {
  email: string;
  name?: string;
}

const WelcomeCard: React.FC<WelcomeCardProps> = ({ email, name }) => {
  const displayName = name || email.split("@")[0];

  return (
    <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-10 rounded-2xl shadow-xl max-w-[480px] w-full text-center ">
      <h1
        style={{
          fontSize: "2.5rem",
          margin: "0 0 0.5rem 0",
          fontWeight: "700",
        }}
      >
        Welcome back, {displayName}!
      </h1>
      <p style={{ fontSize: "1.2rem", opacity: 0.9, margin: "0" }}>
        Let's build something amazing today.
      </p>
    </div>
  );
};

export default WelcomeCard;
