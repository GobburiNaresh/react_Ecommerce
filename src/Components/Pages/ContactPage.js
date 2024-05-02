import React,{useRef} from 'react';
import './contactpage.css'
const ContactPage = () => {
    const inputName = useRef('');
    const inputEmail = useRef('');
    const inputId = useRef('0');
    const inputPhoneNumber = useRef('');

    const formSubmitHandler = async (event) => {
        event.preventDefault();

        const contactDetails = {
            name: inputName.current.value,
            email: inputEmail.current.value,
            id: inputId.current.value,
            phoneNumber: inputPhoneNumber.current.value
        }
        await addContactHandler(contactDetails);
        
        console.log(contactDetails);
        inputName.current.value = '';
        inputEmail.current.value = '';
        inputId.current.value = '';
        inputPhoneNumber.current.value = '';
    }
    async function addContactHandler(contactDetails){
        const response  = await fetch('https://ecommercecontact-6dd83-default-rtdb.firebaseio.com/contactDetails.json',{
            method: 'POST',
            body: JSON.stringify(contactDetails),
            headers: {
                'Content-type': 'Application/json'
            }
        })
        const data = await response.json();
        console.log(data);
    }
    return (
        <section>
            <form className='formControl' onSubmit={formSubmitHandler}>
                <div className='control'>
                    <label htmlFor='Name'>Name</label>
                    <input type='text' ref={inputName}/>
                </div>
                <div className='control'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' ref={inputEmail}/>
                </div>
                <div className='control'>
                    <label htmlFor='id'>ID</label>
                    <input type='number' ref={inputId}/>
                </div>
                <div className='control'>
                    <label htmlFor='phoneNumber'>Phone Number</label>
                    <input type='tel'ref={inputPhoneNumber}/>
                </div>
                <button>Submit</button>
            </form>
        </section>
        

    )
    

}

export default ContactPage;