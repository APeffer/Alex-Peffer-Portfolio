import '../styles/Contact.css';
import React from 'react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  })
  const [bntText, setBtnText] = useState('Submit');
  const [btnDisabled, setBtnDisabled] = useState(false);

  const handleInputChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBtnDisabled(true);
    setBtnText('Sending');
    const serviceID = 'service_79iagf1';
    const templateID = 'template_vt1xpu1';

    emailjs.send(serviceID, templateID, formData, process.env.REACT_APP_EMAILJS_PUBLIC)
      .then((response) => {
        alert('Your message was sent successfully!');
        console.log('Email sent successfully:', response);
        setFormData({
          name: '',
          company: '',
          email: '',
          message: ''
        })
        setBtnText('Sent!');
      })
      .catch((err) => {
        setBtnText('Submit');
        alert(JSON.stringify(err));
      });
  }

  return (
    <div>

      <div className='contact-container'>   
            <h1 className='mt-4 text-center'>Contact</h1>
            <form className="m-4" onSubmit={handleSubmit}>

              {/* NAME INPUT */}
              <div className='form-name'>
                <label className="form-label" htmlFor='name'>Name: <span>*</span></label>
                <input className="form-control"  type="text" name='name' id='name' onChange={handleInputChange} required></input>
              </div>

              {/* COMPANY INPUT */}
              <div className='form-company'>
                <label className="form-label" htmlFor='company'>Company:</label>
                <input className="form-control"  type="text" name='company' id='company' onChange={handleInputChange}></input>
              </div>

              {/* EMAIL INPUT */}
              <div className='form-email'>
                <label className="form-label" htmlFor='email'>Email:<span>*</span></label>
                <input className="form-control" type="email" placeholder='myname@email.com' name='email' id='email' onChange={handleInputChange} required></input>
              </div>

              {/* MESSAGE INPUT*/}
              <div className='form-message'>
                <label className='form-label' htmlFor='message'>Message:<span>*</span></label>
                <textarea className="form-control" name='message' id='message' maxLength={255} onChange={handleInputChange} required></textarea>
              </div>
              <button className="btn btn-primary" disabled={btnDisabled} type='submit'>{bntText}</button>
            </form>
            <footer>* = required field</footer>
      </div>
      


    </div>
  )
}
