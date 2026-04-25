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

export const SellerSignupForm = ({ onClose }) => {
  const [country, setCountry] = useState(null);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleCountryChange = (selectedObject) => {
    setCountry(selectedObject);
    console.log('Country Name:', selectedObject.code);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Выбранные ID:', name);
    console.log('Email:', email);
    console.log('country:', country);
    onClose();
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
          <TextField
            placeholder="Your email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Select
            items={countries}
            selectedItem={country}
            onSelect={handleCountryChange}
            placeholder="Primary Country"
          />
          <div style={{ width: '168px', marginTop: '15px' }}>
            <Button onClick={handleSubmit}>START SELLING</Button>
          </div>
        </form>
      </div>
      <div className="seller-form-right">
        <img src={sellerForm} />
      </div>
    </div>
  );
};
