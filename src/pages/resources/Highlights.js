import React from 'react';
import './Highlights.css';

const highlightsData = {
  Entrepreneurship: [
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
    }
  ],
  Design: [
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
    }
  ],
  Photography: [
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
    }
  ]

};

const Highlights = () => {
  return (
    <div>
      {Object.entries(highlightsData).map(([category, quotes]) => (
        <div key={category}>
          <h2 className="section-heading">{category}</h2>
          <div className="highlights-container">
            {quotes.map((highlight) => (
              <div key={highlight.id} className="highlight-card">
                <div className="highlight-title">{highlight.quote}</div>
                <div className="highlight-description">- {highlight.author}</div>
                <div className="highlight-tags">
                  {highlight.tags.map((tag) => (
                    <span key={tag} className="highlight-tag">{tag}</span>
                  ))}
                </div>
                <div className="highlight-footer">
                  <img className="highlight-favicon" src={highlight.favicon} alt="" />
                  <a href={highlight.url} target="_blank" rel="noopener noreferrer">
                    {highlight.url.replace(/^https?:\/\//, '')}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Highlights;