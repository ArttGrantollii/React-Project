import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <>
      <nav className="navbari">
        <a href="/">Home</a>
        <a href="/booking" className="active">Book a Demo</a>
        <a href="#contact">Contact</a>
      </nav>

      <section id="about-us" className="about-us-section">
        <div className="container">
          <div className="about-us-content">
            <h1>About Us</h1>
            <p>
              At Superchat, we are dedicated to creating authentic relationships between brands and individuals via chat.
              Our team of passionate individuals works together to deliver top-notch services that connect you with your customers in meaningful ways.
            </p>
          </div>
          <div className="about-us-image">
            <img src="https://www.superchat.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.88271b3e.png&w=1920&q=75" alt="About Us" />
          </div>
        </div>
      </section>

      <section id="our-history" className="our-history-section">
        <div className="container">
          <h2>Our History</h2>
          <p>
            The inspiration for Superchat came from an everyday situation that most people are familiar with. After injuring his wrist,
            Yilmaz (Co-Founder & CEO) was in search of a specialist. Finding a doctor, contacting the office, and making an appointment
            proved more difficult than expected. The phone was busy, emails were unanswered, and other contact options were unavailable.
          </p>
          <p>
            Most messaging solutions are tailored to large enterprises. Small and medium-sized businesses, which are the backbone of the
            global economy, are neglected. For medical practices, financial advisors, insurance offices, car dealerships, and many other
            businesses, there is no adequate way to communicate efficiently and digitally.
          </p>
          <p>
            This idea evolved into a comprehensive messaging suite that flexibly adapts to the needs of businesses. Our omnichannel solution
            helps companies harmonize their communications, build deeper customer relationships, and realize the full potential of messenger marketing.
          </p>
          <p>
            Superchat is continuously evolving and growing together with companies from a wide range of industries. The vision is a platform that unites
            businesses and individuals across the entire customer journey, from the first touchpoint to payment via chat and beyond.
          </p>

          <div className="our-history-image">
            <img src="https://www.superchat.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffounders.ed44ee7c.png&w=1920&q=75" alt="Our History" />
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <p>Superchat - The name says it all</p>
            <div className="footer-social">
              <a href="#"><img src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-512.png" alt="LinkedIn" /></a>
              <a href="#"><img src="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/instagram_icon-instagram_buttoninstegram-512.png" alt="Instagram" /></a>
              <a href="#"><img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-facebook-512.png" alt="Facebook" /></a>
              <a href="#"><img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/youtube-512.png" alt="YouTube" /></a>
              <a href="#"><img src="https://cdn0.iconfinder.com/data/icons/logos-brands-7/512/TikTok_logo_app0-512.png" alt="TikTok" /></a>
            </div>
            <div className="footer-contact">
              <p><strong>Phone:</strong> +44 1224 051727</p>
              <p><strong>Email:</strong> hello@superchat.com</p>
            </div>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>Product</h4>
              <ul>
                <li><a href="#">WhatsApp Business</a></li>
                <li><a href="#">WhatsApp Newsletter</a></li>
                <li><a href="#">Automations</a></li>
                <li><a href="#">AI Chatbot</a></li>
                <li><a href="#">Integrations</a></li>
                <li><a href="#">Universal Inbox</a></li>
                <li><a href="#">Live Chat</a></li>
                <li><a href="#">Team Chat</a></li>
                <li><a href="#">Reviews</a></li>
                <li><a href="#">Mobile App</a></li>
                <li><a href="#">Desktop App</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Prices</a></li>
                <li><a href="#">Career <span className="hiring-badge">We are hiring!</span></a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Affiliate Program</a></li>
                <li><a href="#">Press</a></li>
                <li><a href="#">System Status</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Resources</h4>
              <ul>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Success Stories</a></li>
                <li><a href="#">Superchat Comparison</a></li>
                <li><a href="#">Partner Directory</a></li>
                <li><a href="#">Integrations Library</a></li>
                <li><a href="#">Free Tools</a></li>
                <li><a href="#">Free eBooks</a></li>
                <li><a href="#">Messaging Report 2023</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 SuperX GmbH &bull; <a href="#">Imprint</a> &bull; <a href="#">Data Privacy</a> &bull; <a href="#">Terms of Use</a> &bull; <a href="#">Cookie Settings</a></p>
        </div>
      </footer>
    </>
  );
};

export default AboutUs;
