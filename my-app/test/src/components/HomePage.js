import React from 'react';

class HomePage extends React.Component {
  render() {
    return (
      <main className="home-container">
        <header className="home__intro">
          <section className="home__intro__item scrollGroup1">
            <div className="home__intro__item__text">
              <h2 className="sub-header">Smith & Jones Architects</h2>
              <p>Et sed autem causae appareat, tempor abhorreant te mei, facer facilisis sit ea. Eu timeam vidisse consectetuer sed. Duo etiam laboramus dissentiet in, nec no errem.</p>
              <a href="about.html" className="home__intro__item__text__info-button">Learn More</a>
            </div>
            <figure className="home__intro__item__photo">
              <img className="desktop-image" src="img/home/home-img-1.png" alt="Architectural plans" />
              <img className="mobile-image" src="img/home/home-mobile-img-1.png" alt="Architectural plans" />
            </figure>
          </section>
          <section className="home__intro__item scrollGroup2">
            <div className="home__intro__item__text">
              <h2 className="sub-header">Futuristic Designs</h2>
              <p>Et sed autem causae appareat, tempor abhorreant te mei, facer facilisis sit ea. Eu timeam vidisse consectetuer sed. Duo etiam laboramus dissentiet in, nec no errem.</p>
              <a href="projects.html" className="home__intro__item__text__info-button">View Designs</a>
            </div>
            <figure className="home__intro__item__photo">
              <img className="desktop-image" src="img/home/home-img-2.png" alt="Futuristic design" />
              <img className="mobile-image" src="img/home/home-mobile-img-2.png" alt="Futuristic design" />
            </figure>
          </section>
        </header>
        <article className="home__recent-proj">
          <h2 className="sub-header scrollGroup3">Recent Projects</h2>
          <article className="home__recent-proj__item scrollGroup3">
            <h3 className="outline-guide">The Villas</h3>
            <figure className="home__recent-proj__item__photo">
              <img className="desktop-image" src="img/home/home-villas-img.png" alt="The Villas project" />
              <img className="mobile-image" src="img/home/home-mobile-villas-img.png" alt="The Villas project" />
              <figcaption className="home__recent-proj__item__photo__desc">THE VILLAS</figcaption>
            </figure>
            <div className="home__recent-proj__item__text">
              <p>The Villas bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.</p>
              <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
            </div>
          </article>
          <article className="home__recent-proj__item scrollGroup4">
            <h3 className="outline-guide">Outskirts</h3>
            <figure className="home__recent-proj__item__photo">
              <img className="desktop-image" src="img/home/home-outskirts-img.png" alt=" The Outskirts project" />
              <img className="mobile-image" src="img/home/home-mobile-outskirts-img.png" alt="The Outskirts project" />
              <figcaption className="home__recent-proj__item__photo__desc">OUTSKIRTS</figcaption>
            </figure>
            <div className="home__recent-proj__item__text">
              <p>The Outskirts are amazing to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.</p>
              <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line</p>
            </div>
          </article>
          <article className="home__recent-proj__item scrollGroup5">
            <h3 className="outline-guide">The Blocks</h3>
            <figure className="home__recent-proj__item__photo">
              <img className="desktop-image" src="img/home/home-the-blocks-img.png" alt="The Blocks project" />
              <img className="mobile-image" src="img/home/home-mobile-the-blocks-img.png" alt="The Blocks project" />
              <figcaption className="home__recent-proj__item__photo__desc">THE BLOCKS</figcaption>
            </figure>
            <div className="home__recent-proj__item__text">
              <p>The Blocks are amazing to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. </p>
              <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
            </div>
          </article>
        </article>
      </main>
    );
  }
}

export default HomePage;