import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
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
import EmojiManager from '../../assets/EmojiManager.svg' 
import HoundSync from '../../assets/houndsync.svg'
import SoundWave from '../../assets/soundwave.svg'
import Mirage from '../../assets/mirage.svg'
import tmintroImage from '../../assets/tmintro.png';
import tmlogofull from '../../assets/tmlogo.svg';
import spacemono from '../../assets/spacemono.png';
import tmp from '../../assets/tmlogo.svg';
import './TimeMachine.css';
import Chapter from '../../assets/Chapter.svg'; 
import spacePirateLabs from '../../assets/SpacePirateLabs.svg';

const Home = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const location = useLocation();

  const renderLazyImage = useCallback((src, alt, className, height = 50) => (
    <img src={src} alt={alt} className={className} loading="lazy" height={height} />
  ), []);

  const renderSocialIcons = useMemo(() => (
    <div className="social-icons">
      {['email', 'github', 'linkedin', 'twitter'].map((icon) => (
        <div
          key={icon}
          className="social-icon"
          onMouseEnter={() => setHoveredIcon(icon)}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          <i className={`fi fi-${icon === 'email' ? 'rr-envelope' : `brands-${icon}`}`}></i>
        </div>
      ))}
    </div>
  ), []);

  const handleIconClick = useCallback((url) => {
    window.open(url, '_blank');
  }, []);

  const navItems = useMemo(() => [
    { id: 'about', icon: 'fi-rr-user', text: 'About' },
    { id: 'experience', icon: 'fi-rr-briefcase', text: 'Experience' },
    { id: 'prototypes', icon: 'fi-rr-cube', text: 'Prototypes' },
    { id: 'projects', icon: 'fi-rr-building', text: 'Projects' },
  ], []);

  return (
    <div className="home-container">
      <div className="main-content">
        {renderLazyImage(profileImage, "Ian Castillo", "profile-image", 200)}
        <div className="home-nav">
          <div className="nav-items">
            {navItems.map(({ id, icon, text }) => (
              <div
                key={id}
                className={`nav-item ${activeSection === id ? 'active' : 'inactive'}`}
                onClick={() => setActiveSection(id)}
              >
                <i className={`fi ${icon}`}></i>
                <span className="nav-item-text">{text}</span>
              </div>
            ))}
          </div>
        </div>
        {activeSection === 'about' && (
          <>
            <div className="work-experience">
              <h2>Hi, I'm Ian.</h2>
              <p>I'm an entrepreneur, designer, and software developer based in Iowa City, Iowa. My career interests are in zero-to-one design thinking, large language models and generative AI, and accelerating the Iowa start-up ecosystem.</p>
              <p>Currently, I'm building something in STEALH MODE.</p>
              <p>In addition to my work at STEALTH MODE, I am deeply committed to fostering the next generation of entrepreneurs and innovators. As an adjunct faculty member at the University of Iowa's <button onClick={() => window.open('https://tippie.uiowa.edu/people/ian-castillo', '_blank')} className="nav-button">John Pappajohn Entrepreneurial Center</button>, I have the privilege of teaching and mentoring students in management and entrepreneurship. This role allows me to share my industry experience and insights, helping students develop the skills and mindset needed to succeed in the competitive world of start-ups.</p>
              <p>Previously, I lead product and design as a co-founder of <button onClick={() => window.open('https://www.argus.ai/', '_blank')} className="nav-button">ArgusAI</button>, where myself, Marten Roorda (former CEO of ACT), and Michael Weiler (former CEO of EduPath) were re-imagining and setting new standards for college admissions. At ArgusAI, I led product development and design, ensuring that our solutions not only meet but exceed the expectations of institutions and students alike. ArgusAIs mission is revolutionize the admissions process, making it more transparent, efficient, and fair. By leveraging advanced algorithms and data analytics, we aim to provide a more holistic view of applicants and a more personalized experience for students.</p>
              <p>Before ArgusAI, I was a Product Manager & Designer at <button onClick={() => window.open('https://riiid.com', '_blank')} className="nav-button">Riiid Labs</button>, where I facilitated advancements in AI-driven education applications. While on the LX team, I collaborated with AI researchers, engineers, and designers, driving forward projects that utilized Machine Learning and LLMs to enhance learning outcomes. My work centered on developing digital products that personalized education through artificial intelligence, making learning more accessible and effective for students worldwide.</p>
              <p>I apperciate you reading this far and hopefully you look around at the things I'm building or have built. I'm at capacity at the moment working on my own projects, but I'm always interested in connecting with other builders/designers/developers. If thats you, let's connect and explore re-imagining the digital future.</p>
              {renderSocialIcons}
            </div>
          </>
        )}
        {activeSection === 'experience' && (
          <div className="work-experience">
            <h3>Work</h3>
            <ul className="work-list">
              <li>
                <div className="company-info">
                  {renderLazyImage(Iowa, "University of Iowa", "company-logo")}
                  <div>
                    <span className="company">
                    <a href="https://iowajpec.org/" className="company-link">The University of Iowa</a>
                      <span className="location">Hybrid</span></span>
                    <span className="role">Tippie College of Business Adjunct Instructor, Management & Entrepreneurship</span>
                    <span className="dates">2023 - Current</span>
                    <span className="about">Accelerating ideas & people in the JPEC Start-Up Incubator.</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="company-info">
                  {renderLazyImage(Argus, "Argus", "company-logo")}
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
                  {renderLazyImage(SXSW, "SXSW", "company-logo")}
                  <div>
                    <span className="company">
                    <a href="https://www.sxsw.com/" className="company-link">SXSW </a>
                    <span className="location">Remote</span></span>
                    <span className="role">Advisory Board</span>
                    <span className="dates">2023 -</span>
                    <span className="about">A renowned annual conference and festival that takes place in Austin, Texas, focusing on the convergence of the tech, film, music, and comedy industries. </span>
                  </div>
                </div>
              </li>
              <li>
                <div className="company-info">
                  {renderLazyImage(Rally, "Rally", "company-logo")}
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
            <ul>
              <li>
                <div className="company-info">
                  {renderLazyImage(Riiid, "Riiid", "company-logo")}
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
                  {renderLazyImage(Twelve, "12 Triangles", "company-logo")}
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
                  {renderLazyImage(Nosh, "Nosh", "company-logo")}
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
                  {renderLazyImage(Textpress, "Textpress", "company-logo")}
                  <div>
                    <span className="company">textpress <span className="location">Iowa City, IA</span></span>
                    <span className="role">Co-Founder, Head of Growth + Product</span>
                    <span className="dates">2017 - 2019</span>
                    <span className="about">While working along side my co-founders Aleksey Gurtovoy and Alexandar Golonov at textpress, I successfully built, managed, and expanded a digital community to over 3,000 members, aligning with our product launch strategy. My role was focused in monitoring project progress to meet our deadlines and in developing a strategic feature roadmap.</span>
                  </div>
                </div>
              </li>
            </ul>
            <h3>Community</h3>
            <ul className="advisory-list">
                <li>
                  <div className="company-info">
                    {renderLazyImage(Techstars, "Techstars", "company-logo")}
                    <div>
                      <span className="company">Techstars | Startup Weekend <span className="location">Remote</span></span>
                      <span className="role">Facilitator, Mentor, Judge</span>
                      <span className="dates">2015 - Current</span>
                      <p>Helping future entrepreneurs build start-ups in 54 hours.</p>
                    </div>
                  </div>
                </li>
              </ul>
            <h3>Education</h3>
            <ul className="work-list">
              <li>
                <div className="company-info">
                  {renderLazyImage(Bloomtech, "Bloomtech", "company-logo")}
                  <div>
                    <span className="company">Bloomtech <span className="location">Remote</span></span>
                    <span className="role">Full Stack Software Engineer</span>
                    <span className="dates">2019 - 2020</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="company-info">
                  {renderLazyImage(Iowa, "University of Iowa", "company-logo")}
                  <div>
                    <span className="company">The University of Iowa <span className="location">Iowa City, IA</span></span>
                    <span className="role">Political Science, Incomplete</span>
                    <span className="dates">2011 - 2013</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="company-info">
                  {renderLazyImage(SCC, "Southeastern Community College", "company-logo")}
                  <div>
                    <span className="company">Southeastern Community College <span className="location">Burlington, IA</span></span>
                    <span className="role">General Studies, Associates Degree</span>
                    <span className="dates">2009 - 2013</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        )}
        {activeSection === 'prototypes' && (
          <div className="work-experience">
            <h3>Prototypes</h3>
            <p>This space is where I track and showcase the prototypes I've built, a kind of a digital workshop for my ideas. I try and keep these limited to weekend sprints and get them to an Alpha stage before my attention turns to other projects. The prototypes here are less about becomingpolished products for mass use and more about my own experimentation—trying out new tools, testing concepts, and scratching the itch of an idea without the weight of turning it into a full company. It's a playground where I get to solve immediate problems I'm experiencing or explore ideas that don't yet need to grow into something larger—at least, not yet. </p>
            <ul className="work-list">
              
              <li>
                <div className="company-info">
                  {renderLazyImage(Chapter, "Chapter", "company-logo")}
                  <div>
                    <span className="company">
                      <a href="#" className="company-link">Chapter</a>
                      <span className="stack">In-Progress</span>
                    </span>
                    <span className="role">NOV-Anticipated</span>
                    <span className="dates">2024</span>
                    <span className="about">A mobile app for book lovers to bookmark, track, and discover personalized recommendations.</span>
                  </div>
                </div>
              </li>
              
              <li>
                <div className="company-info">
                  {renderLazyImage(SoundWave, "SoundWave", "company-logo")}
                  <div>
                    <span className="company">
                      <a href="" className="company-link">SoundWave</a>
                      <span className="stack">Alpha</span>
                    </span>
                    <span className="role">SEPT</span>
                    <span className="dates">2024</span>
                    <span className="about">Transcript & summary assistant for Youtube videos.</span>
                  </div>
                </div>
              </li>
              <li>
              <div className="company-info">
                  {renderLazyImage(HoundSync, "HoundSync", "company-logo")}
                  <div>
                    <span className="company">
                      <a href="https://houndsync.vercel.app/" className="company-link">HoundSync</a>
                      <span className="stack">Alpha</span>
                    </span>
                    <span className="role">AUG</span>
                    <span className="dates">2024</span>
                    <span className="about">An application for parsing invoices to streamline data entry.</span>
                  </div>
                </div>
              </li>
              <li>
              <div className="company-info">
                  {renderLazyImage(Mirage, "Mirage", "company-logo")}
                  <div>
                    <span className="company">
                      <a href="" className="company-link">Mirage</a>
                      <span className="stack">Beta</span>
                    </span>
                    <span className="role">AUG</span>
                    <span className="dates">2024</span>
                    <span className="about">A tool for removing backgrounds from images.</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="company-info">
                  {renderLazyImage(EmojiManager, "Emoji Manager", "company-logo")}
                  <div>
                    <span className="company">
                      <a href="https://emojimanager.com" className="company-link">Emoji Manager</a>
                      <span className="stack">v1.0</span>
                    </span>
                    <span className="role">JULY</span>
                    <span className="dates">2024</span>
                    <span className="about">A web app for searching emojis.</span>
                  </div>
                </div>
                
              </li>
            </ul>
          </div>
        )}
        {activeSection === 'projects' && (
          <div className="work-experience">
            <h3>Projects</h3>
            <p>This section showcases the projects I've been working on or have launched. These are more developed ideas that have grown beyond the prototype stage and are either in active development or have been released.</p>
            <ul className="work-list">
            
              <li>
                <div className="company-info">
                  {renderLazyImage(tmlogofull, "Time Machine Print", "company-logo")}
                  <div>
                    <span className="company">
                      <a href="https://timemachineprint.com" className="company-link">Time Machine Print</a>
                      <span className="stack">Active</span>
                    </span>
                    <span className="role">Curation & Creativity</span>
                    <span className="dates">2024 - Present</span>
                    <span className="about">A neural network for creatives and creators. Time Machine Print is a bookstore and cultural hub celebrating deep thinkers, dreamers, and outliers shaping our creative future.</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="company-info">
                  {renderLazyImage(spacePirateLabs, "Space Pirate Labs", "company-logo")}
                  <div>
                    <span className="company">
                      <a href="https://spacepiratelabs.com" className="company-link">Space Pirate Labs</a>
                      <span className="stack">Active</span>
                    </span>
                    <span className="role">Consulting & Design</span>
                    <span className="dates">2021 - Present</span>
                    <span className="about">An experimental lab focused on pushing the boundaries of technology and creativity.</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default React.memo(Home);
