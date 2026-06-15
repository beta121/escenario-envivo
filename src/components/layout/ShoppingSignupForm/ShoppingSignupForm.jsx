import { useState } from 'react';
import { TextField, Button, CheckBox } from '../../ui';
import shoppingForm from '../../../shared/assets/interface/shopping-form.png';
import './style.css';

const OPTIONS = [
  {
    id: 'dramatic',
    label: (
      <>
        DRAMATIC <br /> INFLUENCERS
      </>
    ),
  },
  {
    id: 'guaranteed',
    label: (
      <>
        GUARANTEED <br /> GIVEAWAYS
      </>
    ),
  },
  {
    id: 'discounts',
    label: (
      <>
        HUGE <br /> DISCOUNTS
      </>
    ),
  },
  {
    id: 'feedback',
    label: (
      <>
        INFLUENCER <br /> FEEDBACK
      </>
    ),
  },
  {
    id: 'products',
    label: (
      <>
        UNIQUE <br /> PRODUCTS
      </>
    ),
  },
  {
    id: 'finds',
    label: (
      <>
        UNIQUE <br /> FINDS
      </>
    ),
  },
];

export const ShoppingSignupForm = ({ onSuccess }) => {
  const [selectedIds, setSelectedIds] = useState([]);
  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState('');

  const handleToggle = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
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
    console.log('Выбранные ID:', selectedIds);
    console.log('Email:', email);
    onSuccess();
  };

  return (
    <div className="shopping-form">
      <div className="shopping-form-left">
        <h3 className="shopping-form-title">WHAT EXCITES YOU?</h3>

        <form
          style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}
          onSubmit={handleSubmit}
        >
          <div className="shopping-actions">
            {OPTIONS.map((option) => (
              <CheckBox
                key={option.id}
                label={option.label}
                value={option.id}
                checked={selectedIds.includes(option.id)}
                onChange={handleToggle}
              />
            ))}
          </div>
          <TextField placeholder="Your email" type="email" value={email} onChange={handleEmail} />
          <div
            style={{
              marginTop: '25px',
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
            }}
          >
            <div style={{ width: '168px', flexShrink: 0 }}>
              <Button
                onClick={handleSubmit}
                disabled={!!errorEmail || !email || !selectedIds.length}
              >
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
      <div className="shopping-form-right">
        <img src={shoppingForm} />
      </div>
    </div>
  );
};
