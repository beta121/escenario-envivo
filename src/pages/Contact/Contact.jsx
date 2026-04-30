import { useState } from 'react';
import { TextField, Button } from '../../components/ui';
import contactSupport from '../../shared/assets/contactSupport.png';
import './style.css';

const initialFormState = {
  name: '',
  company: '',
  phone: '',
  email: '',
  message: '',
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    message: '',
  });
  const [errorEmail, setErrorEmail] = useState('');

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    if (field === 'email') {
      const regex = /^[\w\.-]+@[\w\.-]+\.\w+$/;
      if (value.trim() === '' || regex.test(value.trim())) {
        setErrorEmail('');
      } else {
        setErrorEmail('Please enter a valid email address.');
      }
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    console.log('Form Submitted Data:', formData);

    setFormData(initialFormState);
  };

  const isFormInvalid =
    !!errorEmail || !formData.name || !formData.email || !formData.phone || !formData.message;

  return (
    <div className="contact__page">
      <div className="contact__image">
        <img src={contactSupport} alt="Support" />
      </div>

      <div className="contact__form-container">
        <div className="contact-form__text">
          <h4 className="contact-form__title">Get in touch</h4>
          <p className="contact-form-description">We welcome new connections and feedback</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <TextField
            label="Name"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
          />
          <TextField
            label="Company"
            placeholder="Google"
            value={formData.company}
            onChange={(e) => handleChange('company', e.target.value)}
          />
          <TextField
            label="Email"
            placeholder="example@mail.com"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
          />
          <TextField
            label="Phone Number"
            placeholder="+1 012 3456 789"
            value={formData.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
          />
          <TextField
            className="contact-form__input-full"
            label="How can we help?"
            placeholder="Write your message.."
            value={formData.message}
            onChange={(e) => handleChange('message', e.target.value)}
          />

          <div className="contact-form__button-wrapper">
            {errorEmail && (
              <p
                style={{
                  color: '#FF4D4F',
                  fontSize: '13px',
                  lineHeight: '1.2',
                  margin: 0,
                  fontWeight: '500',
                }}
              >
                {errorEmail}
              </p>
            )}

            <Button disabled={isFormInvalid}>Send Message</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
