import React, { useRef, useState} from 'react';
import { toast } from 'react-toastify';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';

import Input from '../Input/input';
import googleLogo from '../../assets/icons/google-logo.svg';

import * as Yup from 'yup';

import './style.scss';

function SignupForm() {

  const [ sending, setSending ] = useState(false);

  const formRef = useRef(null)

  async function handleSubmit(data, { reset }){  
    setSending(true);  
    try {
      const schema = Yup.object().shape({
        fullname: Yup.string().min(6, 'The full name must contain at least 3 characters').required('Full name is required'),
        username: Yup.string().required('Username or E-mail is required'),
        password: Yup.string().min(6, 'The password must contain at least 6 characters').required('Password is required')
      })
  
      await schema.validate(data, {
        abortEarly: false
      })

      formRef.current.setErrors({});

      reset();
      setTimeout(() => {
        setSending(false);
        toast.success("Signup success")
      }, 2000)
    } catch (error) {
        setSending(false);
        if( error instanceof Yup.ValidationError){
          
          const errorMessages = {};
          
          error.inner.forEach( err => {
            errorMessages[err.path] = err.message
          })

          formRef.current.setErrors(errorMessages);
        }

    }
  }

  const comingSoon = () => {
    console.log('Cmonnig')
    toast.info("Coming Soon")
  }

  return (
     <section className="signupForm">
      <Form ref={formRef} onSubmit={handleSubmit}>
      <div className="field">
        <small>Full Name</small>
        <Input name="fullname" autoComplete="false"/>
       </div>
       <div className="field">
        <small>Username or E-mail</small>
        <Input name="username" autoComplete="false"/>
       </div>
        <div className="field">
        <small>Password</small>
        <Input name="password" type="password" autoComplete="new-password"/>
        </div>
        <button type="submit" className={ sending ? 'submitBtn sending' : 'submitBtn'}>
          { !sending ? 'Sign in' : <i className="fa fa-spinner fa-spin"></i> }
        </button>
        <div className="dividerArea">
          <div className="divider"></div>
            <span>Or</span>
          <div className="divider"></div>
        </div>
        <button className="googleBtn" type="submit" onClick={comingSoon}>
          <img src={googleLogo}  className="googleLogo" alt="Logotipo Google"/>
          Sign in with Google
        </button>
        <div className="aditionalInfos">
          <small>
          By signing up, you agree to <b>Invision</b>
          </small>
          <small>
          <a onClick={comingSoon}>Terms of Conditions</a> and <a onClick={comingSoon}>Privacy Policy</a>
          </small>
          <small>
            Already on <b>Invision</b>? <Link to="/">Log in</Link>
          </small>
        </div>
      </Form>
     </section>
  );
}

export default SignupForm;