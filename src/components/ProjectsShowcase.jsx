// ProjectsShowcase.js
import React from 'react';

const ProjectsShowcase = () => {
  const projects = [
    {
      title: 'Privacy Preserving Searchable Encryption with Fine-grained Access Control',
      description: 'Searchable encryption facilitates cloud server to search over encrypted data without decrypting the data. Single keyword based searchable encryption enables a user to access only a subset of documents, which contains the keyword of the user interest. In this paper we present a single keyword based searchable encryption scheme for the applications where multiple data owners upload their data and multiple users access the data. We use attribute based encryption scheme that allows user to access the selective subset of data from cloud without revealing his/her access rights to the cloud server. The proposed scheme is proven adaptively secure against chosen-keyword attack in the random oracle model. We have implemented the scheme on Google cloud instance and the performance of the scheme found feasible in real-world applications.',
      link: 'https://github.com/project1',
    },
    {
      title: 'A User-Centric Data Protection Method for Cloud Storage Based on Invertible DWT',
      description: 'Protection on end users data stored in Cloud servers becomes an important issue in today Cloud environments. In this paper, we present a novel data protection method combining Selective Encryption (SE) concept with fragmentation and dispersion on storage. Our method is based on the invertible Discrete Wavelet Transform (DWT) to divide agnostic data into three fragments with three different levels of protection. Then, these three fragments can be dispersed over different storage areas with different levels of trustworthiness to protect end users data by resisting possible leaks in Clouds. Thus, our method optimizes the storage cost by saving expensive, private, and secure storage spaces and utilizing cheap but low trustworthy storage space. We have intensive security analysis performed to verify the high protection level of our method. Additionally, the efficiency is proved by implementation of deploying tasks between CPU and General Purpose Graphic Processing Unit (GPGPU) in an optimized manner.',
      link: 'https://github.com/project2',
    },
  ];

  return (
    <div className="projects-showcase-container">
      <h2>Projects Showcase</h2>
      <div className="projects-cards">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsShowcase;
