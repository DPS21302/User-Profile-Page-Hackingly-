// EngagementMetrics.js
import React from 'react';

const EngagementMetrics = () => {
  const metrics = {
    hackathonsAttended: 5,
    projectsCompleted: 8,
    communityInteractions: 20,
  };

  return (
    <div className="engagement-metrics-container">
      <h2>Engagement Metrics</h2>
      <div className="engagement-cards">
      <div className="engagement-card">
      <div className="engagement-Subcard">

      <p>Hackathons Attended: {metrics.hackathonsAttended}</p></div>
      <div className="engagement-Subcard"><p>Projects Completed: {metrics.projectsCompleted}</p></div>
      <div className="engagement-Subcard"><p>Community Interactions: {metrics.communityInteractions}</p></div>
      
      </div>
    </div>
    </div>
    
  );
};

export default EngagementMetrics;
