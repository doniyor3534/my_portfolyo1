import { MapChart } from "./All";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [succsess,setSuccsess] =useState(false)
    const [input,setInput] =useState({
        name:'',
        email:'',
        message:''
    })
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_igsdyz5', 'template_lr2qc7d', form.current, '15AUTaLcid9g0B3QA')
        .then((result) => {
            setSuccsess(true)
        }, (error) => {
            setSuccsess(false)
        });
        setInput(
            {
                name:'',
                email:'',
                message:''
            }
        )
        
    };

    const chanchfun=(e)=>{
        setInput({...input,[e.target.name]:e.target.value})
        setSuccsess(false)
    }
  
  return (
    <div className="contactPage">
      <h2 className="boglanish"> Men bilan bog'lanish</h2>
      <form ref={form}  onSubmit={sendEmail} className="form">
        <label htmlFor="ism">
          Ism
          <input id="ism" name="name" onChange={chanchfun} value={input.name} type="text" placeholder="ismingizni kiriting" />
        </label>
        <label htmlFor="email">
          email
          <input id="email " name="email" onChange={chanchfun} value={input.email} type="email" placeholder="emailingizni kiriting" />
        </label>
        <label htmlFor="message">
          Message
          <textarea
            rows={5}
            onChange={chanchfun} value={input.message}
            id="message"
            type="message"
            name="message"
            placeholder="message ...."
          />
        </label>
        {succsess && <h1 className="successtext"> Xabaringiz yuborildi  !</h1>}
        <button type="submit" formTarget="blank">
          Jonatish
        </button>
      </form>
      <div className="social">
        <a target={"blank"} href="https://instagram.com/doniyor35341">
          <img src="./img/social/instagram.svg" alt="" />
        </a>
        <a target={"blank"} href="https://telegram.org/DoniyorbekTursunov35341">
          <img src="./img/social/telegram.svg" alt="" />
        </a>
        <a target={"blank"} href="https://whatsapp.org/DoniyorbekTursunov">
          <img src="./img/social/watsapp.svg" alt="" />
        </a>
        <a target={"blank"} href="https://YouTube.com/SamarBadriddinov">
          <img src="./img/social/youtube.svg" alt="" />
        </a>
        <a target={"blank"} href="https://github.com/doniyor3534">
          <img src="./img/social/github.svg" alt="" />
        </a>
      </div>
      <div className="mapcard">
        <MapChart />
      </div>
    </div>
  );
};

export default Contact;
