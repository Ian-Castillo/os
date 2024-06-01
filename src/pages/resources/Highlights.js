import React, { useState } from 'react';
import './Highlights.css'; // Ensure your CSS file is linked

const highlightsData = [
  {
    id: 1,
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
    url: "https://thewaltdisneycompany.com/walt-disney/",
    favicon: "https://www.google.com/s2/favicons?domain=thewaltdisneycompany.com",
    tags: ["action", "motivation"]
    },
    {
    id: 2,
    quote: "Your time is limited, so don't waste it living someone else's life.",
    author: "Steve Jobs",
    url: "https://news.stanford.edu/2005/06/14/jobs-061505/",
    favicon: "https://www.google.com/s2/favicons?domain=stanford.edu",
    tags: ["authenticity", "purpose"]
    },
    {
    id: 3,
    quote: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
    url: "https://www.amazon.com/Management-Challenges-Century-Peter-Drucker/dp/0887309992",
    favicon: "https://www.google.com/s2/favicons?domain=amazon.com",
    tags: ["innovation", "proactivity"]
    },
    {
    id: 4,
    quote: "Entrepreneurship is living a few years of your life like most people won't, so that you can spend the rest of your life like most people can't.",
    author: "Anonymous",
    url: "",
    favicon: "",
    tags: ["sacrifice", "longterm"]
    },
    {
    id: 5,
    quote: "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt",
    url: "https://www.presidency.ucsb.edu/documents/undelivered-address-for-jefferson-day",
    favicon: "https://www.google.com/s2/favicons?domain=ucsb.edu",
    tags: ["belief", "potential"]
    },
    {
    id: 6,
    quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
    url: "https://www.amazon.com/Wisdom-Churchill-Condensed-Collection-Quotations/dp/1539074889",
    favicon: "https://www.google.com/s2/favicons?domain=amazon.com",
    tags: ["perseverance", "resilience"]
    },
    {
    id: 7,
    quote: "The most valuable thing you can make is a mistake - you can't learn anything from being perfect.",
    author: "Adam Osborne",
    url: "https://www.forbes.com/sites/85broads/2012/11/30/the-most-valuable-thing-you-can-make-is-a-mistake-the-best-mistake-i-ever-made/",
    favicon: "https://www.google.com/s2/favicons?domain=forbes.com",
    tags: ["learning", "growth"]
    },
    {
    id: 8,
    quote: "Ideas are easy. Implementation is hard.",
    author: "Guy Kawasaki",
    url: "https://www.amazon.com/Art-Start-Time-Tested-Battle-Hardened-Starting/dp/1591840562",
    favicon: "https://www.google.com/s2/favicons?domain=amazon.com",
    tags: ["execution", "challenge"]
    },
    {
    id: 9,
    quote: "Timing, perseverance, and ten years of trying will eventually make you look like an overnight success.",
    author: "Biz Stone",
    url: "https://www.amazon.com/Things-Little-Bird-Told-Confessions/dp/1455528714",
    favicon: "https://www.google.com/s2/favicons?domain=amazon.com",
    tags: ["patience", "consistency"]
    },
    {
    id: 10,
    quote: "The critical ingredient is getting off your butt and doing something. It's as simple as that. A lot of people have ideas, but there are few who decide to do something about them now. Not tomorrow. Not next week. But today.",
    author: "Nolan Bushnell",
    url: "https://www.fastcompany.com/1401026/one-thing-nolan-bushnell-atari-chuck-e-cheeses-knows-innovation",
    favicon: "https://www.google.com/s2/favicons?domain=fastcompany.com",
    tags: ["initiative", "action"]
    },
    {
    id: 11,
    quote: "Design is not just what it looks like and feels like. Design is how it works.",
    author: "Steve Jobs",
    url: "https://www.nytimes.com/2003/11/30/magazine/the-guts-of-a-new-machine.html",
    favicon: "https://www.google.com/s2/favicons?domain=nytimes.com",
    tags: ["functionality", "userexperience"]
    },
    {
    id: 12,
    quote: "Good design is obvious. Great design is transparent.",
    author: "Joe Sparano",
    url: "https://www.ibm.com/design/",
    favicon: "https://www.google.com/s2/favicons?domain=ibm.com",
    tags: ["simplicity", "clarity"]
    },
    {
    id: 13,
    quote: "Design is intelligence made visible.",
    author: "Alina Wheeler",
    url: "https://www.amazon.com/Designing-Brand-Identity-Essential-Branding/dp/1118980824",
    favicon: "https://www.google.com/s2/favicons?domain=amazon.com",
    tags: ["strategy", "communication"]
    },
    {
    id: 14,
    quote: "The function of design is letting design function.",
    author: "Micha Commeren",
    url: "https://www.amazon.com/Dutch-Design-History-Timo-Reijenga/dp/3721206223",
    favicon: "https://www.google.com/s2/favicons?domain=amazon.com",
    tags: ["purpose", "effectiveness"]
    },
    {
    id: 15,
    quote: "Design creates culture. Culture shapes values. Values determine the future.",
    author: "Robert L. Peters",
    url: "https://www.aiga.org/inspiration/voices/aiga-medalist-robert-peters",
    favicon: "https://www.google.com/s2/favicons?domain=aiga.org",
    tags: ["impact", "influence"]
    },
    {
    id: 16,
    quote: "Design is not just what it looks like and feels like. Design is how it works.",
    author: "Steve Jobs",
    url: "https://www.nytimes.com/2003/11/30/magazine/the-guts-of-a-new-machine.html",
    favicon: "https://www.google.com/s2/favicons?domain=nytimes.com",
    tags: ["usability", "practicality"]
    },
    {
    id: 17,
    quote: "The alternative to good design is always bad design. There is no such thing as no design.",
    author: "Adam Judge",
    url: "https://www.amazon.com/Little-Black-Book-Design/dp/1592537561",
    favicon: "https://www.google.com/s2/favicons?domain=amazon.com",
    tags: ["intentionality", "quality"]
    },
    {
    id: 18,
    quote: "People ignore design that ignores people.",
    author: "Frank Chimero",
    url: "https://www.amazon.com/Shape-Design-Frank-Chimero/dp/0985472200",
    favicon: "https://www.google.com/s2/favicons?domain=amazon.com",
    tags: ["empathy", "usercentered"]
    },
    {
    id: 19,
    quote: "Good design is all about making other designers feel like idiots because that idea wasn't theirs.",
    author: "Frank Chimero",
    url: "https://www.amazon.com/Shape-Design-Frank-Chimero/dp/0985472200",
    favicon: "https://www.google.com/s2/favicons?domain=amazon.com",
    tags: ["inspiration", "envy"]
    },
    {
    id: 20,
    quote: "Design is thinking made visual.",
    author: "Saul Bass",
    url: "https://www.aiga.org/medalist-saulbass",
    favicon: "https://www.google.com/s2/favicons?domain=aiga.org",
    tags: ["conceptualization", "visualization"]
    },
    {
    id: 21,
    quote: "Photography is a way of feeling, of touching, of loving. What you have caught on film is captured forever... It remembers little things, long after you have forgotten everything.",
    author: "Aaron Siskind",
    url: "https://www.amazon.com/Chileans-Photographs-1973-1990-Luz-Elena/dp/0821215930",
    favicon: "https://www.google.com/s2/favicons?domain=amazon.com",
    tags: ["emotion", "memory"]
    },
    {
    id: 22,
    quote: "The best thing about a picture is that it never changes, even when the people in it do.",
    author: "Andy Warhol",
    url: "https://www.moma.org/calendar/exhibitions/1927",
    favicon: "https://www.google.com/s2/favicons?domain=moma.org",
    tags: ["timelessness", "nostalgia"]
    },
    {
    id: 23,
    quote: "A good photograph is one that communicates a fact, touches the heart and leaves the viewer a changed person for having seen it. It is, in a word, effective.",
    author: "Irving Penn",
    url: "https://www.amazon.com/Passage-Work-Record-Irving-Penn/dp/0679404910",
    favicon: "https://www.google.com/s2/favicons?domain=amazon.com",
    tags: ["impact", "transformation"]
    },
    {
    id: 24,
    quote: "A photograph is a secret about a secret. The more it tells you the less you know.",
    author: "Diane Arbus",
    url: "https://aperture.org/books/diane-arbus-an-aperture-monograph/",
    favicon: "https://www.google.com/s2/favicons?domain=aperture.org",
    tags: ["mystery", "intrigue"]
    },
    {
    id: 25,
    quote: "The camera is an instrument that teaches people how to see without a camera.",
    author: "Dorothea Lange",
    url: "https://collections.museumca.org/?q=category/2011-schema/art/dorothea-lange-collection",
    favicon: "https://www.google.com/s2/favicons?domain=museumca.org",
    tags: ["perception", "awareness"]
    },
    {
    id: 26,
    quote: "When words become unclear, I shall focus with photographs. When images become inadequate, I shall be content with silence.",
    author: "Ansel Adams",
    url: "https://www.amazon.com/Examples-Making-Photographs-Ansel-Adams/dp/0821215655",
    favicon: "https://www.google.com/s2/favicons?domain=amazon.com",
    tags: ["expression", "silence"]
    },
    {
    id: 27,
    quote: "Twelve significant photographs in any one year is a good crop.",
    author: "Ansel Adams",
    url: "https://www.amazon.com/Photographers-Life-Pictures-Ansel-Adams/dp/0821217313",
    favicon: "https://www.google.com/s2/favicons?domain=amazon.com",
    tags: ["selectivity", "quality"]
    },
    {
    id: 28,
    quote: "It's one thing to make a picture of what a person looks like, it's another thing to make a portrait of who they are.",
    author: "Paul Caponigro",
    url: "https://www.amazon.com/Paul-Caponigro-Masterworks-Forty-Years/dp/0944092225",
    favicon: "https://www.google.com/s2/favicons?domain=amazon.com",
    tags: ["personality", "essence"]
    },
    {
    id: 29,
    quote: "The eye should learn to listen before it looks.",
    author: "Robert Frank",
    url: "https://www.aiga.org/medalist-robertfrank",
    favicon: "https://www.google.com/s2/favicons?domain=aiga.org",
    tags: ["observation", "attentiveness"]
    },
    {
    id: 30,
    quote: "Great photography is about depth of feeling, not depth of field.",
    author: "Peter Adams",
    url: "https://photoquotes.com/quote/great-photography-is-about-depth/",
    favicon: "https://www.google.com/s2/favicons?domain=photoquotes.com",
    tags: ["emotion", "connection"]
    },
    {
    id: 31,
    quote: "Entrepreneurship is neither a science nor an art. It is a practice.",
    author: "Peter Drucker",
    url: "https://www.amazon.com/Innovation-Entrepreneurship-Peter-F-Drucker/dp/0060851139",
    favicon: "https://www.google.com/s2/favicons?domain=amazon.com",
    tags: ["application", "habit"]
    },
    {
    id: 32,
    quote: "Entrepreneur is someone who has a vision for something and a want to create.",
    author: "David Karp",
    url: "https://www.inc.com/magazine/201305/david-karp/tumblr-david-karp-2013-entrepreneur-of-the-year.html",
    favicon: "https://www.google.com/s2/favicons?domain=inc.com",
    tags: ["vision", "creation"]
    },
    {
    id: 33,
    quote: "Entrepreneurs are willing to work 80 hours a week to avoid working 40 hours a week.",
    author: "Lori Greiner",
    url: "https://www.amazon.com/Invent-Sell-Bank-Make-Million-Dollar/dp/0804176434",
    favicon: "https://www.google.com/s2/favicons?domain=amazon.com",
    tags: ["dedication", "autonomy"]
    },
    {
    id: 34,
    quote: "Success is walking from failure to failure with no loss of enthusiasm.",
    author: "Winston Churchill",
    url: "https://winstonchurchill.org/resources/quotes/",
    favicon: "https://www.google.com/s2/favicons?domain=winstonchurchill.org",
    tags: ["optimism", "persistence"]
    },
    {
    id: 35,
    quote: "I have not failed. I've just found 10,000 ways that won't work.",
    author: "Thomas A. Edison",
    url: "https://www.amazon.com/Uncommon-Friends-Thomas-Firestone-Lindbergh/dp/0156926202",
    favicon: "https://www.google.com/s2/favicons?domain=amazon.com",
    tags: ["experimentation", "learning"]
    },
    {
    id: 36,
    quote: "Design is not for philosophy, it's for life.",
    author: "Issey Miyake",
    url: "https://www.newyorker.com/magazine/2015/09/28/studio-visit-5",
    favicon: "https://www.google.com/s2/favicons?domain=newyorker.com",
    tags: ["practicality", "realworld"]
    },
{
  id: 38,
  quote: "Good design is good business.",
  author: "Thomas J. Watson Jr.",
  url: "https://www.ibm.com/ibm/history/exhibits/chairmen/chairmen_3.html",
  favicon: "https://www.google.com/s2/favicons?domain=ibm.com",
  tags: ["profitability", "success"]
},

{
  id: 39,
  quote: "Design is the silent ambassador of your brand.",
  author: "Paul Rand",
  url: "https://www.aiga.org/medalist-paulrand",
  favicon: "https://www.google.com/s2/favicons?domain=aiga.org",
  tags: ["representation", "identity"]
},

{
  id: 40,
  quote: "The role of the designer is that of a good, thoughtful host anticipating the needs of his guests.",
  author: "Charles Eames",
  url: "https://www.amazon.com/Eames-Design-Office-Charles-Ray/dp/0810908794",
  favicon: "https://www.google.com/s2/favicons?domain=amazon.com",
  tags: ["hospitality", "anticipation"]
},

{
  id: 41,
  quote: "There are always two people in every picture: the photographer and the viewer.",
  author: "Ansel Adams",
  url: "https://www.amazon.com/Camera-Ansel-Adams-Photography-Book/dp/0821221841",
  favicon: "https://www.google.com/s2/favicons?domain=amazon.com",
  tags: ["perspective", "interpretation"]
},

{
  id: 42,
  quote: "If your pictures aren't good enough, you're not close enough.",
  author: "Robert Capa",
  url: "https://www.amazon.com/Slightly-Out-Focus-Modern-Library/dp/0375753966",
  favicon: "https://www.google.com/s2/favicons?domain=amazon.com",
  tags: ["proximity", "engagement"]
},

{
  id: 43,
  quote: "A portrait is not made in the camera but on either side of it.",
  author: "Edward Steichen",
  url: "https://www.amazon.com/Edward-Steichen-Life-Photography/dp/0879514302",
  favicon: "https://www.google.com/s2/favicons?domain=amazon.com",
  tags: ["relationship", "interaction"]
},

{
  id: 44,
  quote: "Photography takes an instant out of time, altering life by holding it still.",
  author: "Dorothea Lange",
  url: "https://www.amazon.com/Dorothea-Lange-Photographers-Life/dp/0815624654",
  favicon: "https://www.google.com/s2/favicons?domain=amazon.com",
  tags: ["preservation", "stillness"]
},

{
  id: 45,
  quote: "The camera is an excuse to be someplace you otherwise don't belong. It gives me both a point of connection and a point of separation.",
  author: "Susan Meiselas",
  url: "https://www.amazon.com/Susan-Meiselas-Frontline/dp/1597112453",
  favicon: "https://www.google.com/s2/favicons?domain=amazon.com",
  tags: ["access", "detachment"]
},

{
  id: 46,
  quote: "In the modern world of business, it is useless to be a creative, original thinker unless you can also sell what you create.",
  author: "David Ogilvy",
  url: "https://www.amazon.com/Confessions-Advertising-Man-David-Ogilvy/dp/190491537X",
  favicon: "https://www.google.com/s2/favicons?domain=amazon.com",
  tags: ["commercialization", "persuasion"]
},

{
  id: 47,  
  quote: "The most valuable thing you can make is a mistake. You can't learn anything from being perfect.",
  author: "Adam Osborne",
  url: "https://www.wsj.com/articles/SB112270319970110000",
  favicon: "https://www.google.com/s2/favicons?domain=wsj.com",
  tags: ["failure", "growth"]
},

{
  id: 48,
  quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
  author: "Albert Schweitzer",
  url: "https://www.amazon.com/Quest-Historical-Jesus-Harvest-Book/dp/0486440273",
  favicon: "https://www.google.com/s2/favicons?domain=amazon.com",
  tags: ["passion", "fulfillment"]
},

{
  id: 49,
  quote: "The only thing worse than starting something and failing... is not starting something.",
  author: "Seth Godin",
  url: "https://www.amazon.com/Tribes-We-Need-You-Lead/dp/1591842336",
  favicon: "https://www.google.com/s2/favicons?domain=amazon.com",
  tags: ["initiation", "risk-taking"]
},

{
  id: 50,
  quote: "Chase the vision, not the money; the money will end up following you.",
  author: "Tony Hsieh",
  url: "https://www.amazon.com/Delivering-Happiness-Profits-Passion-Purpose/dp/0446563048",
  favicon: "https://www.google.com/s2/favicons?domain=amazon.com",
  tags: ["purpose", "abundance"]
}
];

const Highlights = () => {
  const [selectedHighlight, setSelectedHighlight] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleHighlightClick = (highlight) => {
    setSelectedHighlight(highlight);
  };

  const handleBackClick = () => {
    setSelectedHighlight(null);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredHighlights = highlightsData.filter(highlight => 
    (highlight.quote && highlight.quote.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (highlight.tags && highlight.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())))
  );

  return (
    <div className="highlights-container">
      <div className="highlights-sidebar">
        <input 
          type="text" 
          placeholder="Search highlight..." 
          value={searchTerm} 
          onChange={handleSearchChange} 
          className="search-bar"
        />
        <ul className="highlights-list">
          {filteredHighlights.map((highlight) => (
            <li key={highlight.id} onClick={() => handleHighlightClick(highlight)}>
              <div className="highlight-info">
                <div className="highlight-quote">{highlight.quote}</div>
                <div className="highlight-favicon-url">
                  <img className="highlight-favicon" src={highlight.favicon} alt="" />
                  <div className="highlight-url">{highlight.url.replace(/^https?:\/\//, '')}</div>
                </div>
                <div className="highlight-tags">
                  {highlight.tags && highlight.tags.map(tag => <span key={tag}>{tag}</span>)}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {selectedHighlight && (
        <div className="highlight-details">
          <button className="back-button" onClick={handleBackClick}>Back</button>
          <h3>{selectedHighlight.quote}</h3>
          <p>- {selectedHighlight.author}</p>
          <a href={selectedHighlight.url} target="_blank" rel="noopener noreferrer">Source</a>
        </div>
      )}
    </div>
  );
};

export default Highlights;