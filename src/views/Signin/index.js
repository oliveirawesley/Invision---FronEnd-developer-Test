import React from 'react';

import './style.scss';
import SigninForm from '../../components/SigninForm';
import Slider from '../../components/Slider';

function Signin() {
  return (
    <section className="signin">
      <div className="leftSide">
        <Slider />
      </div>
      <div className="rightSide">
        <div className="logo">
          <h1>Invision</h1>
        </div>
        <h2>Welcome to Invision</h2>
        <SigninForm />
      </div>
    </section>
  );  
}

export default Signin;