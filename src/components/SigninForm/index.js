import React, { useRef, useState} from 'react';
import { toast } from 'react-toastify';

import { Form } from '@unform/web';
import { Link } from "react-router-dom";

import Input from '../Input/input';
import googleLogo from '../../assets/icons/google-logo.svg';

import * as Yup from 'yup';

import './style.scss';

function SigninForm() {

  const formRef = useRef(null)
  const [ sending, setSending ] = useState(false);

  async function handleSubmit(data, { reset }){
      setSending(true);
    try {
      const schema = Yup.object().shape({
        username: Yup.string().required('Username or E-mail is required'),
        password: Yup.string().min(6, 'The password must contain at least 6 characters').required('Password is required')
      })
  
      await schema.validate(data, {
        abortEarly: false
      })

      formRef.current.setErrors({});

      reset();
      setTimeout(() => {
        toast.success("Login success")
        setSending(false);
      }, 2000);
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
    toast.info("Coming Soon")
  }

  return (
     <section className="signinForm">
      <Form ref={formRef} onSubmit={handleSubmit}>
       <div className="field">
        <small>Username or E-mail</small>
        <Input name="username" autoComplete="false"/>
       </div>
        <div className="field">
        <small>Password</small>
        <Input name="password" type="password" autoComplete="new-password"/>
        </div>
        <span className="forgotPass" onClick={comingSoon}>Forgot Password ?</span>
        <button type="submit" className={ sending ? 'submitBtn sending' : 'submitBtn'}>
          { !sending ? 'Sign in' : <i className="fa fa-spinner fa-spin"></i> }
        </button>
        <div className="dividerArea">
          <div className="divider"></div>
            <span>Or</span>
          <div className="divider"></div>
        </div>
        <button type="button" className="googleBtn" onClick={comingSoon}>
          <img src={googleLogo}  className="googleLogo" alt="Logotipo Google"/>
          Sign in with Google
        </button>
        <div className="aditionalInfos">
          <small>
          New Invision? <Link to="/signup">Create Account</Link>
          </small>
        </div>
      </Form>
     </section>
  );
}

export default SigninForm;