// EngagementMetrics.js
import React from "react";
import attend from "./images/attend.png";
import project_done from "./images/project_done.png";
import community from "./images/community.png";

const EngagementMetrics = () => {
  const metrics = {
    hackathonsAttended: 5,
    projectsCompleted: 8,
    communityInteractions: 20,
  };

  return (
    <div className="engagement-metrics-container">
      <h2 style={{ marginLeft: "77px" }}>Engagement Metrics</h2>
      <div className="engagement-cards">
        <div className="engagement-card">
          <div className="engagement-Subcard">
            <img className="engagement-img" src={attend} alt={"pic"} />
            <p>Hackathons Attended: {metrics.hackathonsAttended}</p>
          </div>
          <div className="engagement-Subcard">
            <img className="engagement-img" src={project_done} alt={"pic"} />
            <p>Projects Completed: {metrics.projectsCompleted}</p>
          </div>
          <div className="engagement-Subcard">
            <img className="engagement-img" src={community} alt={"pic"} />
            <p>Community Interactions: {metrics.communityInteractions}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EngagementMetrics;
