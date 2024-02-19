// Home.js
import { IoListCircleOutline,IoFilterCircleOutline } from "react-icons/io5";
import React from 'react';
import StatsCard from './StatsCard';

const Home = () => {
  const stats = {
    total_messages: 1696,
    unique_sessions: 330
  };

  return (
    <div className="Home">
      <div className="child1">
        <StatsCard
          title="MENSAJES EN TOTAL"
          count={stats.total_messages}
          Icon={<IoFilterCircleOutline />} 
        />
      </div>
      <div className="child2">
        <StatsCard
          title="CONVERSACIONES EN TOTAL"
          count={stats.unique_sessions}
          Icon={<IoListCircleOutline />} 
        />
      </div>
    </div>
  );
};

export default Home;