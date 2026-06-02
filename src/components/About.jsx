import React from 'react';
import { Target, Eye, Users, Calendar } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">
          About <span className="gradient-text">SUWY TECH</span>
        </h2>
        
        <div className="grid grid-2 about-grid">
          <div className="about-card glass">
            <div className="icon-wrapper">
              <Target size={32} />
            </div>
            <h3>Our Mission</h3>
            <p>To establish India as the ultimate global AI HUB through cutting-edge development and world-class training programs.</p>
          </div>
          
          <div className="about-card glass">
            <div className="icon-wrapper">
              <Eye size={32} />
            </div>
            <h3>Our Vision</h3>
            <p>To provide unparalleled training in AI, DevOps, and Web Development, accelerating the achievement of our goal to make India an AI HUB.</p>
          </div>
        </div>
        
        <div className="history-section glass">
          <div className="history-header">
            <h3>Our Foundation</h3>
            <p>Building the future with experience and dedication.</p>
          </div>
          <div className="grid grid-2">
            <div className="history-item">
              <Calendar className="text-cyan" size={24} style={{color: 'var(--accent-cyan)'}}/>
              <div>
                <h4>Established</h4>
                <p>January 2026</p>
              </div>
            </div>
            <div className="history-item">
              <Users className="text-cyan" size={24} style={{color: 'var(--accent-cyan)', flexShrink: 0}}/>
              <div>
                <h4 style={{ whiteSpace: 'nowrap' }}>Key Leadership</h4>
                <div style={{ margin: '0.5rem 0' }}>
                  <p style={{ marginBottom: 0 }}>SUNI SURENDRAN</p>
                  <p style={{ textAlign: 'center', margin: '2px 0', color: 'var(--accent-cyan)', fontWeight: 'bold' }}>&</p>
                  <p style={{ marginBottom: 0 }}>ALLWYN ANTO</p>
                </div>
                <span className="experience-badge">7+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
