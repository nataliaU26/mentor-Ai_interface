import { IoPersonSharp,IoBag } from "react-icons/io5";
import React, { useState } from 'react';

function SignUpForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginregister = (event) => {
    event.preventDefault();
    console.log('User Signed Up:', { email, password });

  };

  
  return (
    <div className="signup-form-container">
      <div className="container">
          <div className="header">
            <div className="text1">Mentor-IA | Monitor</div>
            <div className="text2">Login</div>
            <div className="underline"></div>
          </div>
      
          <form onSubmit={loginregister}>
              <div className="input">
                <div className="inputs">
                  <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                  <label htmlFor="email" className={email ? 'filled' : ''}>Email Address</label>
                </div>
                <div className="inputs">
                  <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                  <label htmlFor="password" className={password ? 'filled' : ''}>Password</label>
                </div>
                
              </div>
  
        <div className="actions">
          <button type="submit" className='submit-button'>Continue</button>
        </div>
      </form>
      </div>
      
    </div>
  );
}

export default SignUpForm;
