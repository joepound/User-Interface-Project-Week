import React from 'react';

class Services extends React.Component {
  render() {
    return (
      <main className="services-container">
        <header className="services__header">
            <p>Services include: completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.</p>
        </header>
        <nav className="services__tabs">
            <h2 className="outline-guide">Services Navigation</h2>
            <div tabindex="0" className="services__tabs__link--selected" data-tab="Pre-construction">Pre-Construction</div>
            <div tabindex="0" className="services__tabs__link" data-tab="Construction">Construction</div>
            <div tabindex="0" className="services__tabs__link" data-tab="Design Build">Design Build</div>
            <div tabindex="0" className="services__tabs__link" data-tab="Sustainability">Sustainability</div>
        </nav>
        <article className="services__items">
            <h2 className="outline-guide">Our Services</h2>
            <article className="services__items__content--selected" data-tab="Pre-construction">
                <div className="services__items__content__text">
                    <h3 className="sub-header">Pre-Construction</h3>
                    <div className="services__items__content__text__desc">
                        <p>Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.</p>
                        <p>Phosfluorescently engage worldwide methodologies with web-enabled technology. Interactively coordinate proactive e-commerce via process-centric "outside the box" thinking. Completely pursue scalable customer service through sustainable potentialities.</p>
                    </div>
                </div>
                <figure className="services__items__content__photo">
                    <img className="desktop-image" src="img/services/services-tab-pre-construction-img.png" alt="Construction plans"/>
                    <img className="mobile-image" src="img/services/services-tab-mobile-pre-construction-img.png" alt="Construction plans"/>
                </figure>
            </article>
            <article className="services__items__content" data-tab="Construction">
                <div className="services__items__content__text">
                    <h3 className="sub-header">Construction</h3>
                    <div className="services__items__content__text__desc">
                        <p>Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.</p>
                        <p>Phosfluorescently engage worldwide methodologies with web-enabled technology. Interactively coordinate proactive e-commerce via process-centric "outside the box" thinking. Completely pursue scalable customer service through sustainable potentialities.</p>
                    </div>
                </div>
                <figure className="services__items__content__photo">
                    <img className="desktop-image" src="img/services/services-tab-construction-img.png" alt="Ongoing construction job"/>
                    <img className="mobile-image" src="img/services/services-tab-mobile-construction-img.png" alt="Ongoing construction job"/>
                </figure>
            </article>
            <article className="services__items__content" data-tab="Design Build">
                <div className="services__items__content__text">
                    <h3 className="sub-header">Design Build</h3>
                    <div className="services__items__content__text__desc">
                        <p>Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.</p>
                        <p>Phosfluorescently engage worldwide methodologies with web-enabled technology. Interactively coordinate proactive e-commerce via process-centric "outside the box" thinking. Completely pursue scalable customer service through sustainable potentialities.</p>
                    </div>
                </div>
                <figure className="services__items__content__photo">
                    <img className="desktop-image" src="img/services/services-tab-design-build-img.png" alt="Team meeting about design plans"/>
                    <img className="mobile-image" src="img/services/services-tab-mobile-design-build-img.png" alt="Team meeting about design plans"/>
                </figure>
            </article>
            <article className="services__items__content" data-tab="Sustainability">
                <div className="services__items__content__text">
                    <h3 className="sub-header">Sustainability</h3>
                    <div className="services__items__content__text__desc">
                        <p>Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.</p>
                        <p>Phosfluorescently engage worldwide methodologies with web-enabled technology. Interactively coordinate proactive e-commerce via process-centric "outside the box" thinking. Completely pursue scalable customer service through sustainable potentialities.</p>
                    </div>
                </div>
                <figure className="services__items__content__photo">
                    <img className="desktop-image" src="img/services/services-tab-sustainability-img.png" alt="Field surrounded by tall buildings"/>
                    <img className="mobile-image" src="img/services/services-tab-mobile-sustainability-img.png" alt="Field surrounded by tall buildings"/>
                </figure>
            </article>
        </article>
      </main>
    );
  }
}

export default Services;