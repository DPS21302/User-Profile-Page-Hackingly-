// Skills.js
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa"; // Import the close icon

const Skills = () => {
  const [skills, setSkills] = useState([
    "React",
    "JavaScript",
    "CSS",
    "Python",
    "MERN",
  ]);
  const [newSkill, setNewSkill] = useState("");

  const addSkill = () => {
    if (newSkill.trim() !== "") {
      setSkills([...skills, newSkill]);
      setNewSkill("");
    }
  };

  const removeSkill = (index) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    setSkills(updatedSkills);
  };

  const headerStyle = {
    marginTop: "-13rem",
    marginLeft: "35rem",
    position: "absolute",
    background: "linear-gradient(to right, #000000 0%, #6754E3 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <div className="skills-container">
      <h2 style={headerStyle}>Skills and Technologies</h2>
      <div className="skill-cards">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <p>{skill}</p>
            <FaTimes
              className="remove-icon"
              onClick={() => removeSkill(index)}
            />
          </div>
        ))}
        {/* Card for adding a new skill */}
        <div className="skill-card add-skill-card">
          <input
            type="text"
            placeholder="Add a new skill"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
          />
          <button onClick={addSkill}>+ Add </button>
        </div>
      </div>
    </div>
  );
};

export default Skills;
