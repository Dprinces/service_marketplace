// pages/AboutPage.js

import React from 'react';
import '../Styles/AboutPage.module.css'; // Import your CSS module for styling

const AboutPage = () => {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1>About Us</h1>
      </header>
      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          At [Your Company Name], our mission is to connect skilled artisans with customers who appreciate quality craftsmanship. We believe in supporting local talent and fostering creativity within our community.
        </p>
      </section>
      <section className="about-section">
        <h2>Our Story</h2>
        <p>
          Founded in [Year], [Your Company Name] started as a small initiative to showcase the work of talented artisans. Over the years, we have grown into a platform that not only highlights individual skills but also promotes collaboration and innovation within the artisan community.
        </p>
      </section>
      <section className="about-section">
        <h2>Meet the Team</h2>
        <div className="team-members">
          {/* Example team member */}
          <div className="team-member">
            <img src="/path/to/team-member1.jpg" alt="Team Member 1" className="team-avatar" />
            <h3>Jane Doe</h3>
            <p>Founder & CEO</p>
            <p>Jane is passionate about craftsmanship and is dedicated to supporting artisans through our platform.</p>
          </div>
          {/* Add more team members as needed */}
        </div>
      </section>
      <section className="about-section">
        <h2>Contact Us</h2>
        <p>
          If you have any questions or want to learn more about our platform, feel free to reach out to us at:
        </p>
        <p>Email: <a href="mailto:info@yourcompany.com">info@yourcompany.com</a></p>
        <p>Phone: (123) 456-7890</p>
      </section>
    </div>
  );
};

export default AboutPage;
