import React from 'react';

const Contact = () => {
    return (
        <div className='contactPage'>
            <h2 className="boglanish"> Men bilan bog'lanish</h2>
            <form action="https://doniyorbektursunov800@gmail.com" className="form">
                <label htmlFor="ism">Ism
                   <input id='ism' type="text" placeholder='ismingizni kiriting' />
                </label>
                <label htmlFor="email">Ism
                   <input id='email' type="email" placeholder='emailingizni kiriting' />
                </label>
                <label htmlFor="passwor1">Ism
                   <input id='password1' type="password" placeholder='parolingizni kiriting' />
                </label>
                <label htmlFor="password2">Ism
                   <input id='password2' type="password" placeholder='parolni takrorlang' />
                </label>
                <button type='submit' formTarget='blank' >Jonatish</button>
            </form>
            <div className="social">
                <a target={'blank'} href="https://instagram.com/doniyor35341"><img src="./img/social/instagram.svg" alt="" /></a>
                <a target={'blank'} href="https://telegram.org/DoniyorbekTursunov35341"><img src="./img/social/telegram.svg" alt="" /></a>
                <a target={'blank'} href="https://whatsapp.org/DoniyorbekTursunov"><img src="./img/social/watsapp.svg" alt="" /></a>
                <a target={'blank'} href="https://YouTube.com/SamarBadriddinov"><img src="./img/social/youtube.svg" alt="" /></a>
                <a target={'blank'} href="https://github.com/doniyor3534"><img src="./img/social/github.svg" alt="" /></a>
            </div>
        </div>
    );
};

export default Contact;