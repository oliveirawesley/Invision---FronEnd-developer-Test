import React from 'react';

import './style.scss';
import SignupForm from '../../components/SignupForm';
import Slider from '../../components/Slider';

function Signup() {
  return (
    <section className="signup">
      <div className="leftSide">
        <Slider />
      </div>
      <div className="rightSide">
        <div className="logo">
          <h1>Invision</h1>
        </div>
        <h2>Getting Started</h2>
        <SignupForm />
      </div>
    </section>
  );  
}

export default Signup;