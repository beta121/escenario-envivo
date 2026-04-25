import { useState } from 'react';
import { TextField, Button, CheckBox } from '../../ui';
import shoppingForm from '../../../shared/assets/shopping-form.png';
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

  const handleToggle = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
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
          <TextField
            placeholder="Your email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div style={{ width: '168px', marginTop: '15px' }}>
            <Button onClick={handleSubmit}> FIND YOUR JOY</Button>
          </div>
        </form>
      </div>
      <div className="shopping-form-right">
        <img src={shoppingForm} />
      </div>
    </div>
  );
};
