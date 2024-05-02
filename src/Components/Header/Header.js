import React,{useContext} from 'react';
import {Container,Navbar,Nav} from 'react-bootstrap';
import ButtonComponent from './Button';
import { CartContext } from '../Context/ItemContext';
import { NavLink } from 'react-router-dom';


const Header = () => {
    const { cartItems } = useContext(CartContext);
    const itemCount = cartItems.length;
    return(
        <Navbar bg='secondary'>
            <Container>
                <Navbar.Brand style={{fontWeight: 'bold',fontSize: '48px'}}>The Generics</Navbar.Brand>
                <Nav>
                    <NavLink to="https://prasadyash2411.github.io/ecom-website/index.html" style={{marginRight:'30px'}}>HOME</NavLink>
                    <NavLink to='/' style={{marginRight:'30px'}}>STORE</NavLink>
                    <NavLink to="https://prasadyash2411.github.io/ecom-website/about.html" style={{marginRight:'30px'}}>ABOUT</NavLink>
                </Nav>
                <ButtonComponent>Cart ({itemCount})</ButtonComponent>
            </Container>
        </Navbar>
    )

}

export default Header;