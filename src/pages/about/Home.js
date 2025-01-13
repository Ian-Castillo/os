import React, { useState, useCallback, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import './Home.css';
import './TimeMachine.css';
import profileImage from '../../ian.jpg';
//Work Images
import Argus from '../../assets/ArgusAI.png'; 
import Riiid from '../../assets/Riiid.jpeg'; 
import Twelve from '../../assets/Twelve.jpeg'; 
import Nosh from '../../assets/Nosh.jpeg'; 
import Textpress from '../../assets/Textpress.jpeg'; 
//Advisory Images
import SXSW from '../../assets/sxsw.png';
import Rally from '../../assets/rally.png';
//Projects Images
import Chapter from '../../assets/Chapter.png'; 
import SoundWave from '../../assets/Soundwave.png'
import Mirage from '../../assets/Mirage.png'
import EmojiManager from '../../assets/EmojiManager.png' 
import Breadcrumb from '../../assets/newbreadcrumblogo.png'
import tmlogofull from '../../assets/newtmlogo.png';
import spacePirateLabs from '../../assets/SpacePirateLabs.svg';
import sunnyWeather from '../../assets/newsunnylogo.svg';
//Community Images
import Techstars from '../../assets/techstars.png';
//Education Images
import Bloomtech from '../../assets/BloomTech.jpeg'; 
import Iowa from '../../assets/Gold.png';
import SCC from '../../assets/scc.png'; 
import deviowa from '../../assets/deviowa.png';
//UI/UX Images
import argusHero from '../../assets/argus.png';
import nounsImage from '../../assets/Nouns.png';
import overtureImage from '../../assets/Overture.png';
import projectEImage from '../../assets/ProjectE.png';
import statusImage from '../../assets/Status.png';
import summitImage from '../../assets/Summit.png';
// import houndsyncImage from '../../assets/Houndsync.png';
import updexImage from '../../assets/Updex.png';
import walkthroughImage from '../../assets/Walkthrough.png';

const BlurImage = ({ src, alt, className, height }) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <img
      src={src}
      alt={alt}
      className={`${className} ${isLoading ? 'blur-up' : ''}`}
      height={height}
      width={height}
      decoding="async"
      loading="lazy"
      onLoad={() => setLoading(false)}
    />
  );
};

const Home = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const location = useLocation();

  const handleIconClick = useCallback((url) => {
    window.open(url, '_blank');
  }, []);

  const renderLazyImage = useCallback((src, alt, className, height = 50) => (
    <img 
      src={src} 
      alt={alt} 
      className={className} 
      loading="lazy" 
      height={height}
      width={height}
      decoding="async"
      style={{
        ...alt === "University of Iowa" || alt === "deviowa" || alt === "Southeastern Community College"
          ? { backgroundColor: 'black', padding: '2px' }
          : alt === "12 Triangles"
            ? { border: '1px solid black', padding: '1px' }
            : {},
        objectFit: 'contain'
      }}
    />
  ), []);

  const iconUrls = {
    linkedin: 'https://www.linkedin.com/in/iancastillo/',
    github: 'https://github.com/Ian-Castillo',
    twitter: 'https://x.com/imcsays',
    email: 'mailto:ian@spacepiratelabs.com'
  };

  const renderSocialIcons = useMemo(() => (
    <div className="social-icons">
      {['email', 'github', 'linkedin', 'twitter'].map((icon) => (
        <div
          key={icon}
          className="social-icon"
          onClick={() => handleIconClick(iconUrls[icon])}
        />
      ))}
    </div>
  ), [handleIconClick]);

  const navItems = useMemo(() => [
    { id: 'about', icon: 'fi-rr-user', text: 'About Ian' },
    // { id: 'thinking', icon: '', text: 'Design Thinking', svg: true },
    { id: 'experience', icon: 'fi-rr-briefcase', text: 'Experience' },
    { id: 'uiux', icon: 'fi-rr-layout-fluid', text: 'UI/UX Designs' },
    { id: 'projects', icon: 'fi-rr-cube', text: 'Projects' },
  ], []);

  return (
    <div className="home-container">
      <div className="main-content">
        {renderLazyImage(profileImage, "Ian Castillo", "profile-image", 1200)}
        <div className="home-nav">
          <div className="nav-items">
            {navItems.map(({ id, icon, text, svg }) => (
              <div
                key={id}
                className={`nav-item ${activeSection === id ? 'active' : 'inactive'}`}
                onClick={() => setActiveSection(id)}
              >
                {svg ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-lightbulb"
                  >
                    <path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-7 7c0 3.87 3.13 7 7 7s7-3.13 7-7a7 7 0 0 0-7-7z"></path>
                  </svg>
                ) : (
                  <i className={`fi ${icon}`}></i>
                )}
                <span className="nav-item-text">{text}</span>
              </div>
            ))}
          </div>
        </div>
        {activeSection === 'about' && (
          <>
            <div className="work-experience">
              <h4 className="subheading">Product | AI | Design</h4>
              <h3>Hi, I'm Ian!</h3>
              <p>I'm a product manager focused on turning ambitious ideas into scalable, real-world solutions. I work at the intersection of AI and product, where the challenge isn't just building something groundbreaking but ensuring it works seamlessly. With experience navigating complex systems and cross-functional teams, I'm driven to create platforms that are not only powerful but also intuitive, efficient, and built to last.</p>
              <p>Currently, I lead product and design as a co-founder of <button onClick={() => window.open('https://www.argus.ai/', '_blank')} className="nav-button">ArgusAI</button>, where myself, Marten Roorda (former CEO of ACT), and Michael Weiler (former CEO of EduPath) are re-imagining and setting new standards for college admissions. At ArgusAI, I led product development and design, ensuring that our AI enabled platform not only meet but exceed the expectations of institutions and students alike. ArgusAI's mission is revolutionize the admissions process, making it more transparent, efficient, and fair. By leveraging advanced algorithms and data analytics, we aim to provide a more holistic view of applicants and a more personalized experience for students.</p>
              <p>In addition to my work at ArgusAI, I am deeply committed to fostering the next generation of entrepreneurs and innovators. As an adjunct faculty member at the University of Iowa's <button onClick={() => window.open('https://tippie.uiowa.edu/people/ian-castillo', '_blank')} className="nav-button">John Pappajohn Entrepreneurial Center</button>, I have the privilege of teaching and mentoring students in management and entrepreneurship. This role allows me to share my industry experience and insights, helping students develop the skills and mindset needed to succeed in the competitive world of start-ups.</p>
              <p>Before ArgusAI, I was a Product Manager & Designer at <button onClick={() => window.open('https://riiid.com', '_blank')} className="nav-button">Riiid Labs</button>, where I facilitated advancements in AI-driven education applications. While on the LX team, I collaborated with AI researchers, engineers, and designers, driving forward projects that utilized Machine Learning and LLMs to enhance learning outcomes. My work centered on developing digital products that personalized education through artificial intelligence, making learning more accessible and effective for students worldwide.</p>
              <p>I'm always interested in expanding my network! If you're still reading, let's connect and maybe we can re-imagine the future!</p>
            </div>
          </>
        )}
        {activeSection === 'thinking' && (
          <div className="work-experience design-thinking-section">
            <h3>Design Thinking</h3>
            <p>
              In the ever-evolving landscape of technology and design, there lies an extraordinary opportunity to rethink how we build,
              connect, and create. Design, at its best, is not about decoration or mere utility—it's about clarity, purpose, and the
              pursuit of something that feels inevitable once it exists. It's the quiet, invisible force that shapes our understanding
              of the world, transforms how we engage with it, and inspires us to imagine what's possible.
            </p>
            <p>
              I've always believed that the most compelling stories are written at the intersection of innovation and human potential.
              My work is an exploration of this intersection—a pursuit to distill complex ideas into intuitive, human-centered experiences
              that resonate far beyond the digital frontier. To me, design is more than problem-solving; it's about creating environments
              where people feel empowered, seen, and deeply connected to the things they value most.
            </p>
            <p>
              We live in a time defined by transformative technologies like artificial intelligence, generative tools, and increasingly
              intricate systems. But as these innovations grow in complexity, I see design as the essential bridge that connects technology
              to humanity. It's the craft of taking what could be overwhelming or opaque and making it simple, approachable, and even delightful.
              It's about finding an elegance in both form and function—achieving not just efficiency but meaning.
            </p>
            <p>
              When I think about design, I think about intention. Every decision, no matter how small, is a chance to refine, improve, and
              elevate. It's a discipline rooted in empathy and imagination, but it also demands a relentless focus—a commitment to stripping
              away the unnecessary and honing what remains until it feels just right. This pursuit of clarity is not an endpoint but an ethos,
              one that informs everything I create, from the digital products I build to the experiences I shape for others.
            </p>
            <p>
              Human potential is central to this process. As a designer, entrepreneur, and educator, my goal is not just to create better
              tools but to amplify the creativity, resilience, and ingenuity of others. Whether I'm building platforms that empower users,
              mentoring students to turn ideas into action, or collaborating with teams to explore uncharted possibilities, I see design as
              a medium for transformation—a way to craft systems that work in harmony with people rather than dictating to them.
            </p>
            <p>
              I've come to understand that the most impactful work is rarely the loudest or most complex. It's the quiet details, the moments
              of delight, and the clarity of purpose that resonate. Whether reimagining how we learn, collaborate, or connect, I am driven
              by a commitment to build with intention, simplicity, and a sense of wonder for what's possible. For me, every product, every
              project, and every prototype is a story—a reflection of our collective potential to create something extraordinary.
            </p>
          </div>
        )}
        {activeSection === 'experience' && (
          <div className="work-experience">
            <h3>Work</h3>
            <ul className="work-list">
            <li>
                <div className="company-info">
                  {renderLazyImage(Argus, "Argus", "company-logo")}
                  <div>
                    <span className="company">
                    <a href="https://www.argus.ai" className="company-link">Argus.AI</a>
                    <span className="location">Remote</span>
                    </span>
                    <span className="role">Head of Product & Design</span>
                    <span className="dates">2022 - </span>
                    <span className="about">Re-imagining college admissions.</span>
                  </div>
                </div>
              </li>
            {/* <li>
                <div className="company-info">
                  {renderLazyImage(spacePirateLabs, "Space Pirate Labs", "company-logo")}
                  <div>
                    <span className="company">
                      <a href="https://spacepiratelabs.com" className="company-link">Space Pirate Labs</a>
                      <span className="stack">Remote</span>
                    </span>
                    <span className="role">Founder, CEO</span>
                    <span className="dates">2021 - </span>
                    <span className="about">A design & consulting agency shaping forward-thinking ideas.</span>
                  </div>
                </div>
              </li> */}
              <li>
                <div className="company-info">
                  {renderLazyImage(Iowa, "University of Iowa", "company-logo")}
                  <div>
                    <span className="company">
                    <a href="https://iowajpec.org/" className="company-link">U of I Tippie College of Business</a>
                      <span className="location">Hybrid</span></span>
                    <span className="role">Adjunct Instructor, Management & Entrepreneurship</span>
                    <span className="dates">2023 - </span>
                    <span className="about">Accelerating ideas & people in the JPEC Start-Up Incubator.</span>
                  </div>
                </div>
              </li>
             
            </ul>
            <h3>Advisory</h3>
            <ul className="work-list">
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
       
            <h3>Education</h3>
            <h4>Developer Programs</h4>

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
      {renderLazyImage(deviowa, "deviowa", "company-logo")}
      <div>
        <span className="company">Dev/Iowa <span className="location">Iowa City, IA
        </span></span>
        <span className="role">Full Stack Software Engineer</span>
        <span className="dates">2015</span>
      </div>
    </div>
  </li>
</ul>
            <h4>Academic Studies</h4>

              <ul className="work-list">

              <li>

                <div className="company-info">
                  {renderLazyImage(Iowa, "University of Iowa", "company-logo")}
                  <div>
                    <span className="company">The University of Iowa <span className="location">Iowa City, IA</span></span>
                    <span className="role">Political Science (Paused)</span>
                    <span className="dates">2011 - 2013</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="company-info">
                  {renderLazyImage(SCC, "Southeastern Community College", "company-logo")}
                  <div>
                    <span className="company">Southeastern Community College <span className="location">Burlington, IA</span></span>
                    <span className="role">General Studies (Associates Degree)</span>
                    <span className="dates">2009 - 2011</span>
                  </div>
                </div>
              </li>
            </ul>
            <h3>Community</h3>
            <ul className="work-list">
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
          </div>
        )}
        {activeSection === 'prototypes' && (
          <div className="work-experience">
         
          </div>
        )}
        {activeSection === 'projects' && (
  <div className="work-experience">
    <h3>Projects</h3>
    <p>This small section is my digital workshop—a very unpolished corner where I dive into weekend sprints and build solutions to my own specific problems. </p>
     
    <ul className="work-list">
      <li>
                <div className="company-info">
                  {renderLazyImage(Breadcrumb, "breadcrumb", "company-logo")}
                  <div>
                    <span className="company">
                    <span className="green-dot"></span>

                      <a href="https://withbreadcrumb.com" className="company-link">Breadcrumb</a>
                      <span className="stack">Active</span>
                    </span>
                    {/* <span className="role">NOV</span>
                    <span className="dates">2024</span> */}
                    <span className="about">A productivity and changelog tool.</span>
                  </div>
                </div>
          </li>
   
      <li>
        <div className="company-info">
          {renderLazyImage(tmlogofull, "Time Machine Print", "company-logo")}
          <div>
            
            <span className="company">
            <span className="grey-dot"></span>

              <a href="https://timemachineprint.com" className="company-link">
                Time Machine Print
              </a>
              
              <span className="stack">Paused</span>
            </span>
            {/* <span className="role">Curation & Creativity</span>
            <span className="dates">2024 - Present</span> */}
            <span className="about">
               Online  
              bookstore celebrating thinkers, dreamers,
              & outliers. 
            </span>
          </div>
        </div>
      </li>
      <li>
        <div className="company-info">
          {renderLazyImage(sunnyWeather, "Sunny Weather", "company-logo")}
          <div>
            <span className="company">
            <span className="green-dot"></span>

              <a href="https://sunnyweather.co" className="company-link">Sunny Weather</a>
              <span className="stack">Active</span>
            </span>
            {/* <span className="role">AI & Weather</span>
            <span className="dates">2024 - Present</span> */}
            <span className="about">
              AI-powered weather app providing personalized weather forecasts.
            </span>
          </div>
        </div>
      </li>
  
              <li>
                <div className="company-info">
                  {renderLazyImage(Chapter, "Chapter", "company-logo")}
                  <div>
                    <span className="company">
                    <span className="black-dot"></span>

                      <a href="https://www.timemachineprint.com/chapter-app-ios-and-android" className="company-link">Chapter</a>
                      <span className="stack">Archived</span>
                    </span>
                    {/* <span className="role">DEC-Anticipated</span> */}
                    {/* <span className="dates">2024</span> */}
                    <span className="about">Bookmark, track, and discover book recommendations.</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="company-info">
                  {renderLazyImage(EmojiManager, "Emoji Manager", "company-logo")}
                  <div>
                    <span className="company">
                    <span className="green-dot"></span>

                      <a href="https://emojimanager.com" className="company-link">Emoji Manager</a>
                      <span className="stack">Active</span>
                    </span>
                    {/* <span className="role">JULY</span>
                    <span className="dates">2024</span> */}
                    <span className="about">A web app for searching emojis.</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="company-info">
                  {renderLazyImage(SoundWave, "SoundWave", "company-logo")}
                  <div>
                    <span className="company">
                    <span className="black-dot"></span>
                      <a href="" className="company-link">SoundWave</a>
                      <span className="stack">Archived</span>
                    </span>
                    {/* <span className="role">SEPT</span> */}
                    {/* <span className="dates">2024</span> */}
                    <span className="about">Transcript & summary assistant for Youtube videos.</span>
                  </div>
                </div>
              </li>
              <li>
              <div className="company-info">
                  {renderLazyImage(Mirage, "Mirage", "company-logo")}
                  <div>
                    <span className="company">
                    <span className="black-dot"></span>
                      <a href="" className="company-link">Mirage</a>
                      <span className="stack">Archived</span>
                    </span>
                    {/* <span className="role">AUG</span> */}
                    {/* <span className="dates">2024</span> */}
                    <span className="about">A tool for removing backgrounds from images.</span>
                  </div>
                </div>
              </li>
     
          
                 {/* Add more “projects” as desired */}
    </ul>
  </div>
  
)}
        {activeSection === 'uiux' && (
          <div className="work-experience">
            <h3>UI/UX Designs</h3>
            <p>A collection of user interfaces I've designed. Spanning from AI and Web3, to productivity tools.</p>
            
            <ul className="uiux-list">
            <li className="uiux-item">
                {renderLazyImage(projectEImage, "Project E Design", "uiux-image")}
                <div className="uiux-content">
                  <span className="company">
                    Project E
                    <span className="stack">WEB3 • Education</span>
                  </span>
                  <span className="about">Blockchain for academic transcripts.</span>
                </div>
              </li>

              <li className="uiux-item">
                {renderLazyImage(walkthroughImage, "Walkthrough Design", "uiux-image")}
                <div className="uiux-content">
                  <span className="company">
                    Walkthrough
                    <span className="stack">Education • Software</span>
                  </span>
                  <span className="about">A tool for creating interactive walkthroughs and guides for digital cameras.</span>
                </div>
              </li>

              <li className="uiux-item">
                {renderLazyImage(argusHero, "Argus Design", "uiux-image")}
                <div className="uiux-content">
                  <span className="company">
                    Argus
                    <span className="stack">AI • Education</span>
                  </span>
                  <span className="about">AI-powered education platform.</span>
                </div>
              </li>

              <li className="uiux-item">
                {renderLazyImage(nounsImage, "Nouns Design", "uiux-image")}
                <div className="uiux-content">
                  <span className="company">
                    Nouns
                    <span className="stack">WEB3 • DAO</span>
                  </span>
                  <span className="about">An escrow tool proposed to the Nouns DAO.</span>
                </div>
              </li>

              <li className="uiux-item">
                {renderLazyImage(overtureImage, "Overture Design", "uiux-image")}
                <div className="uiux-content">
                  <span className="company">
                    Overture
                    <span className="stack">AI • Music</span>
                  </span>
                  <span className="about">An AI-powered time and mood based music platform.</span>
                </div>
              </li>

              <li className="uiux-item">
                {renderLazyImage(summitImage, "Summit Design", "uiux-image")}
                <div className="uiux-content">
                  <span className="company">
                    Summit
                    <span className="stack">WEB3 • Platform</span>
                  </span>
                  <span className="about">A comprehensive platform for consuming web3 media.</span>
                </div>
              </li>

              <li className="uiux-item">
                {renderLazyImage(statusImage, "Status Design", "uiux-image")}
                <div className="uiux-content">
                  <span className="company">
                    Status
                    <span className="stack">Productivity • Management</span>
                  </span>
                  <span className="about">A streamlined system for tracking and updating project statuses.</span>
                </div>
              </li>

              <li className="uiux-item">
                {renderLazyImage(updexImage, "Updex Design", "uiux-image")}
                <div className="uiux-content">
                  <span className="company">
                    Updex
                    <span className="stack">Productivity • Organization</span>
                  </span>
                  <span className="about">A wireframe design for a system for efficiently indexing and tracking updates across multiple projects.</span>
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
