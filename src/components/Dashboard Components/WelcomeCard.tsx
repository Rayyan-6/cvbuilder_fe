import React from "react";

type WelcomeCardProps ={
  email: string;
  name?: string;
}

const WelcomeCard=(props:WelcomeCardProps) => {
  const displayName = props.name || props.email.split("@")[0];

  return (
       <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-10 rounded-2xl shadow-xl max-w-[480px] w-full text-center">
      <h1 className="text-[2.5rem] font-bold mb-2">
        Welcome back, {displayName}!
      </h1>
      <p className="text-[1.2rem] opacity-90 m-0">
        Let's build something amazing today.
      </p>
    </div>
  );
};

export default WelcomeCard;
