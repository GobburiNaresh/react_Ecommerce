import React,{useContext} from 'react';
import {Container,Navbar,Nav} from 'react-bootstrap';
import ButtonComponent from './Button';
import { CartContext } from '../Context/ItemContext';
import { Link } from 'react-router-dom';


const Header = () => {
    const { cartItems } = useContext(CartContext);
    const itemCount = cartItems.length;
    return(
        <Navbar bg='secondary'>
            <Container>
                <Navbar.Brand style={{fontWeight: 'bold',fontSize: '48px'}}>The Generics</Navbar.Brand>
                <Nav>
                    <Link to="https://prasadyash2411.github.io/ecom-website/index.html" style={{marginRight:'15px'}}>HOME</Link>
                    <Link to='/' style={{marginRight:'15px'}}>STORE</Link>
                    <Link to="https://prasadyash2411.github.io/ecom-website/about.html" style={{marginRight:'15px'}}>ABOUT</Link>
                    <Link to='/contactUs' style={{marginRight:'15px'}}>Contact Us</Link>
                    <Link to='/login' style={{marginRight:'15px'}}>Login</Link>
                </Nav>
                <ButtonComponent>Cart ({itemCount})</ButtonComponent>
            </Container>
        </Navbar>
    )

}

export default Header;