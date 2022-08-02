import { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {   
    return (
        <section className="section-box">
          <h1 data-testid="h1tag">Contact me</h1>
          <br></br>
          <p>
            Feel free to reach out via email <a href='mailto:antrellkent@gmail.com'>antrellkent@gmail</a>.  I look forward to hearing from you.
          </p>
        </section>
      );
}

export default ContactForm;