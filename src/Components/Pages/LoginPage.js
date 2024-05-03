import React, { useRef } from 'react';
import './contactpage.css';
const LoginPage = () => {
    const inputEmailRef = useRef();
    const inputPasswordRef = useRef();

    const formSubmitHandler = (event) => {
        event.preventDefault();
        const email = inputEmailRef.current.value;
        const password = inputPasswordRef.current.value;

        fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCvfxGfU1bjhIevsQ8B_1W-Je0EAcbGov4',{
            method: 'POST',
            body: JSON.stringify({
                email: email,
                password: password,
                returnSecureToken: true,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((res) => {
            if (res.ok) {
                return res.json();

            } else {
                console.log(res);
            }
        })
        .then(data => 
            console.log(data))
        .catch((err) => {
            console.log(err);
        });

        inputEmailRef.current.value = '';
        inputPasswordRef.current.value = '';
    };

    return (
        <section>
        <h1>Login Portal</h1>
            <form className='formControl' onSubmit={formSubmitHandler}>
                <div className='control'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email' name='email' ref={inputEmailRef} />
                </div>
                <div className='control'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' id='password' name='password' ref={inputPasswordRef} />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </section>
    );
};

export default LoginPage;
