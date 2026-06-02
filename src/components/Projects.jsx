import React from 'react';
import { Briefcase, Heart, Building, CheckCircle } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const ownProjects = [
    {
      title: 'True Match Matrimony',
      description: 'A comprehensive matrimony web and mobile application with intelligent matchmaking and secure communication.',
      icon: <Heart size={28} className="text-cyan" style={{color: 'var(--accent-cyan)'}} />
    },
    {
      title: 'SWChits',
      description: 'An advanced Chitty Management app designed to streamline chit fund operations and member management.',
      icon: <Briefcase size={28} className="text-cyan" style={{color: 'var(--accent-cyan)'}}/>
    }
  ];

  const clients = [
    "Truefox AI Inc",
    "SCOT-ACES",
    "ACES",
    "JASA Engineering"
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        
        <div className="projects-header text-center">
          <h2 className="section-title">
            Our <span className="gradient-text">Products & Clients</span>
          </h2>
          <p className="section-subtitle">
            Showcasing our proprietary solutions and the trusted partners we work with.
          </p>
        </div>

        <div className="projects-content grid grid-2">
          
          <div className="products-showcase glass">
            <h3 className="sub-heading">Our Proprietary Products</h3>
            <div className="product-list">
              {ownProjects.map((project, idx) => (
                <div key={idx} className="product-item">
                  <div className="product-icon-container">
                    {project.icon}
                  </div>
                  <div className="product-info">
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="clients-showcase glass">
            <h3 className="sub-heading">Major Clients</h3>
            <div className="clients-grid">
              {clients.map((client, idx) => (
                <div key={idx} className="client-card hover-effect">
                  <Building size={24} className="client-icon text-blue" style={{color: 'var(--accent-blue)'}}/>
                  <span>{client}</span>
                  <CheckCircle size={16} className="verified-icon text-cyan" style={{color: 'var(--accent-cyan)', marginLeft: 'auto'}}/>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
