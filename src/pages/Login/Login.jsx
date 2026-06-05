import { useState } from 'react';
import { TextField } from '../../components/ui';
import loginImg from '../../shared/assets/login-img.png';
import './style.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="login-screen">
      <div className="login-card">
        <div className="login-image-container">
          <img src={loginImg} alt="Welcome" className="login-image" />
        </div>

        <div className="login-form-container">
          <h1 className="login-title">
            <span className="accent-text">WELCOME</span> <br className="desktop-break" />
            {/* Тег для переноса */}BACK!
          </h1>

          <form className="login-form" onSubmit={(e) => e.preventDefault()}>
            <div className="inputs-group">
              <TextField
                placeholder="Your email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <TextField
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="buttons-group">
              <button type="submit" className="login-btn login-btn-primary">
                Log in
              </button>
              <button type="button" className="login-btn login-btn-secondary">
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
