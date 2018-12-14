import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer className="page-footer">
        <div className="footer__content">
          <div className="footer__content__email-form">
            <p className="footer-heading">Interested in starting a project?<br />Let's talk:</p>
            <input type="email" placeholder="Enter email" />
            <p>We'll never share your email with anyone else.</p>
          </div>
          <address className="footer__content__address">
            <p className="footer-heading footer__content__address__name">New York</p>
            <p className="footer__content__address__street">123 Lane</p>
            <p className="footer__content__address__suite">Suite 100</p>
            <p className="footer__content__address__city-state-zip">Albany, NY 12345</p>
            <p className="footer__content__address__contact-number">202 555 0144</p>
          </address>
          <address className="footer__content__address">
            <p className="footer-heading footer__content__address__name">Florida</p>
            <p className="footer__content__address__street">Ocean Drive</p>
            <p className="footer__content__address__suite">Suite 201</p>
            <p className="footer__content__address__city-state-zip">Orlando, FL 22345</p>
            <p className="footer__content__address__contact-number">502 555 0144</p>
          </address>
          <address className="footer__content__address">
            <p className="footer-heading footer__content__address__name">California</p>
            <p className="footer__content__address__street">Mountain Street</p>
            <p className="footer__content__address__suite">Suite 105</p>
            <p className="footer__content__address__city-state-zip">San Diego, CA 22345</p>
            <p className="footer__content__address__contact-number">702 555 0144</p>
          </address>
        </div>
        <p className="footer__copyright">Copyright &copy; 2018 Smith and Jones</p>
      </footer>
    );
  }
}

export default Footer;