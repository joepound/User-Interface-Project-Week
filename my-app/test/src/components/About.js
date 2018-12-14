import React from 'react';

class About extends React.Component {
  render() {
    return (
      <main className="about-container">
        <div className="about__tabs">
            <h2 className="outline-guide">S&J Teams</h2>
            <div className="about__tabs__teams">
                <span className="about__tabs__teams__header">OUR TEAMS:</span>
                <span data-team="all" className="about__tabs__teams__item about__tabs__teams__item--active-team">ALL</span>
                <h3 data-team="blue-team" className="about__tabs__teams__item">Blue Team</h3>
                <h3 data-team="red-team" className="about__tabs__teams__item">Red Team</h3>
            </div>
        </div>
        <div className="about__cards">
            <h2 className="outline-guide">S&J Team Members</h2>
            <div className="about__cards__item" data-team="blue-team">
                <div className="about__cards__item__info">
                    <h3 className="about__cards__item__info__name">Smith</h3>
                    <span className="about__cards__item__info__blue-label">BLUE TEAM</span>
                </div>
                <img className="about__cards__item__photo" src="img/about/about-smith-img.png" alt=""/>
                <div className="about__cards__item__description">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima consequatur fuga eaque quasi, tempore quae distinctio quam sint minus.</p>
                    <p>Nihil earum id dolorum magnam? Dolorem porro et vitae quasi delectus!</p>
                </div>
            </div>
            <div className="about__cards__item" data-team="red-team">
                <div className="about__cards__item__info">
                    <h3 className="about__cards__item__info__name">Jones</h3>
                    <span className="about__cards__item__info__red-label">RED TEAM</span>
                </div>
                <img className="about__cards__item__photo" src="img/about/about-jones-img.png" alt=""/>
                <div className="about__cards__item__description">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima consequatur fuga eaque quasi, tempore quae distinctio quam sint minus.</p>
                    <p>Nihil earum id dolorum magnam? Dolorem porro et vitae quasi delectus!</p>
                </div>
            </div>
        </div>
      </main>
    );
  }
}

export default About;