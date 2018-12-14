import React from 'react';

class Contact extends React.Component {
  render() {
    return (
      <main className="contact-container">
				<section className="contact__form">
					<h2 className="sub-header">Get In Touch</h2>
					<div className="contact__form__details">
						<div className="contact__form__details__field">
							<label className="contact__form__details__field__label">Email address</label>
							<input className="contact__form__details__field__email" type="email" placeholder="Enter email"/>
							<span className="contact__form__details__field__note">We'll never share your email with anyone else.</span>
						</div>
						<div className="contact__form__details__field">
							<label className="contact__form__details__field__label">How many buildings do you need planned?</label>
							<input className="contact__form__details__field__building-count" type="number" min="1" value="1"/>
						</div>
						<div className="contact__form__details__field">
							<label className="contact__form__details__field__label">Provide a brief overview of your project needs:</label>
							<textarea className="contact__form__details__field__overview"></textarea>
						</div>
						<div className="contact__form__details__field">
							<span className="contact__form__details__field__client-type">
								<input type="radio" name="client-type-option" value="business"/> I am a small business
							</span>
							<span className="contact__form__details__field__client-type">
								<input type="radio" name="client-type-option" value="residence"/> I am a residential owner
							</span>
							<span className="contact__form__details__field__client-type">
								<input type="radio" name="client-type-option" value="corporation"/> I am a corporation
							</span>
						</div>
						<div tabindex="0" className="contact__form__details__submit-button">Submit</div>
					</div>
				</section>
				<article className="contact__workplaces">
					<h2 className="sub-header">Where We Work</h2>
					<address className="contact__workplaces__branch">
						<h3 className="contact__workplaces__branch__name">New York</h3>
						<p className="contact__workplaces__branch__street">123 Lane</p>
						<p className="contact__workplaces__branch__suite">Suite 100</p>
						<p className="contact__workplaces__branch__city-state-zip">Albany, NY 12345</p>
						<p className="contact__workplaces__branch__contact-number">202 555 0144</p>
					</address>
					<address className="contact__workplaces__branch">
						<h3 className="contact__workplaces__branch__name">Florida</h3>
						<p className="contact__workplaces__branch__street">Ocean Drive</p>
						<p className="contact__workplaces__branch__suite">Suite 201</p>
						<p className="contact__workplaces__branch__city-state-zip">Orlando, FL 22345</p>
						<p className="contact__workplaces__branch__contact-number">502 555 0144</p>
					</address>
					<address className="contact__workplaces__branch">
						<h3 className="contact__workplaces__branch__name">California</h3>
						<p className="contact__workplaces__branch__street">Mountain Street</p>
						<p className="contact__workplaces__branch__suite">Suite 105</p>
						<p className="contact__workplaces__branch__city-state-zip">San Diego, CA 22345</p>
						<p className="contact__workplaces__branch__contact-number">702 555 0144</p>
					</address>
				</article>
			</main>
    );
  }
}

export default Contact;