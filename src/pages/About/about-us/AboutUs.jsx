import React from "react";
import "./aboutus.css";
import ABOUTUS from "../../../assets/about-us/import";

const AboutUs = () => {
  return (
    <div className="about-us-section about-us-page">
      {/* Short Introduction */}
      <div className="section intro-section">
        <div className="about-us-hero-img-section">
          <img src={ABOUTUS.img1} alt="GCMES picture" className="pics" id="ship-pic" />
        </div>
        <div className="section-text">
          <p className="about-us-title">
            Welcome to Golden Chain: Your Trusted Partner in Maritime Excellence
          </p>
          <p className="about-us-subtitle">
            At Golden Chain, we are more than just a name in the maritime and
            industrial supply industry. We are a testament to unwavering
            commitment, quality craftsmanship, and a relentless pursuit of
            excellence. Based in the picturesque landscapes of the Philippines,
            we've built our legacy on the principles of trust, innovation, and
            service.
          </p>
        </div>
        <br />
        <br />
        {/* Our Story */}
      </div>

      <div className="section story-section">
        <div className="about-us-hero-img-section">
          <img src={ABOUTUS.img2} alt="GCMES picture" className="pics" />
        </div>
        <div className="section-text">
          <p className="about-us-title about-us-page-title">
            Our Story{/* <div className="border"></div> */}
          </p>
          <p className="about-us-subtitle">
            Our journey began in 2020, with a vision to redefine the standards
            of marine and industrial solutions. Over the years, we have
            navigated through tides and storms, emerging stronger, wiser, and
            more dedicated to our mission.
          </p>
        </div>
        <br />
        <br />

        {/* Our Mission */}
      </div>

      <div className="section mission-section">
        <div className="about-us-hero-img-section">
          <img src={ABOUTUS.img3} alt="GCMES picture" className="pics" />
        </div>
        <div className="section-text">
          <p className="about-us-title about-us-page-title">
            Our Mission{/* <div className="border"></div> */}
          </p>
          <p className="about-us-subtitle">
            At Golden Chain Marine Engineering Services, our mission is to be
            the premier provider of marine and industrial supply solutions,
            delivering top-notch products and services that exceed customer
            expectations. We are committed to upholding the highest standards of
            quality, reliability, and professionalism in every aspect of our
            operations.
          </p>
        </div>
      </div>
      <br />
      <br />

      <div className="core-values-section">
        {/* Core Values */}
        <p className="about-us-title about-us-page-title">
          Core Values{/* <div className="border"></div> */}
        </p>
        <p className="about-us-subtitle core-values-subtitle">
          As a company residing in the Philippines, Golden Chain Marine embraces
          the following core values, which guide our actions, decisions, and
          interactions with stakeholders:
          <br />
          <br />
        </p>

        <div className="core-values about-us-subtitle">
          <div className="core-value">
            <span className="core-value-title">
              <i className="fa-solid fa-scale-unbalanced"></i> Integrity
            </span>
            <p className="content">
              We uphold the highest standards of honesty and ethics in all our
              dealings, fostering trust with our clients and partners.
            </p>
          </div>
          <div className="core-value">
            <span className="core-value-title">
              <i className="fa-solid fa-hand-holding-heart"></i>Excellence in
              Service
            </span>
            <p className="content">
              We are driven by a commitment to provide unparalleled service to
              our clients, ensuring their satisfaction at every touchpoint.
            </p>
          </div>
          <div className="core-value">
            <span className="core-value-title">
              <i className="fa-solid fa-medal"></i>Quality and Excellence
            </span>
            <p className="content">
              We are dedicated to providing top-notch products and services,
              consistently striving for excellence in all aspects of our
              business.
            </p>
          </div>
          <div className="core-value">
            <span className="core-value-title">
              <i className="fa-solid fa-lightbulb"></i>Innovation
            </span>
            <p className="content">
              Innovation is the engine driving our progress. We actively seek
              creative solutions to meet evolving industry challenges.
            </p>
          </div>
          <div className="core-value">
            <span className="core-value-title">
              <i className="fa-solid fa-seedling"></i>Environmental Stewardship
            </span>
            <p className="content">
              We are committed to environmentally responsible practices,
              ensuring that our operations have a minimal impact on the
              environment.
            </p>
          </div>
          <div className="core-value">
            <span className="core-value-title">
              <i className="fa-solid fa-hand-fist"></i>Employee Empowerment
            </span>
            <p className="content">
              Our employees are our greatest assets. We empower them with
              opportunities for growth, development, and contribution to our
              collective success.
            </p>
          </div>
          <div className="core-value">
            <span className="core-value-title">
              <i className="fa-solid fa-people-arrows"></i>Social Responsibility
            </span>
            <p className="content">
              We take our role in the community seriously, engaging in
              initiatives that make a positive impact on society.
            </p>
          </div>
          <div className="core-value">
            <span className="core-value-title">
              <i className="fa-solid fa-kit-medical"></i>Safety First
            </span>
            <p className="content">
              Safety is paramount. We prioritize the well-being of our employees
              and partners, adhering to the highest safety standards.
            </p>
          </div>
          <div className="core-value">
            <span className="core-value-title">
              <i className="fa-solid fa-users-rays"></i> Customer Focused
            </span>
            <p className="content">
              Our customers are at the heart of everything we do. We listen,
              understand, and anticipate their needs to deliver exceptional
              solutions and experiences.
            </p>
          </div>
          <div className="core-value">
            <span className="core-value-title">
              <i className="fa-solid fa-handshake"></i>Collaboration and
              Teamwork
            </span>
            <p className="content">
              We recognize that teamwork is key to achieving our goals. We
              foster a collaborative culture that encourages the sharing of
              ideas and expertise.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
