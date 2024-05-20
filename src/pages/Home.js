import React from 'react';
import './Home.css';
import profileImage from '../ian.jpg'; // Adjust the path as necessary

const Home = () => {
  return (
    <div className="home-container">
      <div className="main-content">
        <img src={profileImage} alt="Ian Castillo" className="profile-image" />
     
        <div className="social-icons">
          <div className="social-icon">
            <i className="fi fi-rr-envelope"></i>
          </div>
          <div className="social-icon">
            <i className="fi fi-rr-phone-call"></i>
          </div>
          <div className="social-icon">
            <i className="fi fi-brands-github"></i>
          </div>
          <div className="social-icon">
            <i className="fi fi-brands-linkedin"></i>
          </div>
          <div className="social-icon">
            <i className="fi fi-brands-twitter"></i>
          </div>
        </div>
        <h1>Hi, I'm Ian.</h1>
        <p>I'm an entrepreneur, designer, and software developer based in Iowa City, Iowa. My focus is on zero-to-one design thinking, rapid prototyping, and accelerating the Iowa start-up ecosystem.</p>
        <p>Currently, I am leading product and design at <a href="https://www.argus.ai/">ArgusAI</a>, where we are re-imagining and setting new standards for college admissions. At ArgusAI, I oversee product development and design, ensuring that our solutions not only meet but exceed the expectations of institutions and students alike. Our mission is to revolutionize the admissions process, making it more transparent, efficient, and fair. By leveraging advanced algorithms and data analytics, we aim to provide a more holistic view of applicants, helping colleges and universities make better-informed decisions.</p>
        <p>In addition to my work at ArgusAI, I am deeply committed to fostering the next generation of entrepreneurs and innovators. As an adjunct faculty member at the University of Iowa's <a href="https://tippie.uiowa.edu/people/ian-castillo">John Pappajohn Entrepreneurial Center</a>, I have the privilege of teaching and mentoring students in management and entrepreneurship. This role allows me to share my industry experience and insights, helping students develop the skills and mindset needed to succeed in the competitive world of start-ups.</p>
        <p>Previously, I was a Product Manager at <a href="https://riiid.com">Riiid Labs</a>, where I facilitated advancements in AI-driven education applications. This role allowed me to collaborate with top-tier AI researchers, engineers, and designers, driving forward projects that utilized cutting-edge technology to enhance learning outcomes. My work at Riiid Labs was instrumental in developing products that personalized education through artificial intelligence, making learning more accessible and effective for students worldwide.</p>
        <p>Outside of my professional endeavors, I am actively involved in the start-up community in Iowa. I regularly participate in local events, workshops, and mentoring programs, offering guidance and support to budding entrepreneurs. My goal is to contribute to a thriving ecosystem where innovative ideas can flourish and transform into successful ventures.</p>
        <p>My journey as an entrepreneur, designer, and software developer has been driven by a relentless pursuit of innovation and a desire to make a positive impact. I am excited about the future and look forward to continuing to push the boundaries of what is possible, both in my professional work and through my contributions to the entrepreneurial community.</p>
    <p> Have an idea? Reach out. Let's build the future together.</p>
      </div>
    </div>
  );
};

export default Home;

