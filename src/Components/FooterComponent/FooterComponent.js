import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const FooterComponent = () => {
    return (
        <Navbar bg='secondary'>
            <Container className='d-flex justify-content-center'>
                <Navbar.Brand style={{fontWeight: 'bold',fontSize: '48px',color: 'white'}}>The Generics</Navbar.Brand>
            </Container>
        </Navbar>
    );
};

export default FooterComponent;
