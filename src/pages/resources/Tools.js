import React, { useState } from 'react';
import './Tools.css'; // Ensure your CSS file is linked

const toolsData = [
  {
    id: 1,
    title: "Canva",
    url: "https://www.canva.com/",
    description: "A user-friendly graphic design tool with drag-and-drop features, perfect for quick designs.",
    favicon: "https://www.google.com/s2/favicons?domain=canva.com",
    tags: ["design"]
  },
  {
    id: 2,
    title: "Adobe Spark",
    url: "https://spark.adobe.com/",
    description: "Simplifies graphics, web page, and video creation for storytelling and visual content.",
    favicon: "https://www.google.com/s2/favicons?domain=adobe.com",
    tags: ["design"]
  },
  {
    id: 3,
    title: "Figma",
    url: "https://www.figma.com/",
    description: "A collaborative interface design tool that is great for prototyping apps and websites with real-time team collaboration.",
    favicon: "https://www.google.com/s2/favicons?domain=figma.com",
    tags: ["design", "productivity"]
  },
  {
    id: 4,
    title: "Sketch",
    url: "https://www.sketch.com/",
    description: "A vector-based design tool for macOS, specializing in user interfaces, primarily used for websites and apps.",
    favicon: "https://www.google.com/s2/favicons?domain=sketch.com",
    tags: ["design"]
  },
  {
    id: 5,
    title: "Adobe XD",
    url: "https://www.adobe.com/products/xd.html",
    description: "Provides tools for designing digital products, web apps, and mobile app interfaces, including voice prototypes.",
    favicon: "https://www.google.com/s2/favicons?domain=adobe.com",
    tags: ["design"]
  },
  {
    id: 6,
    title: "InVision",
    url: "https://www.invisionapp.com/",
    description: "Offers digital product design and development tools, including prototyping and collaboration features.",
    favicon: "https://www.google.com/s2/favicons?domain=invisionapp.com",
    tags: ["design"]
  },
  {
    id: 7,
    title: "Marvel",
    url: "https://marvelapp.com/",
    description: "An easy-to-use web platform to create interactive app prototypes quickly and test user interfaces.",
    favicon: "https://www.google.com/s2/favicons?domain=marvelapp.com",
    tags: ["design"]
  },
  {
    id: 8,
    title: "Axure RP",
    url: "https://www.axure.com/",
    description: "Advanced tool for creating fully interactive prototypes with dynamic content and conditional logic.",
    favicon: "https://www.google.com/s2/favicons?domain=axure.com",
    tags: ["design"]
  },
  {
    id: 9,
    title: "Proto.io",
    url: "https://proto.io/",
    description: "Supports high-fidelity prototyping that allows designers to prototype apps without coding.",
    favicon: "https://www.google.com/s2/favicons?domain=proto.io",
    tags: ["design"]
  },
  {
    id: 10,
    title: "Balsamiq",
    url: "https://balsamiq.com/",
    description: "A wireframing tool that helps you quickly sketch out user interfaces for web and mobile apps, emphasizing speed and simplicity.",
    favicon: "https://www.google.com/s2/favicons?domain=balsamiq.com",
    tags: ["design"]
  },
  {
    id: 11,
    title: "Miro",
    url: "https://miro.com/",
    description: "An online collaborative whiteboarding platform ideal for brainstorming, planning, and designing interactive prototypes.",
    favicon: "https://www.google.com/s2/favicons?domain=miro.com",
    tags: ["productivity", "collaboration"]
  },
  {
    id: 12,
    title: "Origami Studio",
    url: "https://origami.design/",
    description: "Developed by Facebook, this tool is great for creating high-fidelity, interactive prototypes and animations.",
    favicon: "https://www.google.com/s2/favicons?domain=origami.design",
    tags: ["design"]
  },
  {
    id: 13,
    title: "Framer",
    url: "https://www.framer.com/",
    description: "Combines design and code to enable interactive and realistic prototypes, perfect for user testing and presentations.",
    favicon: "https://www.google.com/s2/favicons?domain=framer.com",
    tags: ["design"]
  },
  {
    id: 14,
    title: "UXPin",
    url: "https://www.uxpin.com/",
    description: "A design platform that allows you to create interactive prototypes with advanced interactions, conditional logic, and variables.",
    favicon: "https://www.google.com/s2/favicons?domain=uxpin.com",
    tags: ["design"]
  },
  {
    id: 15,
    title: "Zeplin",
    url: "https://zeplin.io/",
    description: "Facilitates the handoff between design and development by providing a space for designers to share their work and developers to get the specs they need.",
    favicon: "https://www.google.com/s2/favicons?domain=zeplin.io",
    tags: ["design", "collaboration"]
  },
  {
    id: 16,
    title: "Google Forms",
    url: "https://forms.google.com/",
    description: "A straightforward tool for creating forms and surveys, seamlessly integrated with Google Sheets.",
    favicon: "https://www.google.com/s2/favicons?domain=google.com",
    tags: ["survey", "data collection"]
  },
  {
    id: 17,
    title: "Typeform",
    url: "https://www.typeform.com/",
    description: "Known for its user-friendly interface, ideal for creating engaging, conversational surveys.",
    favicon: "https://www.google.com/s2/favicons?domain=typeform.com",
    tags: ["survey", "data collection"]
  },
  {
    id: 18,
    title: "SurveyMonkey",
    url: "https://www.surveymonkey.com/",
    description: "A robust platform for creating detailed surveys, collecting responses, and analyzing data.",
    favicon: "https://www.google.com/s2/favicons?domain=surveymonkey.com",
    tags: ["survey", "data collection"]
  },
  {
    id: 19,
    title: "Qualtrics",
    url: "https://www.qualtrics.com/",
    description: "An advanced survey tool that offers sophisticated data collection and analysis capabilities, suitable for extensive research projects.",
    favicon: "https://www.google.com/s2/favicons?domain=qualtrics.com",
    tags: ["survey", "data collection"]
  },
  {
    id: 20,
    title: "TinkerCAD",
    url: "https://www.tinkercad.com/",
    description: "An entry-level online computer-aided design tool great for beginners wanting to design 3D models.",
    favicon: "https://www.google.com/s2/favicons?domain=tinkercad.com",
    tags: ["3D modeling", "CAD"]
  },
  {
    id: 21,
    title: "Fusion 360",
    url: "https://www.autodesk.com/products/fusion-360/overview",
    description: "A more comprehensive CAD tool for precise engineering, including 3D modeling and simulation.",
    favicon: "https://www.google.com/s2/favicons?domain=autodesk.com",
    tags: ["3D modeling", "CAD"]
  },
  {
    id: 22,
    title: "Blender",
    url: "https://www.blender.org/",
    description: "A powerful open-source 3D creation suite, supporting the entirety of the 3D pipeline from modeling to animation.",
    favicon: "https://www.google.com/s2/favicons?domain=blender.org",
    tags: ["3D modeling", "animation"]
  },
  {
    id: 23,
    title: "SketchUp",
    url: "https://www.sketchup.com/",
    description: "User-friendly 3D modeling software that's great for creating detailed architectural designs and prototypes.",
    favicon: "https://www.google.com/s2/favicons?domain=sketchup.com",
    tags: ["3D modeling", "CAD"]
  },
  {
    id: 24,
    title: "CodePen",
    url: "https://codepen.io/",
    description: "A social development environment for front-end designers and developers to showcase user-created HTML, CSS, and JavaScript code snippets.",
    favicon: "https://www.google.com/s2/favicons?domain=codepen.io",
    tags: ["coding", "development"]
  },
  {
    id: 25,
    title: "GitHub",
    url: "https://github.com/",
    description: "Essential for version control and code management, facilitating collaborative coding projects.",
    favicon: "https://www.google.com/s2/favicons?domain=github.com",
    tags: ["coding", "development", "collaboration"]
  },
  {
    id: 26,
    title: "Replit",
    url: "https://replit.com/",
    description: "An online coding platform that supports collaborative coding in multiple programming languages.",
    favicon: "https://www.google.com/s2/favicons?domain=replit.com",
    tags: ["coding", "development", "collaboration"]
  },
  {
    id: 27,
    title: "Glitch",
    url: "https://glitch.com/",
    description: "Allows you to create, remix, and deploy applications and web projects.",
    favicon: "https://www.google.com/s2/favicons?domain=glitch.com",
    tags: ["coding", "development"]
  },
  {
    id: 28,
    title: "Firebase",
    url: "https://firebase.google.com/",
    description: "A comprehensive app development platform by Google that enhances web and mobile development with ready-made backend services.",
    favicon: "https://www.google.com/s2/favicons?domain=firebase.google.com",
    tags: ["coding", "development"]
  },
  {
    id: 29,
    title: "Heroku",
    url: "https://www.heroku.com/",
    description: "A cloud platform that lets companies build, deliver, monitor, and scale apps.",
    favicon: "https://www.google.com/s2/favicons?domain=heroku.com",
    tags: ["coding", "development"]
  },
  {
    id: 30,
    title: "JSFiddle",
    url: "https://jsfiddle.net/",
    description: "An online IDE that allows you to write and test HTML, CSS, and JavaScript code snippets in real-time.",
    favicon: "https://www.google.com/s2/favicons?domain=jsfiddle.net",
    tags: ["coding", "development"]
  },
  {
    id: 31,
    title: "Visual Studio Code",
    url: "https://code.visualstudio.com/",
    description: "A free, powerful code editor by Microsoft that supports numerous extensions for enhanced development workflows.",
    favicon: "https://www.google.com/s2/favicons?domain=visualstudio.com",
    tags: ["coding", "development"]
  },
  {
    id: 32,
    title: "StackBlitz",
    url: "https://stackblitz.com/",
    description: "An online IDE that lets you build, deploy, and collaborate on web applications directly in the browser.",
    favicon: "https://www.google.com/s2/favicons?domain=stackblitz.com",
    tags: ["coding", "development"]
  },
  {
    id: 33,
    title: "Netlify",
    url: "https://www.netlify.com/",
    description: "Provides an intuitive way to deploy and manage modern web projects with continuous deployment from Git.",
    favicon: "https://www.google.com/s2/favicons?domain=netlify.com",
    tags: ["coding", "development"]
  },
  {
    id: 34,
    title: "Trello",
    url: "https://trello.com/",
    description: "A card-based project management tool ideal for organizing tasks and projects across teams.",
    favicon: "https://www.google.com/s2/favicons?domain=trello.com",
    tags: ["productivity", "project management"]
  },
  {
    id: 35,
    title: "Slack",
    url: "https://slack.com/",
    description: "A powerful team communication tool that integrates with many project management services.",
    favicon: "https://www.google.com/s2/favicons?domain=slack.com",
    tags: ["productivity", "collaboration"]
  },
  {
    id: 36,
    title: "Notion",
    url: "https://www.notion.so/",
    description: "Combines notes, tasks, databases, and calendar into one versatile platform.",
    favicon: "https://www.google.com/s2/favicons?domain=notion.so",
    tags: ["productivity", "project management"]
  },
  {
    id: 37,
    title: "Airtable",
    url: "https://airtable.com/",
    description: "Acts as a flexible spreadsheet and database hybrid, great for organizing project data and workflows.",
    favicon: "https://www.google.com/s2/favicons?domain=airtable.com",
    tags: ["productivity", "project management"]
  },
  {
    id: 38,
    title: "Asana",
    url: "https://asana.com/",
    description: "A comprehensive project management tool that helps teams plan, organize, and manage work from start to finish.",
    favicon: "https://www.google.com/s2/favicons?domain=asana.com",
    tags: ["productivity", "project management"]
  },
  {
    id: 39,
    title: "Monday.com",
    url: "https://monday.com/",
    description: "A work operating system that allows teams to build custom workflows, manage tasks, and track project progress.",
    favicon: "https://www.google.com/s2/favicons?domain=monday.com",
    tags: ["productivity", "project management"]
  },
  {
    id: 40,
    title: "ClickUp",
    url: "https://clickup.com/",
    description: "An all-in-one productivity platform designed to manage projects, documents, goals, and time tracking in one place.",
    favicon: "https://www.google.com/s2/favicons?domain=clickup.com",
    tags: ["productivity", "project management"]
  },
  {
    id: 41,
    title: "Milanote",
    url: "https://milanote.com/",
    description: "A tool for organizing creative projects, perfect for mood boards, project plans, and brainstorming sessions.",
    favicon: "https://www.google.com/s2/favicons?domain=milanote.com",
    tags: ["productivity", "design"]
  }
];

const Tools = () => {
  const [selectedTool, setSelectedTool] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleToolClick = (tool) => {
    setSelectedTool(tool);
  };

  const handleBackClick = () => {
    setSelectedTool(null);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredTools = toolsData.filter(tool => 
    tool.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tool.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="tools-container">
      <div className="tools-sidebar">
        <input 
          type="text" 
          placeholder="Search tools..." 
          value={searchTerm} 
          onChange={handleSearchChange} 
          className="search-bar"
        />
        <ul className="tools-list">
          {filteredTools.map((tool) => (
            <li key={tool.id} onClick={() => handleToolClick(tool)}>
              <div className="tool-info">
                <div className="tool-title">{tool.title}</div>
                <div className="tool-favicon-url">
                  <img className="tool-favicon" src={tool.favicon} alt={`${tool.title} favicon`} />
                  <div className="tool-url">{tool.url.replace(/^https?:\/\//, '')}</div>
                </div>
                <div className="tool-tags">
                  {tool.tags.map(tag => <span key={tag}>{tag}</span>)}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {selectedTool && (
        <div className="tool-details">
          <button className="back-button" onClick={handleBackClick}>Back</button>
          <h3>{selectedTool.title}</h3>
          <p>{selectedTool.description}</p>
          <a href={selectedTool.url} target="_blank" rel="noopener noreferrer">Visit</a>
        </div>
      )}
    </div>
  );
};

export default Tools;