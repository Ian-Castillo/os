import React, { useState, useEffect } from 'react';
import './Bookmarks.css'; // Ensure your CSS file is linked

const bookmarksData = [
  {
    id: 1,
    title: "Paul Graham Essays",
    url: "http://paulgraham.com/articles.html",
    description: "Insightful essays covering startups, technology, and programming by Paul Graham.",
    favicon: "https://www.google.com/s2/favicons?domain=paulgraham.com"
  },
  {
    id: 2, 
    title: "Pmarca's Blog",
    url: "https://pmarchive.com/",
    description: "Marc Andreessen's blog capturing key insights on venture capital and technology.",
    favicon: "https://www.google.com/s2/favicons?domain=pmarchive.com"
  },
  {
    id: 3,
    title: "Sam Altman's Blog", 
    url: "https://blog.samaltman.com/",
    description: "Thoughts on startups, technology, and the future from Sam Altman.",
    favicon: "https://www.google.com/s2/favicons?domain=samaltman.com"
  },
  {
    id: 4,
    title: "Stratechery by Ben Thompson",
    url: "https://stratechery.com/", 
    description: "In-depth commentary on tech and media strategy by Ben Thompson.",
    favicon: "https://www.google.com/s2/favicons?domain=stratechery.com"
  },
  {
    id: 5,
    title: "a16z Blog",
    url: "https://a16z.com/articles/",
    description: "Articles on technology, business, and culture from Andreessen Horowitz.",
    favicon: "https://www.google.com/s2/favicons?domain=a16z.com"
  },
  {
    id: 6,
    title: "First Round Review",
    url: "https://review.firstround.com/",
    description: "Actionable insights for entrepreneurs and operators from First Round Capital.",
    favicon: "https://www.google.com/s2/favicons?domain=firstround.com"
  },
  {
    id: 7,
    title: "Steve Blank's Blog", 
    url: "https://steveblank.com/",
    description: "Posts on customer development, lean startup, and entrepreneurship by Steve Blank.",
    favicon: "https://www.google.com/s2/favicons?domain=steveblank.com"
  },
  {
    id: 8,
    title: "Ben Horowitz's Blog",
    url: "https://a16z.com/author/ben-horowitz/",
    description: "Writings on leadership, company culture, and entrepreneurship by Ben Horowitz.",
    favicon: "https://www.google.com/s2/favicons?domain=a16z.com"
  },
  {
    id: 9,
    title: "Y Combinator Blog",
    url: "https://www.ycombinator.com/blog/",
    description: "Advice and insights for startups from Y Combinator partners and alumni.",
    favicon: "https://www.google.com/s2/favicons?domain=ycombinator.com"
  },
  {
    id: 10,
    title: "Andrew Chen's Blog",
    url: "https://andrewchen.com/",
    description: "Essays on startups, growth, metrics, and network effects by Andrew Chen.",
    favicon: "https://www.google.com/s2/favicons?domain=andrewchen.com"
  },
  {
    id: 11,
    title: "Lenny's Newsletter",
    url: "https://www.lennysnewsletter.com/",
    description: "A weekly advice column about product, growth, and working with humans.",
    favicon: "https://www.google.com/s2/favicons?domain=lennysnewsletter.com"
  },
  {
    id: 12,
    title: "John Collison's Blog",
    url: "https://jcollison.blogspot.com/", 
    description: "Perspectives on startups and scaling from Stripe co-founder John Collison.",
    favicon: "https://www.google.com/s2/favicons?domain=blogspot.com"
  },
  {
    id: 13,
    title: "Aaron Levie's SMACK",
    url: "https://blog.box.com/author/aaronlevie/",
    description: "Thoughts on the future of work and technology from Box CEO Aaron Levie.",
    favicon: "https://www.google.com/s2/favicons?domain=box.com"
  },
  {
    id: 14, 
    title: "Index Ventures Blog",
    url: "https://www.indexventures.com/perspectives",
    description: "Insights on tech, startups and venture capital from Index Ventures.",
    favicon: "https://www.google.com/s2/favicons?domain=indexventures.com"
  },
  {
    id: 15,
    title: "Benedict Evans' Newsletter", 
    url: "https://www.ben-evans.com/newsletter",
    description: "Analysis of the tech industry and future technology trends by Benedict Evans.",
    favicon: "https://www.google.com/s2/favicons?domain=ben-evans.com"
  },
  {
    id: 16,
    title: "Matthew Ball's Blog",
    url: "https://www.matthewball.vc/",
    description: "Writings on the Metaverse, gaming, and technology by venture capitalist Matthew Ball.",
    favicon: "https://www.google.com/s2/favicons?domain=matthewball.vc"
  },
  {
    id: 17,
    title: "Berkshire Hathaway Shareholder Letters",
    url: "https://www.berkshirehathaway.com/letters/letters.html",
    description: "Wisdom on investing and business from Warren Buffett's annual letters.",
    favicon: "https://www.google.com/s2/favicons?domain=berkshirehathaway.com"
  },
  {
    id: 18,
    title: "Howard Marks Memos",
    url: "https://www.oaktreecapital.com/insights/howard-marks-memos",
    description: "Memos on the economy, markets, and investing from Oaktree's Howard Marks.",
    favicon: "https://www.google.com/s2/favicons?domain=oaktreecapital.com"
  },
  {
    id: 19, 
    title: "Aswath Damodaran's Musings on Markets",
    url: "http://aswathdamodaran.blogspot.com/",
    description: "Insights on corporate finance, valuation, and markets by Professor Aswath Damodaran.",
    favicon: "https://www.google.com/s2/favicons?domain=blogspot.com"
  },
  {
    id: 20, 
    title: "Collaborative Fund Blog",
    url: "https://www.collaborativefund.com/blog/",
    description: "Perspectives on investing and business by Morgan Housel and team.",
    favicon: "https://www.google.com/s2/favicons?domain=collaborativefund.com"
  },
  {
    id: 21,
    title: "JP Morgan Annual CEO Letters",
    url: "https://www.jpmorganchase.com/ir/annual-report-proxy",
    description: "Annual shareholder letters from JP Morgan CEO Jamie Dimon.",
    favicon: "https://www.google.com/s2/favicons?domain=jpmorganchase.com"
  },
  {
    id: 22,
    title: "Warren Buffett's Partnership Letters",
    url: "https://www.rbcpa.com/warren_buffet_partnership_letters_pdf.html",
    description: "Early investment partnership letters from Warren Buffett before Berkshire Hathaway.",
    favicon: "https://www.google.com/s2/favicons?domain=rbcpa.com"
  },
  {
    id: 23,
    title: "Flirting with Models", 
    url: "https://blog.thinknewfound.com/blog/",
    description: "Quantitative finance, asset allocation, and factor investing tactics.",
    favicon: "https://www.google.com/s2/favicons?domain=thinknewfound.com"
  },
  {
    id: 24,
    title: "The Diff",
    url: "https://diff.substack.com/",
    description: "Inflections in finance and tech by Byrne Hobart.",
    favicon: "https://www.google.com/s2/favicons?domain=substack.com"
  },
  {
    id: 25,
    title: "Graham Duncan's Medium",
    url: "https://medium.com/@grahamduncan",
    description: "Thoughts on business, learning, stoicism, and decision making from Graham Duncan.",
    favicon: "https://www.google.com/s2/favicons?domain=medium.com"
  },
  {
    id: 26,
    title: "The Generalist",
    url: "https://www.readthegeneralist.com/",
    description: "Business breakdowns and analysis from The Generalist team.",
    favicon: "https://www.google.com/s2/favicons?domain=readthegeneralist.com"
  },
  {
    id: 27, 
    title: "Amazon Shareholder Letters",
    url: "https://ir.aboutamazon.com/annual-reports-proxies-and-shareholder-letters/default.aspx",
    description: "Jeff Bezos' annual letters to Amazon shareholders.",
    favicon: "https://www.google.com/s2/favicons?domain=aboutamazon.com"
  },
  {
    id: 28,
    title: "Constellation Software President's Letters",
    url: "https://www.csisoftware.com/category/presidents-letters/",
    description: "Memorable shareholder letters from Constellation Software CEO Mark Leonard.",
    favicon: "https://www.google.com/s2/favicons?domain=csisoftware.com"
  },
  {
    id: 29,
    title: "Bill Gurley's Above the Crowd",
    url: "https://abovethecrowd.com/",
    description: "Insights on venture capital, startups, and marketplaces from Bill Gurley.",
    favicon: "https://www.google.com/s2/favicons?domain=abovethecrowd.com"
  },
  {
    id: 30,
    title: "Memos from Howard Schultz to Starbucks",
    url: "https://news.starbucks.com/leadership",
    description: "Key business lessons from Howard Schultz's Starbucks memos and communications.",
    favicon: "https://www.google.com/s2/favicons?domain=starbucks.com"
  },
  {
    id: 31,
    title: "Certain to Win",
    url: "https://blog.leanpub.com/certaintowin",
    description: "Applying lessons from fighting to strategy in business from Chet Richards.",
    favicon: "https://www.google.com/s2/favicons?domain=leanpub.com"
  },
  {
    id: 32, 
    title: "Patrick Collison's Blog",
    url: "https://patrickcollison.com/",
    description: "Writings on entrepreneurship, progress, and learning from Stripe CEO Patrick Collison.",
    favicon: "https://www.google.com/s2/favicons?domain=patrickcollison.com"
  },
  {
    id: 33,
    title: "Farnam Street Blog",
    url: "https://fs.blog/",
    description: "Articles on decision making, learning, leadership and more to help you master life.",
    favicon: "https://www.google.com/s2/favicons?domain=fs.blog"
  },
  {
    id: 34,
    title: "Wait But Why",
    url: "https://waitbutwhy.com/", 
    description: "Long-form posts diving deep on a wide range of topics by Tim Urban.",
    favicon: "https://www.google.com/s2/favicons?domain=waitbutwhy.com"
  },
  {
    id: 35,
    title: "Ray Dalio's Principles",
    url: "https://www.principles.com/",
    description: "Life and work principles that Ray Dalio developed at Bridgewater Associates.",
    favicon: "https://www.google.com/s2/favicons?domain=principles.com"
  },
  {
    id: 36,
    title: "Rolf Dobelli's Blog",
    url: "https://www.dobelli.com/home-english/", 
    description: "Clear thinking and mental models from author Rolf Dobelli.",
    favicon: "https://www.google.com/s2/favicons?domain=dobelli.com"
  },
  {
    id: 37,
    title: "Peter Attia's The Drive",
    url: "https://peterattiamd.com/blog/",
    description: "Dr. Peter Attia's writings on health, wellness, longevity, and preventative medicine.",
    favicon: "https://www.google.com/s2/favicons?domain=peterattiamd.com"
  },
  {
    id: 38,
    title: "David Perell's Blog", 
    url: "https://perell.com/",
    description: "Essays on writing, learning, and the future of education by David Perell.",
    favicon: "https://www.google.com/s2/favicons?domain=perell.com"
  },
  {
    id: 39,
    title: "Tiago Forte's Praxis",
    url: "https://fortelabs.com/blog/",
    description: "Tiago Forte's insights and methods for productivity and knowledge management.",
    favicon: "https://www.google.com/s2/favicons?domain=fortelabs.com"
  },
  {
    id: 40,
    title: "Anne-Laure LeCunff's Blog",
    url: "https://nesslabs.com/blog",
    description: "Articles on productivity, learning, creativity and the mind from Anne-Laure Le Cunff.",
    favicon: "https://www.google.com/s2/favicons?domain=nesslabs.com"
  },
  {
    id: 41,
    title: "Nielsen Norman Group Articles",
    url: "https://www.nngroup.com/articles/",
    description: "Authoritative articles on UX research, testing, and design from Nielsen Norman Group.",
    favicon: "https://www.google.com/s2/favicons?domain=nngroup.com"
  },
  {
    id: 42,
    title: "Boxes and Arrows",
    url: "http://boxesandarrows.com/",
    description: "Exploring the design of information architecture, content and user experience.",
    favicon: "https://www.google.com/s2/favicons?domain=boxesandarrows.com"
  },
  {
    id: 43,
    title: "A List Apart",
    url: "https://alistapart.com/",
    description: "Insightful articles from digital design practitioners for people who make websites.",
    favicon: "https://www.google.com/s2/favicons?domain=alistapart.com"
  },
  {
    id: 44,
    title: "Smashing Magazine",
    url: "https://www.smashingmagazine.com/",
    description: "Articles and resources for designers and web developers from Smashing Magazine.",
    favicon: "https://www.google.com/s2/favicons?domain=smashingmagazine.com"
  },
  {
    id: 45, 
    title: "UX Collective",
    url: "https://uxdesign.cc/",
    description: "Stories on user experience, product design, and innovation curated by UX Collective.",
    favicon: "https://www.google.com/s2/favicons?domain=uxdesign.cc"
  },
  {
    id: 46,
    title: "UX Booth",
    url: "https://www.uxbooth.com/",
    description: "User experience articles to educate and inspire designers to create better experiences.",
    favicon: "https://www.google.com/s2/favicons?domain=uxbooth.com"
  },
  {
    id: 47,
    title: "UX Magazine",
    url: "https://uxmag.com/",
    description: "UX Magazine is a free community resource exploring experience design in all its facets.",
    favicon: "https://www.google.com/s2/favicons?domain=uxmag.com"
  },
  {
    id: 48,
    title: "UX Matters",
    url: "https://www.uxmatters.com/",
    description: "Insights and inspiration for the user experience community from UX thought leaders.",
    favicon: "https://www.google.com/s2/favicons?domain=uxmatters.com"
  },
  {
    id: 49, 
    title: "Designmodo",
    url: "https://designmodo.com/",
    description: "Articles, guides and resources on web design, UX, freelancing and more.",
    favicon: "https://www.google.com/s2/favicons?domain=designmodo.com"
  },
  {
    id: 50,
    title: "Design Milk",
    url: "https://design-milk.com/",
    description: "Covering the best in interior design, architecture, art, fashion and technology.",
    favicon: "https://www.google.com/s2/favicons?domain=design-milk.com"
  },
  {
    id: 51,
    title: "Abduzeedo",
    url: "https://abduzeedo.com/", 
    description: "Collective of individual writers sharing articles about design, photography and UX.",
    favicon: "https://www.google.com/s2/favicons?domain=abduzeedo.com"
  },
  {
    id: 52,
    title: "AIGA Eye on Design",
    url: "https://eyeondesign.aiga.org/",
    description: "Unexpected stories about the world's most creative people from AIGA's Eye on Design.",
    favicon: "https://www.google.com/s2/favicons?domain=aiga.org"
  },
  {
    id: 53,
    title: "Muzli",
    url: "https://medium.muz.li/",
    description: "Muzli's design inspiration blog covering UI/UX, visual design, creativity and more.",
    favicon: "https://www.google.com/s2/favicons?domain=medium.muz.li"
  },
  {
    id: 54,
    title: "The UX Blog",
    url: "https://theuxblog.com/",
    description: "Curated stories on user experience, usability and product design from The UX Blog.",
    favicon: "https://www.google.com/s2/favicons?domain=theuxblog.com"
  },
  {
    id: 55,
    title: "Eugene Wei's Blog",
    url: "https://www.eugenewei.com/",
    description: "Essays on technology, media, culture and more from Eugene Wei.",
    favicon: "https://www.google.com/s2/favicons?domain=eugenewei.com"
  },
  {
    id: 56,
    title: "Remains of the Day",
    url: "https://www.eugenewei.com/blog",
    description: "Eugene Wei's blog analyzing strategy and tactics across technology, media and culture.",
    favicon: "https://www.google.com/s2/favicons?domain=eugenewei.com"
  },
  {
    id: 57, 
    title: "Ribbonfarm",
    url: "https://www.ribbonfarm.com/", 
    description: "Longform essays on technology, culture and the philosophy of change by Venkatesh Rao.",
    favicon: "https://www.google.com/s2/favicons?domain=ribbonfarm.com"
  },
  {
    id: 58,
    title: "Marginal Revolution",
    url: "https://marginalrevolution.com/",
    description: "Tyler Cowen and Alex Tabarrok on economics, politics, and more.",
    favicon: "https://www.google.com/s2/favicons?domain=marginalrevolution.com"
  },
  {
    id: 59,
    title: "Kevin Kelly's Technium",
    url: "https://kk.org/thetechnium/",
    description: "Kevin Kelly's writings on the intersection of technology and culture.",
    favicon: "https://www.google.com/s2/favicons?domain=kk.org"
  },
  {
    id: 60,
    title: "Alexey Guzey's Site",
    url: "https://guzey.com/",
    description: "Writings on productivity, economics, technology and more from Alexey Guzey.",
    favicon: "https://www.google.com/s2/favicons?domain=guzey.com"
  },
  {
    id: 61, 
    title: "New Science",
    url: "https://guzey.com/new-science/",
    description: "Alexey Guzey's thoughts on how we can make scientific research more effective.",
    favicon: "https://www.google.com/s2/favicons?domain=guzey.com"
  },
  {
    id: 62,
    title: "The Outsider's Almanac",
    url: "https://outsidersalmanac.substack.com/", 
    description: "Max Olson's contrarian newsletter challenging default assumptions.",
    favicon: "https://www.google.com/s2/favicons?domain=substack.com"
  },
  {
    id: 63,
    title: "LessWrong",
    url: "https://www.lesswrong.com/",
    description: "LessWrong is a community blog devoted to rationality.",
    favicon: "https://www.google.com/s2/favicons?domain=lesswrong.com"
  },
  {
    id: 64,
    title: "GatesNotes",
    url: "https://www.gatesnotes.com/",
    description: "Bill Gates writes about what he's learning, along with occasional guests.",
    favicon: "https://www.google.com/s2/favicons?domain=gatesnotes.com"
  }
];

const Bookmarks = () => {
  const [selectedBookmark, setSelectedBookmark] = useState(null);

  const handleBookmarkClick = (bookmark) => {
      setSelectedBookmark(bookmark);
  };

  const handleBackClick = () => {
      setSelectedBookmark(null);
  };

  return (
      <div className="bookmarks-container">
          {(!selectedBookmark || window.innerWidth >= 768) && (
              <div className="bookmarks-sidebar">
                  <ul className="bookmarks-list">
                      {bookmarksData.map((bookmark) => (
                          <li key={bookmark.id} onClick={() => handleBookmarkClick(bookmark)}>
                              <div className="bookmark-info">
                                  <div className="bookmark-title">{bookmark.title}</div>
                                  <div className="bookmark-favicon-url">
                                      <img className="bookmark-favicon" src={bookmark.favicon} alt="" />
                                      <div className="bookmark-url">{bookmark.url.replace(/^https?:\/\//, '')}</div>
                                  </div>
                              </div>
                          </li>
                      ))}
                  </ul>
              </div>
          )}
          {selectedBookmark && window.innerWidth < 768 && (
              <div className="bookmark-details">
                  <button className="back-button" onClick={handleBackClick}>Back</button>
                  <h3>{selectedBookmark.title}</h3>
                  <p>{selectedBookmark.description}</p>
                  <a href={selectedBookmark.url} target="_blank" rel="noopener noreferrer">Visit</a>
              </div>
          )}
          {selectedBookmark && window.innerWidth >= 768 && (
              <div className="bookmark-details">
                  <h3>{selectedBookmark.title}</h3>
                  <p>{selectedBookmark.description}</p>
                  <a href={selectedBookmark.url} target="_blank" rel="noopener noreferrer">Visit</a>
              </div>
          )}
      </div>
  );
};

export default Bookmarks;