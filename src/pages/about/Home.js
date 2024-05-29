import React, { useState } from 'react';
import './Home.css';
import profileImage from '../../ian.jpg';

const Home = () => {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <div className="home-container">
      <div className="main-content">
        <img src={profileImage} alt="Ian Castillo" className="profile-image" />
     
        <div className="social-icons">
          <div className="social-icon">
            <i className="fi fi-ss-marker"></i>
          </div>
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
        <div className="home-nav">
          <h1
            className={activeSection === 'about' ? 'active' : ''}
            onClick={() => setActiveSection('about')}
          >
            About
          </h1>
          <h1
            className={activeSection === 'experience' ? 'active' : ''}
            onClick={() => setActiveSection('experience')}
          >
            Experience
          </h1>
        </div>
{activeSection === 'about' && (
          <>
                    <div className="work-experience">

        <h2>Hi, I'm Ian.</h2>
        </div>
        <p>I'm an entrepreneur, designer, and software developer based in Iowa City, Iowa. My focus is on zero-to-one design thinking, rapid prototyping, and accelerating the Iowa start-up ecosystem.</p>
        <p>Currently, I am leading product and design at <a href="https://www.argus.ai/">ArgusAI</a>, where we are re-imagining and setting new standards for college admissions. At ArgusAI, I oversee product development and design, ensuring that our solutions not only meet but exceed the expectations of institutions and students alike. Our mission is to revolutionize the admissions process, making it more transparent, efficient, and fair. By leveraging advanced algorithms and data analytics, we aim to provide a more holistic view of applicants, helping colleges and universities make better-informed decisions.</p>
        <p>In addition to my work at ArgusAI, I am deeply committed to fostering the next generation of entrepreneurs and innovators. As an adjunct faculty member at the University of Iowa's <a href="https://tippie.uiowa.edu/people/ian-castillo">John Pappajohn Entrepreneurial Center</a>, I have the privilege of teaching and mentoring students in management and entrepreneurship. This role allows me to share my industry experience and insights, helping students develop the skills and mindset needed to succeed in the competitive world of start-ups.</p>
        <p>Previously, I was a Product Manager at <a href="https://riiid.com">Riiid Labs</a>, where I facilitated advancements in AI-driven education applications. This role allowed me to collaborate with top-tier AI researchers, engineers, and designers, driving forward projects that utilized cutting-edge technology to enhance learning outcomes. My work at Riiid Labs was instrumental in developing products that personalized education through artificial intelligence, making learning more accessible and effective for students worldwide.</p>
        <p>Outside of my professional endeavors, I am actively involved in the start-up community in Iowa. I regularly participate in local events, workshops, and mentoring programs, offering guidance and support to budding entrepreneurs. My goal is to contribute to a thriving ecosystem where innovative ideas can flourish and transform into successful ventures.</p>
        <p>My journey as an entrepreneur, designer, and software developer has been driven by a relentless pursuit of innovation and a desire to make a positive impact. I am excited about the future and look forward to continuing to push the boundaries of what is possible, both in my professional work and through my contributions to the entrepreneurial community.</p>
        <p>Have an idea? Reach out. Let's build the future together.</p>
        </>
        )}
        {activeSection === 'experience' && (
          <div className="work-experience">
                        <h2>Current</h2>

            <ul>
          <li>
             <span className="company">The University of Iowa, Tippie College of Business <span className="location">Hybrid</span></span>
            <span className="role">Adjunct Instructor, Management and Entrepreneurship</span>
          <span className="dates">2023 - Current</span>
            <span className="p">UI/UX Design & Marketing Consultant for BELL Incubator.</span>
           </li>
           <li>
             <span className="company">Argus.AI <span className="location">Remote</span></span>
            <span className="role">Head of Product & Design</span>
        <span className="dates">2022 - Current</span>
          <p>Re-imagining college admissions.</p>
        </li>
     </ul>
            <h2>Experience</h2>
            <ul>
            <li>
              <span className="company">Riiid <span className="location">Remote</span></span>
              <span className="role">Product Manager & Designer, Innovation</span>
             <span className="dates">2021 - 2022</span>
              <p>At Riiid I reported directly to the Chief Measurement Officer, Marten Roorda, collaborated with key internal partners, including AI research, engineering, design, and leadership teams, was instrumental in guiding project prioritization, ensuring focused and impactful product development. I was actively involved in soliciting ideas and feedback, gathering requirements, writing specifications, crafting wireframes and workflows, and coordinating cross-functionality.</p>           </li>
             <li>
              <span className="company">12 Triangles <span className="location">Remote</span></span>
              <span className="role">Product Developer</span>
             <span className="dates">2021 - 2021</span>
             <p>In collaboration with the founder, Tyler Kuster, I wrote code that focused on elevating digital tools for creatives. My responsibilities extended to creating and maintaining software documentation, including requirements, design, while actively participating in code reviews to ensure high code quality.</p>
           </li>
           <li>
             <span className="company">Nosh <span className="location">Remote</span></span>
             <span className="role">Chief Operating Officer</span>
             <span className="dates">2019 - 2020</span>
              <p>As COO, I led Nosh’s growth from our first $1.00 to a $1 MM in MRR sales. My role also encompassed effective communication with investors, C-suite executives, and partners, while successfully managing relationships with over 200 restaurants and fostering conversations between engineering and stakeholders.</p>
            </li>
            <li>
             <span className="company">textpress <span className="location">Iowa City, IA</span></span>
             <span className="role">Co-Founder, Head of Growth + Product</span>
             <span className="dates">2017 - 2019</span>
            <p>While working along side my co-founders Aleksey Gurtovoy and Alexandar Golonov at textpress, I successfully built, managed, and expanded a digital community to over 3,000 members, aligning with our product launch strategy. My role was focused in monitoring project progress to meet our deadlines and in developing a strategic feature roadmap.</p>
         </li>
            </ul>
            <div className="education">
            <h2>Education</h2>
            <ul>
           
              <span className="company">Bloomtech <span className="location">Remote</span></span>
              <span className="role">Full Stack Software Engineer</span>
             <span className="dates">2019 - 2020</span>
       
             
              <span className="company">The University of Iowa <span className="location">Iowa City, IA</span></span>
              <span className="role">Political Science, Incomplete</span>
             <span className="dates">2011 - 2013</span>
       
             <span className="company">Southeastern Community College <span className="location">Remote</span></span>
             <span className="role">Associates Degree</span>
             <span className="dates">2009 - 2013</span>
        
           
            </ul>
          </div>
          </div>
          
        )}

      
      </div>
    </div>
  );
};

export default Home;
