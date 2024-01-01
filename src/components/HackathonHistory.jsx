// HackathonHistory.js
import React from 'react';
import hackathonImage1 from './images/hackathon1.jpg'; // Import your images
import hackathonImage2 from './images/hackathon2.png'; // Import your images

const HackathonHistory = () => {
  const hackathons = [
    { title: 'SIH 2023 Finalist', date: '19-12-2023', awards: 'Best Project', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { title: 'SSIP 2.0 Gujarat', date: '30-10-2023', awards: 'Runner-up', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  ];

  return (
    <div className="hackathon-history-container">
      <h2>Hackathon History</h2>
      <div className="hackathon-cards">
        {hackathons.map((hackathon, index) => (
          <div key={index} className="hackathon-card">
            <img src={index === 0 ? hackathonImage1 : hackathonImage2} alt={`Hackathon ${index + 1}`} />
            <div className="hackathon-details">
              <h3>{hackathon.title}</h3>
              <p>{hackathon.description}</p>
              <p>Date: {hackathon.date}</p>
              <p>Awards: {hackathon.awards}</p>
            </div>
            <button>Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HackathonHistory;
