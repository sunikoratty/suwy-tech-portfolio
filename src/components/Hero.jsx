import React from 'react';
import { ArrowRight, Code } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container hero-content">
        <div className="hero-text animate-fade-in">
          <div className="badge glass">
            <Code size={16} className="text-cyan" style={{color: 'var(--accent-cyan)'}}/>
            <span>Innovating the Future of Tech</span>
          </div>
          <h1 className="hero-title">
            Transforming Ideas into <br/>
            <span className="gradient-text">Digital Reality</span>
          </h1>
          <p className="hero-subtitle">
            Leading Software Development, Training & Consultancy. <br/>
            On a mission to make India the ultimate AI Hub.
          </p>
          <div className="hero-cta">
            <a href="#services" className="btn btn-primary">
              Explore Our Services <ArrowRight size={20} />
            </a>
            <a href="#about" className="btn btn-outline glass">
              About SUWY TECH
            </a>
          </div>
        </div>
        
        <div className="hero-visual animate-fade-in">
          <div className="glowing-orb"></div>
          <div className="hero-card glass">
            <div className="card-header">
              <div className="dots">
                <span></span><span></span><span></span>
              </div>
            </div>
            <div className="card-body">
              <pre><code>
<span style={{color: '#c678dd'}}>const</span> <span style={{color: '#61afef'}}>suwyTech</span> = {'{'}
  mission: <span style={{color: '#98c379'}}>"Make India an AI HUB"</span>,
  expertise: [<span style={{color: '#98c379'}}>"AI"</span>, <span style={{color: '#98c379'}}>"Web"</span>, <span style={{color: '#98c379'}}>"Mobile"</span>],
  experience: <span style={{color: '#d19a66'}}>7</span> + <span style={{color: '#98c379'}}>" Years"</span>,
  status: <span style={{color: '#98c379'}}>"Innovating"</span>
{'}'};
              </code></pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
