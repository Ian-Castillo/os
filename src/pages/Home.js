import React from 'react';
import './Home.css'; // Make sure to link the CSS file
import profileImage from '../ian.jpg'; // Adjust the path as necessary

const Home = () => {
  return (
    <div className="home-container">
      <div className="content">
        <img src={profileImage} alt="Ian Castillo" className="profile-image" />
        <h1>Hi, I'm Ian.</h1>
        <p>I'm an entrepreneur, designer, and software developer based in Iowa City, Iowa. My professional focus is on zero-to-one design thinking, rapid prototyping, and accelerating the Iowa start-up ecosystem. Throughout my career, I have been passionate about creating innovative solutions and pushing the boundaries of technology to improve everyday experiences.</p>
        <p>During my tenure at <a href="https://riiid.com">Riiid Labs</a>, I spearheaded advancements in AI-driven education applications. This role allowed me to collaborate with top-tier AI researchers, engineers, and designers, driving forward projects that leveraged machine learning models to enhance learning outcomes. My work at Riiid Labs was instrumental in developing products that personalized education through artificial intelligence, making learning more accessible and effective for students worldwide.</p>
        <p>Currently, I am leading product development and design at <a href="https://www.argus.ai/">ArgusAI</a>, where we are setting new standards for college admissions with innovative technology. At ArgusAI, I oversee product development and design, ensuring that our solutions not only meet but exceed the expectations of institutions and students alike. Our mission is to revolutionize the admissions process, making it more transparent, efficient, and fair. By leveraging advanced algorithms and data analytics, we aim to provide a more holistic view of applicants, helping colleges and universities make better-informed decisions.</p>
        <p>In addition to my work at ArgusAI, I am deeply committed to fostering the next generation of entrepreneurs and innovators. As an adjunct faculty member at the University of Iowa's John Pappajohn Entrepreneurial Center (@iowajpec), I have the privilege of teaching and mentoring students in management and entrepreneurship. This role allows me to share my industry experience and insights, helping students develop the skills and mindset needed to succeed in the competitive world of start-ups.</p>
        <p>Outside of my professional endeavors, I am actively involved in the start-up community in Iowa. I regularly participate in local events, workshops, and mentoring programs, offering guidance and support to budding entrepreneurs. My goal is to contribute to a thriving ecosystem where innovative ideas can flourish and transform into successful ventures.</p>
        <p>My journey as an entrepreneur, designer, and software developer has been driven by a relentless pursuit of innovation and a desire to make a positive impact. I am excited about the future and look forward to continuing to push the boundaries of what is possible, both in my professional work and through my contributions to the entrepreneurial community.</p>
        <p>Feel free to connect with me on <a href="https://www.linkedin.com/in/iancastillo/">LinkedIn</a> or check out my projects on <a href="https://github.com/Ian-Castillo">GitHub</a>. Let's build the future together.</p>
        <div className="online">
          <p>Online</p>
          <a href="https://twitter.com">Twitter</a> — Follow<br/>
          <a href="https://youtube.com">YouTube</a> — Subscribe<br/>
          <a href="https://github.com">GitHub</a> — Follow<br/>
          <a href="https://figma.com">Figma</a> — Follow<br/>
        </div>
      </div>
    </div>
  );
};

export default Home;
