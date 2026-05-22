import { useState } from 'react';
import { TextField, Select, Button } from '../../ui';
import sellerForm from '../../../shared/assets/seller-form.png';
import './style.css';

const countries = [
  { name: 'CANADA', code: 'CA', img: 'https://flagcdn.com/w40/ca.png' },
  { name: 'COLOMBIA', code: 'CO', img: 'https://flagcdn.com/w40/co.png' },
  { name: 'MEXICO', code: 'MX', img: 'https://flagcdn.com/w40/mx.png' },
  { name: 'ARGENTINA', code: 'AR', img: 'https://flagcdn.com/w40/ar.png' },
  { name: 'BRAZIL', code: 'BR', img: 'https://flagcdn.com/w40/br.png' },
  { name: 'UKRAINE', code: 'UA', img: 'https://flagcdn.com/w40/ua.png' },
  { name: 'USA', code: 'US', img: 'https://flagcdn.com/w40/us.png' },
  { name: 'GERMANY', code: 'DE', img: 'https://flagcdn.com/w40/de.png' },
];

export const SellerSignupForm = ({ onSuccess }) => {
  const [country, setCountry] = useState(null);
  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [name, setName] = useState('');

  const handleCountryChange = (selectedObject) => {
    setCountry(selectedObject);
  };

  const handleEmail = (e) => {
    const regex = /^[\w\.-]+@[\w\.-]+\.\w+$/;
    const value = e.target.value;

    setEmail(value);

    if (value.trim() === '') {
      setErrorEmail('');
    } else if (regex.test(value.trim())) {
      setErrorEmail('');
    } else {
      setErrorEmail('Please enter a valid email address.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Выбранные ID:', name);
    console.log('Email:', email);
    console.log('country:', country);
    onSuccess();
  };

  return (
    <div className="seller-form">
      <div className="seller-form-left">
        <h4 className="seller-form-title">
          <p>START YOUR LIVE</p>
          <p style={{ color: '#757575', fontWeight: 900 }}>STREAMING</p>
          <p>EMPIRE</p>
        </h4>
        <form className="seller-forms">
          <TextField
            placeholder="Name of your Shop"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField placeholder="Your email" type="email" value={email} onChange={handleEmail} />

          <Select
            items={countries}
            selectedItem={country}
            onSelect={handleCountryChange}
            placeholder="Primary Country"
          />
          <div
            style={{
              marginTop: '25px',
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
            }}
          >
            <div style={{ width: '168px', flexShrink: 0 }}>
              <Button onClick={handleSubmit} disabled={!!errorEmail || !email || !name || !country}>
                START SELLING
              </Button>
            </div>

            <div style={{ minHeight: '40px', display: 'flex', alignItems: 'center' }}>
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
            </div>
          </div>
        </form>
      </div>
      <div className="seller-form-right">
        <img src={sellerForm} />
      </div>
    </div>
  );
};
