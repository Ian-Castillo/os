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
      url: "https://www.drucker.institute/perspective/about-peter-drucker/",
      favicon: "https://www.google.com/s2/favicons?domain=drucker.institute",
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
      url: "https://winstonchurchill.org/resources/quotes/",
      favicon: "https://www.google.com/s2/favicons?domain=winstonchurchill.org",
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
      url: "https://guykawasaki.com/books/the-art-of-the-start/",
      favicon: "https://www.google.com/s2/favicons?domain=guykawasaki.com",
      tags: ["execution", "challenge"]
    },
    {
      id: 9,
      quote: "Timing, perseverance, and ten years of trying will eventually make you look like an overnight success.",
      author: "Biz Stone",
      url: "https://www.bizstone.com/",
      favicon: "https://www.google.com/s2/favicons?domain=bizstone.com",
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
      quote: "Chase the vision, not the money; the money will end up following you.",
      author: "Tony Hsieh",
      url: "https://www.deliveringhappiness.com/tonyquotes/",
      favicon: "https://www.google.com/s2/favicons?domain=deliveringhappiness.com",
      tags: ["vision", "purpose"]
    },
    {
      id: 12,
      quote: "Embrace what you don't know, especially in the beginning, because what you don't know can become your greatest asset. It ensures that you will absolutely be doing things different from everybody else.",
      author: "Sara Blakely",
      url: "https://www.forbes.com/sites/moiraforbes/2012/03/07/sara-blakely-on-resilience-embracing-failure-and-activating-ideas/",
      favicon: "https://www.google.com/s2/favicons?domain=forbes.com",
      tags: ["uniqueness", "differentiation"]
    },
    {
      id: 13,
      quote: "It's not about ideas. It's about making ideas happen.",
      author: "Scott Belsky",
      url: "https://scottbelsky.com/articles/",
      favicon: "https://www.google.com/s2/favicons?domain=scottbelsky.com",
      tags: ["execution", "action"]
    },
    {
      id: 14,
      quote: "The secret to successful hiring is this: look for the people who want to change the world.",
      author: "Marc Benioff",
      url: "https://www.salesforce.com/company/leadership/bios/marc-benioff/",
      favicon: "https://www.google.com/s2/favicons?domain=salesforce.com",
      tags: ["hiring", "passion"]
    },
    {
      id: 15,
      quote: "If you are not embarrassed by the first version of your product, you've launched too late.",
      author: "Reid Hoffman",
      url: "https://mastersofscale.com/reid-hoffman-make-everyone-a-hero/",
      favicon: "https://www.google.com/s2/favicons?domain=mastersofscale.com",
      tags: ["iteration", "speed"]
    }
  ],
  Design: [
    {
      id: 16,
      quote: "Design is not just what it looks like and feels like. Design is how it works.",
      author: "Steve Jobs",
      url: "https://www.nytimes.com/2003/11/30/magazine/the-guts-of-a-new-machine.html",
      favicon: "https://www.google.com/s2/favicons?domain=nytimes.com",
      tags: ["functionality", "userexperience"]
    },
    {
      id: 17,
      quote: "Good design is obvious. Great design is transparent.",
      author: "Joe Sparano",
      url: "https://www.ibm.com/design/",
      favicon: "https://www.google.com/s2/favicons?domain=ibm.com",
      tags: ["simplicity", "clarity"]
    },
    {
      id: 18,
      quote: "Design is intelligence made visible.",
      author: "Alina Wheeler",
      url: "https://www.alinawheeler.com/",
      favicon: "https://www.google.com/s2/favicons?domain=alinawheeler.com",
      tags: ["strategy", "communication"]
    },
    {
      id: 19,
      quote: "The function of design is letting design function.",
      author: "Micha Commeren",
      url: "https://www.fastcompany.com/3033054/the-function-of-design-is-letting-design-function",
      favicon: "https://www.google.com/s2/favicons?domain=fastcompany.com",
      tags: ["purpose", "effectiveness"]
    },
    {
      id: 20,
      quote: "Design creates culture. Culture shapes values. Values determine the future.",
      author: "Robert L. Peters",
      url: "https://www.aiga.org/inspiration/voices/aiga-medalist-robert-peters",
      favicon: "https://www.google.com/s2/favicons?domain=aiga.org",
      tags: ["impact", "influence"]
    },
    {
      id: 21,
      quote: "Design is not just what it looks like and feels like. Design is how it works.",
      author: "Steve Jobs",
      url: "https://www.nytimes.com/2003/11/30/magazine/the-guts-of-a-new-machine.html",
      favicon: "https://www.google.com/s2/favicons?domain=nytimes.com",
      tags: ["usability", "practicality"]
    },
    {
      id: 22,
      quote: "The alternative to good design is always bad design. There is no such thing as no design.",
      author: "Adam Judge",
      url: "https://adamjudge.com/",
      favicon: "https://www.google.com/s2/favicons?domain=adamjudge.com",
      tags: ["intentionality", "quality"]
    },
    {
      id: 23,
      quote: "People ignore design that ignores people.",
      author: "Frank Chimero",
      url: "https://frankchimero.com/blog/2019/people-ignore-design/",
      favicon: "https://www.google.com/s2/favicons?domain=frankchimero.com",
      tags: ["empathy", "usercentered"]
    },
    {
      id: 24,
      quote: "Good design is all about making other designers feel like idiots because that idea wasn't theirs.",
      author: "Frank Chimero",
      url: "https://frankchimero.com/blog/2011/inspiration-vs-imitation/",
      favicon: "https://www.google.com/s2/favicons?domain=frankchimero.com",
      tags: ["inspiration", "envy"]
    },
    {
      id: 25,
      quote: "Design is thinking made visual.",
      author: "Saul Bass",
      url: "https://www.aiga.org/medalist-saulbass",
      favicon: "https://www.google.com/s2/favicons?domain=aiga.org",
      tags: ["conceptualization", "visualization"]
    },
    {
      id: 26,
      quote: "Design is where science and art break even.",
      author: "Robin Mathew",
      url: "https://www.fastcompany.com/3034240/why-did-apple-hire-marc-newson-the-man-behind-some-of-historys-strangest-designs",
      favicon: "https://www.google.com/s2/favicons?domain=fastcompany.com",
      tags: ["intersection", "balance"]
    },
    {
      id: 27,
      quote: "Design is the silent ambassador of your brand.",
      author: "Paul Rand",
      url: "https://www.paulrand.design/quotes",
      favicon: "https://www.google.com/s2/favicons?domain=paulrand.design",
      tags: ["branding", "identity"]
    },
    {
      id: 28,
      quote: "Good design is good business.",
      author: "Thomas J. Watson Jr.",
      url: "https://www.ibm.com/ibm/history/ibm100/us/en/icons/gooddesign/",
      favicon: "https://www.google.com/s2/favicons?domain=ibm.com",
      tags: ["business", "roi"]
    },
    {
      id: 29,
      quote: "Content precedes design. Design in the absence of content is not design, it's decoration.",
      author: "Jeffrey Zeldman",
      url: "https://www.zeldman.com/2008/05/06/content-precedes-design/",
      favicon: "https://www.google.com/s2/favicons?domain=zeldman.com",
      tags: ["content", "strategy"]
    },
    {
      id: 30,
      quote: "Design is as much an act of spacing as an act of marking.",
      author: "Ellen Lupton",
      url: "https://www.elupton.com/thinking/",
      favicon: "https://www.google.com/s2/favicons?domain=elupton.com",
      tags: ["spacing", "composition"]
    }
  ],
  Photography: [
    {
      id: 31,
      quote: "Photography is a way of feeling, of touching, of loving. What you have caught on film is captured forever... It remembers little things, long after you have forgotten everything.",
      author: "Aaron Siskind",
      url: "https://www.aaronsiskind.org/as.html",
      favicon: "https://www.google.com/s2/favicons?domain=aaronsiskind.org",
      tags: ["emotion", "memory"]
    },
    {
      id: 32,
      quote: "The best thing about a picture is that it never changes, even when the people in it do.",
      author: "Andy Warhol",
      url: "https://www.moma.org/calendar/exhibitions/1927",
      favicon: "https://www.google.com/s2/favicons?domain=moma.org",
      tags: ["timelessness", "nostalgia"]
    },
    {
      id: 33,
      quote: "A good photograph is one that communicates a fact, touches the heart and leaves the viewer a changed person for having seen it. It is, in a word, effective.",
      author: "Irving Penn",
      url: "https://www.irvingpenn.org/",
      favicon: "https://www.google.com/s2/favicons?domain=irvingpenn.org",
      tags: ["impact", "transformation"]
    },
    {
      id: 34,
      quote: "A photograph is a secret about a secret. The more it tells you the less you know.",
      author: "Diane Arbus",
      url: "https://aperture.org/books/diane-arbus-an-aperture-monograph/",
      favicon: "https://www.google.com/s2/favicons?domain=aperture.org",
      tags: ["mystery", "intrigue"]
    },
    {
      id: 35,
      quote: "The camera is an instrument that teaches people how to see without a camera.",
      author: "Dorothea Lange",
      url: "https://collections.museumca.org/?q=category/2011-schema/art/dorothea-lange-collection",
      favicon: "https://www.google.com/s2/favicons?domain=museumca.org",
      tags: ["perception", "awareness"]
    },
    {
      id: 36,
      quote: "When words become unclear, I shall focus with photographs. When images become inadequate, I shall be content with silence.",
      author: "Ansel Adams",
      url: "https://anseladams.com/ansel-adams-quotes/",
      favicon: "https://www.google.com/s2/favicons?domain=anseladams.com",
      tags: ["expression", "silence"]
    },
    {
      id: 37,
      quote: "Twelve significant photographs in any one year is a good crop.",
      author: "Ansel Adams CopyRetryICadd more Edit",
url: "https://anseladams.com/ansel-adams-quotes/",
favicon: "https://www.google.com/s2/favicons?domain=anseladams.com",
tags: ["selectivity", "quality"]
},
{
id: 38,
quote: "It's one thing to make a picture of what a person looks like, it's another thing to make a portrait of who they are.",
author: "Paul Caponigro",
url: "https://www.paulcaponigro.com/",
favicon: "https://www.google.com/s2/favicons?domain=paulcaponigro.com",
tags: ["personality", "essence"]
},
{
id: 39,
quote: "The eye should learn to listen before it looks.",
author: "Robert Frank",
url: "https://www.aiga.org/medalist-robertfrank",
favicon: "https://www.google.com/s2/favicons?domain=aiga.org",
tags: ["observation", "attentiveness"]
},
{
id: 40,
quote: "Great photography is about depth of feeling, not depth of field.",
author: "Peter Adams",
url: "https://photoquotes.com/quote/great-photography-is-about-depth/",
favicon: "https://www.google.com/s2/favicons?domain=photoquotes.com",
tags: ["emotion", "connection"]
},
{
id: 41,
quote: "To me, photography is an art of observation. It's about finding something interesting in an ordinary place... I've found it has little to do with the things you see and everything to do with the way you see them.",
author: "Elliott Erwitt",
url: "https://www.magnumphotos.com/photographer/elliott-erwitt/",
favicon: "https://www.google.com/s2/favicons?domain=magnumphotos.com",
tags: ["perspective", "observation"]
},
{
id: 42,
quote: "Photography is truth. The cinema is truth twenty-four times per second.",
author: "Jean-Luc Godard",
url: "https://www.criterion.com/current/posts/3095-jean-luc-godard-quotes",
favicon: "https://www.google.com/s2/favicons?domain=criterion.com",
tags: ["truth", "cinema"]
},
{
id: 43,
quote: "The picture that you took with your camera is the imagination you want to create with reality.",
author: "Scott Lorenzo",
url: "https://photoquotes.com/quote/the-picture-that-you-took-with/",
favicon: "https://www.google.com/s2/favicons?domain=photoquotes.com",
tags: ["imagination", "reality"]
},
{
id: 44,
quote: "If your pictures aren't good enough, you aren't close enough.",
author: "Robert Capa",
url: "https://www.magnumphotos.com/photographer/robert-capa/",
favicon: "https://www.google.com/s2/favicons?domain=magnumphotos.com",
tags: ["proximity", "engagement"]
},
{
id: 45,
quote: "The best images are the ones that retain their strength and impact over the years, regardless of the number of times they are viewed.",
author: "Anne Geddes",
url: "https://www.annegeddes.com/",
favicon: "https://www.google.com/s2/favicons?domain=annegeddes.com",
tags: ["timelessness", "impact"]
}
],
Writing: [
{
id: 46,
quote: "Write drunk, edit sober.",
author: "Ernest Hemingway",
url: "https://www.hemingwaysociety.org/ernest-hemingway-quotes",
favicon: "https://www.google.com/s2/favicons?domain=hemingwaysociety.org",
tags: ["writing process", "editing"]
},
{
id: 47,
quote: "If it sounds like writing, I rewrite it.",
author: "Elmore Leonard",
url: "https://www.goodreads.com/quotes/18566-if-it-sounds-like-writing-i-rewrite-it",
favicon: "https://www.google.com/s2/favicons?domain=goodreads.com",
tags: ["natural writing", "simplicity"]
},
{
id: 48,
quote: "You can make anything by writing.",
author: "C.S. Lewis",
url: "https://www.cslewis.com/us/quotes/",
favicon: "https://www.google.com/s2/favicons?domain=cslewis.com",
tags: ["creativity", "imagination"]
},
{
id: 49,
quote: "Writing is easy. All you have to do is cross out the wrong words.",
author: "Mark Twain",
url: "https://www.cmgww.com/historic/twain/about/quotes/",
favicon: "https://www.google.com/s2/favicons?domain=cmgww.com",
tags: ["simplicity", "editing"]
},
{
id: 50,
quote: "Writing is a socially acceptable form of schizophrenia.",
author: "E.L. Doctorow",
url: "https://www.goodreads.com/quotes/140665-writing-is-a-socially-acceptable-form-of-schizophrenia",
favicon: "https://www.google.com/s2/favicons?domain=goodreads.com",
tags: ["creativity", "imagination"]
},
{
id: 51,
quote: "A writer is someone for whom writing is more difficult than it is for other people.",
author: "Thomas Mann",
url: "https://www.goodreads.com/quotes/52408-a-writer-is-someone-for-whom-writing-is-more-difficult",
favicon: "https://www.google.com/s2/favicons?domain=goodreads.com",
tags: ["difficulty", "perseverance"]
},
{
id: 52,
quote: "There is no greater agony than bearing an untold story inside you.",
author: "Maya Angelou",
url: "https://www.mayaangelou.com/quotes/",
favicon: "https://www.google.com/s2/favicons?domain=mayaangelou.com",
tags: ["storytelling", "expression"]
},
{
id: 53,
quote: "I write to discover what I know.",
author: "Flannery O'Connor",
url: "https://www.goodreads.com/quotes/42441-i-write-to-discover-what-i-know",
favicon: "https://www.google.com/s2/favicons?domain=goodreads.com",
tags: ["self-discovery", "knowledge"]
},
{
id: 54,
quote: "No tears in the writer, no tears in the reader. No surprise in the writer, no surprise in the reader.",
author: "Robert Frost",
url: "https://www.poetryfoundation.org/poets/robert-frost",
favicon: "https://www.google.com/s2/favicons?domain=poetryfoundation.org",
tags: ["emotion", "reader engagement"]
},
{
id: 55,
quote: "We write to taste life twice, in the moment and in retrospect.",
author: "Anaïs Nin",
url: "https://anaisnin.com/anais-nin-quotes-on-writing/",
favicon: "https://www.google.com/s2/favicons?domain=anaisnin.com",
tags: ["experience", "reflection"]
},
{
id: 56,
quote: "The most valuable of all talents is that of never using two words when one will do.",
author: "Thomas Jefferson",
url: "https://www.monticello.org/site/research-and-collections/quotes-jefferson-quotations",
favicon: "https://www.google.com/s2/favicons?domain=monticello.org",
tags: ["brevity", "precision"]
},
{
id: 57,
quote: "Writing is an exploration. You start from nothing and learn as you go.",
author: "E.L. Doctorow",
url: "https://www.goodreads.com/quotes/98892-writing-is-an-exploration-you-start-from-nothing-and-learn",
favicon: "https://www.google.com/s2/favicons?domain=goodreads.com",
tags: ["learning", "discovery"]
},
{
id: 58,
quote: "The difference between the right word and the almost right word is the difference between lightning and a lightning bug.",
author: "Mark Twain",
url: "https://www.cmgww.com/historic/twain/about/quotes/",
favicon: "https://www.google.com/s2/favicons?domain=cmgww.com",
tags: ["precision", "word choice"]
},
{
id: 59,
quote: "Your intuition knows what to write, so get out of the way.",
author: "Ray Bradbury",
url: "https://raybradbury.com/quotes.html",
favicon: "https://www.google.com/s2/favicons?domain=raybradbury.com",
tags: ["intuition", "flow"]
},
{
id: 60,
quote: "I write entirely to find out what I'm thinking, what I'm looking at, what I see and what it means.",
author: "Joan Didion",
url: "https://www.goodreads.com/quotes/24333-i-write-entirely-to-find-out-what-i-m-thinking-what",
favicon: "https://www.google.com/s2/favicons?domain=goodreads.com",
tags: ["self-discovery", "meaning"]
}
],
Marketing: [
{
id: 61,
quote: "Marketing is no longer about the stuff that you make, but about the stories you tell.",
author: "Seth Godin",
url: "https://seths.blog/",
favicon: "https://www.google.com/s2/favicons?domain=seths.blog",
tags: ["storytelling", "branding"]
},
{
id: 62,
quote: "Content is king, but distribution is queen - and she wears the pants.",
author: "Jonathan Perelman",
url: "https://www.linkedin.com/in/jonathanperelman/",
favicon: "https://www.google.com/s2/favicons?domain=linkedin.com",
tags: ["content", "distribution"]
},
{
id: 63,
quote: "The aim of marketing is to know and understand the customer so well the product or service fits him and sells itself.",
author: "Peter Drucker",
url: "https://www.drucker.institute/perspective/about-peter-drucker/",
favicon: "https://www.google.com/s2/favicons?domain=drucker.institute",
tags: ["customer understanding", "product-market fit"]
},
{
id: 64,
quote: "Marketing's job is never done. It's about perpetual motion. We must continue to innovate every day.",
author: "Beth Comstock",
url: "https://www.bethcomstock.info/",
favicon: "https://www.google.com/s2/favicons?domain=bethcomstock.info",
tags: ["innovation", "continuous improvement"]
},
{
id: 65,
quote: "Authenticity, honesty, and personal voice underlie much of what's successful on the Web.",
author: "Rick Levine",
url: "https://www.cluetrain.com/",
favicon: "https://www.google.com/s2/favicons?domain=cluetrain.com",
tags: ["authenticity", "personal branding"]
},
{
id: 66,
quote: "In a crowded marketplace, fitting in is a failure. In a busy marketplace, not standing out is the same as being invisible.",
author: "Seth Godin",
url: "https://seths.blog/",
favicon: "https://www.google.com/s2/favicons?domain=seths.blog",
tags: ["differentiation", "standing out"]
},
{
id: 67,
quote: "Give them quality. That's the best kind of advertising.",
author: "Milton Hershey",
url: "https://www.thehersheycompany.com/en_us/home/about-hershey.html",
favicon: "https://www.google.com/s2/favicons?domain=thehersheycompany.com",
tags: ["quality", "product"]
},
{
id: 68,
quote: "Make the customer the hero of your story.",
author: "Ann Handley",
url: "https://annhandley.com/",
favicon: "https://www.google.com/s2/favicons?domain=annhandley.com",
tags: ["customer-centric", "storytelling"]
},
{
id: 69,
quote: "The best marketing doesn't feel like marketing.",
author: "Tom Fishburne",
url: "https://marketoonist.com/",
favicon: "https://www.google.com/s2/favicons?domain=marketoonist.com",
tags: ["authentic marketing", "user experience"]
},
{
id: 70,
quote: "If your stories are all about your products and services, that's not storytelling. It's a brochure. Give yourself permission to make the story bigger.",
author: "Jay Baer",
url: "https://www.convinceandconvert.com/",
favicon: "https://www.google.com/s2/favicons?domain=convinceandconvert.com",
tags: ["storytelling", "customer focus"]
},
{
id: 71,
quote: "Good content isn't about good storytelling. It's about telling a true story well.",
author: "Ann Handley",
url: "https://annhandley.com/",
favicon: "https://www.google.com/s2/favicons?domain=annhandley.com",
tags: ["authenticity", "storytelling"]
},
{
id: 72,
quote: "Don't be afraid to get creative and experiment with your marketing.",
author: "Mike Volpe",
url: "https://www.mikevolpe.com/",
favicon: "https://www.google.com/s2/favicons?domain=mikevolpe.com",
tags: ["creativity", "experimentation"]
},
{
id: 73,
quote: "Nobody reads ads. People read what interests them. Sometimes it's an ad.",
author: "Howard Gossage",
url: "https://www.aaaa.org/timeline-event/howard-gossage-in-the-1960s-advertising-must-be-interesting/",
favicon: "https://www.google.com/s2/favicons?domain=aaaa.org",
tags: ["relevance", "interest"]
},
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