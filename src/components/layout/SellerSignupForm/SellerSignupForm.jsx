import { useState } from 'react';
import { TextField, Select, Button } from '../../ui';
import sellerForm from '../../../shared/assets/interface/seller-form.png';
import './style.css';

const countries = [
  { name: 'USA', code: 'us', img: 'https://flagcdn.com/w40/us.png' },
  { name: 'MEXICO', code: 'mx', img: 'https://flagcdn.com/w40/mx.png' },
  { name: 'GUATEMALA', code: 'gt', img: 'https://flagcdn.com/w40/gt.png' },
  { name: 'DOMINICAN REP.', code: 'do', img: 'https://flagcdn.com/w40/do.png' },
  { name: 'HONDURAS', code: 'hn', img: 'https://flagcdn.com/w40/hn.png' },
  { name: 'EL SALVADOR', code: 'sv', img: 'https://flagcdn.com/w40/sv.png' },
  { name: 'NICARAGUA', code: 'ni', img: 'https://flagcdn.com/w40/ni.png' },
  { name: 'COSTA RICA', code: 'cr', img: 'https://flagcdn.com/w40/cr.png' },
  { name: 'PANAMA', code: 'pa', img: 'https://flagcdn.com/w40/pa.png' },
  { name: 'PUERTO RICO', code: 'pr', img: 'https://flagcdn.com/w40/pr.png' },
  { name: 'COLOMBIA', code: 'co', img: 'https://flagcdn.com/w40/co.png' },
  { name: 'CANADA', code: 'ca', img: 'https://flagcdn.com/w40/ca.png' },
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
