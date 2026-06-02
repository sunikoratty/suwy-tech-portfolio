import React from 'react';
import { Monitor, Smartphone, Cpu, Code2, Server, GraduationCap } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Modern, responsive, and high-performance web applications using React, Angular, and cutting-edge tech.',
      icon: <Monitor size={32} />
    },
    {
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile experiences designed for engagement and scale.',
      icon: <Smartphone size={32} />
    },
    {
      title: 'Artificial Intelligence',
      description: 'Integrating next-gen AI solutions to automate, predict, and innovate your business processes.',
      icon: <Cpu size={32} />
    },
    {
      title: 'Software Development',
      description: 'Custom software solutions tailored to solve complex challenges and drive growth.',
      icon: <Code2 size={32} />
    },
    {
      title: 'DevOps & Cloud',
      description: 'Streamlining deployment pipelines and ensuring robust, scalable infrastructure.',
      icon: <Server size={32} />
    },
    {
      title: 'Professional Training',
      description: 'Empowering the next generation with deep-dive courses in Python, React, Angular, AI, and DevOps.',
      icon: <GraduationCap size={32} />
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">
            Our <span className="gradient-text">Services & Training</span>
          </h2>
          <p className="section-subtitle">
            Comprehensive solutions and education in modern technologies.
          </p>
        </div>
        
        <div className="grid grid-3 services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card glass hover-effect">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
