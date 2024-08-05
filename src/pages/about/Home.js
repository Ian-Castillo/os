import React, { useState } from 'react';
import './Home.css';
import profileImage from '../../ian.jpg';
import Iowa from '../../assets/Gold.png';
import Argus from '../../assets/ArgusAI.png'; 
import Riiid from '../../assets/Riiid.jpeg'; 
import Twelve from '../../assets/Twelve.jpeg'; 
import Nosh from '../../assets/Nosh.jpeg'; 
import Bloomtech from '../../assets/BloomTech.jpeg'; 
import Textpress from '../../assets/Textpress.jpeg'; 
import SCC from '../../assets/SCC.jpeg'; 
import Techstars from '../../assets/techstars.png'; 
import SXSW from '../../assets/sxsw.png';
import Rally from '../../assets/rally.png';
import RaidGuild from '../../assets/RaidGuild.jpg'

const Home = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [hoveredIcon, setHoveredIcon] = useState(null);

  return (
    <div className="home-container">
      <div className="main-content">
        <img src={profileImage} alt="Ian Castillo" className="profile-image" />
        <div className="home-nav">
          <div className="nav-items">
            <div
              className={`nav-item ${activeSection === 'about' ? 'active' : 'inactive'}`}
              onClick={() => setActiveSection('about')}
            >
              <i className="fi fi-rr-user"></i>
              <span className="nav-item-text">About</span>
            </div>
            <div
              className={`nav-item ${activeSection === 'experience' ? 'active' : 'inactive'}`}
              onClick={() => setActiveSection('experience')}
            >
              <i className="fi fi-rr-briefcase"></i>
              <span className="nav-item-text">Experience</span>
            </div>
          </div>
          <div className="social-icons">
            <div
              className="social-icon"
              onMouseEnter={() => setHoveredIcon('email')}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <i className="fi fi-rr-envelope"></i>
            </div>
            <div
              className="social-icon"
              onMouseEnter={() => setHoveredIcon('github')}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <i className="fi fi-brands-github"></i>
            </div>
            <div
              className="social-icon"
              onMouseEnter={() => setHoveredIcon('linkedin')}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <i className="fi fi-brands-linkedin"></i>
            </div>
            <div
              className="social-icon"
              onMouseEnter={() => setHoveredIcon('twitter')}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <i className="fi fi-brands-twitter"></i>
            </div>
          </div>
        </div>
        {activeSection === 'about' && (
          <>
            <div className="work-experience">
              <h2>Hi, I'm Ian.</h2>
      
            <p>I'm an entrepreneur, designer, and software developer based in Iowa City, Iowa. My career focus is on zero-to-one design thinking, rapid prototyping, and accelerating the Iowa start-up ecosystem.</p>
            <p>Currently, I am leading product and design at <a href="https://www.argus.ai/">ArgusAI</a>, where myself, Marten Roorda, and Michael Weiler are re-imagining and setting new standards for college admissions. At ArgusAI, I oversee product development and design, ensuring that our solutions not only meet but exceed the expectations of institutions and students alike. Our mission is to revolutionize the admissions process, making it more transparent, efficient, and fair. By leveraging advanced algorithms and data analytics, we aim to provide a more holistic view of applicants, helping colleges and universities make better-informed decisions.</p>
            <p>In addition to my work at ArgusAI, I am deeply committed to fostering the next generation of entrepreneurs and innovators. As an adjunct faculty member at the University of Iowa's <a href="https://tippie.uiowa.edu/people/ian-castillo">John Pappajohn Entrepreneurial Center</a>, I have the privilege of teaching and mentoring students in management and entrepreneurship. This role allows me to share my industry experience and insights, helping students develop the skills and mindset needed to succeed in the competitive world of start-ups.</p>
            <p>Previously, I was a Product Manager at <a href="https://riiid.com">Riiid Labs</a>, where I facilitated advancements in AI-driven education applications. This role allowed me to collaborate with top-tier AI researchers, engineers, and designers, driving forward projects that utilized cutting-edge technology to enhance learning outcomes. My work at Riiid Labs was instrumental in developing products that personalized education through artificial intelligence, making learning more accessible and effective for students worldwide.</p>
            <p>Outside of my professional endeavors, I am actively involved in the start-up community in Iowa. I regularly participate in local events, workshops, and mentoring programs, offering guidance and support to budding entrepreneurs. My goal is to contribute to a thriving ecosystem where innovative ideas can flourish and transform into successful ventures.</p>
            <p>My journey as an entrepreneur, designer, and software developer has been driven by a relentless pursuit of turning ideas into tangible experiences. I am excited about the future and look forward to continuing to push the boundaries of what is possible, both in my professional work and through my contributions to the entrepreneurial community.</p>
            <p>Interested in building the future? Let's connect and see what we can re-imagine together.</p>
            </div>
          </>
        )}
        {activeSection === 'experience' && (
          <div className="work-experience">
            
            <h3>Work</h3>
            <ul className="work-list">
              <li>
                <div className="company-info">
                  <img src={Iowa} alt="University of Iowa" className="company-logo" />
                  <div>
                    <span className="company">
                    <a href="https://iowajpec.org/" className="company-link">The University of Iowa, Tippie College of Business</a>

                      <span className="location">Hybrid</span></span>
                    <span className="role">Adjunct Instructor, Management & Entrepreneurship</span>
                    <span className="dates">2023 - Current</span>
                    <span className="about">Accelerating ideas & people in the JPEC Start-Up Incubator.</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="company-info">
                  <img src={Argus} alt="Argus" className="company-logo" />
                  <div>
                    <span className="company">
                    <a href="https://www.argus.ai" className="company-link">Argus.AI</a>
                    <span className="location">Remote</span>
                    </span>
                    <span className="role">Head of Product & Design</span>
                    <span className="dates">2022 - Current</span>
                    <span className="about">Re-imagining college admissions.</span>
                  </div>
                </div>
              </li>
            </ul>
            <h3>Advisory</h3>
            <ul className="advisory-list">
              <li>
                <div className="company-info">
                  <img src={SXSW} alt="SXSW" className="company-logo" />
                  <div>
                    <span className="company">
                    <a href="https://www.sxsw.com/" className="company-link">SXSW</a>

                    <span className="location">Remote</span></span>
                    <span className="role">Advisory Board</span>
                    <span className="dates">2023 -</span>
                    <span className="about">A renowned annual conference and festival that takes place in Austin, Texas, focusing on the convergence of the tech, film, music, and comedy industries. </span>
                  </div>
                </div>
              </li>
              <li>
                <div className="company-info">
                  <img src={Rally} alt="Rally" className="company-logo" />
                  <div>
                    <span className="company">
                    <a href="https://rallyinnovation.com/" className="company-link">Rally</a>
                    <span className="location">Remote</span></span>
                    <span className="role">Advisory Board</span>
                    <span className="dates">2023 -</span>
                    <span className="about">A global cross-sector innovation conference featuring 200+ speakers, Rally IN-prize pitch competition, and 6 innovation tracks.</span>
                  </div>
                </div>
              </li>
            </ul>
            <h3>Experience</h3>
            <div className="community-column">
              <h2>Community</h2>
              <ul>
                <li>
                  <div className="company-info">
                    <img src={Techstars} alt="Techstars" className="company-logo" />
                    <div>
                      <span className="company">Techstars | Startup Weekend <span className="location">Remote</span></span>
                      <span className="role">Facilitator, Mentor, Judge</span>
                      <span className="dates">2015 - Current</span>
                      <p>Helping future entrepreneurs build start-ups in 54 hours.</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="company-info">
                    <img src={RaidGuild} alt="RaidGuild" className="company-logo" />
                    <div>
                      <span className="company">RaidGuild<span className="location">Remote</span></span>
                      <span className="role">Designer</span>
                      <span className="dates">2044 - Current</span>
                      <p>Designing open source tooling and public goods for the web3 community.</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <ul>
              <li>
                <div className="company-info">
                  <img src={Riiid} alt="Riiid" className="company-logo" />
                  <div>
                    <span className="company">
                    <a href="https://riiid.com/" className="company-link">Riiid</a>
                      <span className="location">Remote</span></span>
                    <span className="role">Product Manager & Designer, Innovation</span>
                    <span className="dates">2021 - 2022</span>
                    <span className="about">At Riiid I reported directly to the Chief Measurement Officer, Marten Roorda, collaborated with key internal partners, including AI research, engineering, design, and leadership teams, was instrumental in guiding project prioritization, ensuring focused and impactful product development. I was actively involved in soliciting ideas and feedback, gathering requirements, writing specifications, crafting wireframes and workflows, and coordinating cross-functionality.</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="company-info">
                  <img src={Twelve} alt="12 Triangles" className="company-logo" />
                  <div>
                    <span className="company">
                    <a href="https://12triangles.com/" className="company-link">12 Triangles </a>
                      <span className="location">Remote</span></span>
                    <span className="role">Product Developer</span>
                    <span className="dates">2021 - 2021</span>
                    <span className="about">At 12 Triangles, I wrote code that focused on elevating digital tools for creatives. My responsibilities extended to creating and maintaining software documentation, including requirements, design, while actively participating in code reviews to ensure high code quality.</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="company-info">
                  <img src={Nosh} alt="Nosh" className="company-logo" />
                  <div>
                    <span className="company"> 
                    <a href="https://noshdelivery.co/" className="company-link">Nosh </a>
                      <span className="location">Remote</span></span>
                    <span className="role">Chief Operating Officer</span>
                    <span className="dates">2019 - 2020</span>
                    <span className="about">As COO, I led Nosh's growth from our first $1.00 to a $1 MM in MRR sales. My role also encompassed effective communication with investors, C-suite executives, and partners, while successfully managing relationships with over 200 restaurants and fostering conversations between engineering and stakeholders.</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="company-info">
                  <img src={Textpress} alt="Textpress" className="company-logo" />
                  <div>
                    <span className="company">textpress <span className="location">Iowa City, IA</span></span>
                    <span className="role">Co-Founder, Head of Growth + Product</span>
                    <span className="dates">2017 - 2019</span>
                    <span className="about">While working along side my co-founders Aleksey Gurtovoy and Alexandar Golonov at textpress, I successfully built, managed, and expanded a digital community to over 3,000 members, aligning with our product launch strategy. My role was focused in monitoring project progress to meet our deadlines and in developing a strategic feature roadmap.</span>
                  </div>
                </div>
              </li>
            </ul>
            <div className="bottom-section">
            <div className="education-column">
              <h2>Education</h2>
              <ul>
                <li>
                  <div className="company-info">
                    <img src={Bloomtech} alt="Bloomtech" className="company-logo" />
                    <div>
                      <span className="company">Bloomtech <span className="location">Remote</span></span>
                      <span className="role">Full Stack Software Engineer</span>
                      <span className="dates">2019 - 2020</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="company-info">
                    <img src={Iowa} alt="University of Iowa" className="company-logo" />
                    <div>
                      <span className="company">The University of Iowa <span className="location">Iowa City, IA</span></span>
                      <span className="role">Political Science, Incomplete</span>
                      <span className="dates">2011 - 2013</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="company-info">
                    <img src={SCC} alt="Southeastern Community College" className="company-logo" />
                    <div>
                      <span className="company">Southeastern Community College <span className="location">Burlington, IA</span></span>
                      <span className="role">General Studies, Associates Degree</span>
                      <span className="dates">2009 - 2013</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          
          </div>
        </div>
      )}
    </div>
    </div>

  );
};

export default Home;