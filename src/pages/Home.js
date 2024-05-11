import React from 'react';
import './Home.css'; // Make sure to link the CSS file

const Home = () => {
  return (
    <div className="home-container">
      <div className="content">
        <h1>Hey, I'm Ian!</h1>
        <p>I'm a designer, <a href="https://example.com/podcaster">podcaster</a>, writer, and software tinkerer. I'm currently building <a href="https://example.com/campsite">Campsite</a>, an app that brings together a team's posts, calls, notes, and chat.</p>
        <p>Before Campsite, I spent four years designing native mobile apps at <a href="https://github.com">GitHub</a>. Before GitHub, I co-founded <a href="https://spectrum.chat">Spectrum</a>, a platform for large-scale communities to have better public conversations. Spectrum was acquired by GitHub in November, 2018.</p>
        <p>Before Spectrum I designed payments experiences at Facebook, working across Facebook, Messenger, WhatsApp, and Instagram. I originally cut my teeth as the first product designer at <a href="https://buffer.com">Buffer</a>.</p>
        <p>I also co-host the <a href="https://designdetails.fm">Design Details Podcast</a>, a weekly conversation about design process and culture.</p>
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
