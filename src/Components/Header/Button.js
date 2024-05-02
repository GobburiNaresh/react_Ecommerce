import React, { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import { CartContext } from '../Context/ItemContext'; 

function ButtonComponent({ children }) {
    const { cartItems, setCartItems } = useContext(CartContext);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.price), 0);

    const handleRemoveHandler = (index) => {
        const newCartItems = [...cartItems];
        newCartItems.splice(index, 1);
        setCartItems(newCartItems);
    }
    const quantity = 1;

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                {children}
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Price</th>
                                <th>Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item, index) => (
                                <tr key={index}>
                                    <td><img style={{height: '100px'}} src={item.imageUrl} alt="Product"/></td>
                                    <td>${item.price}</td>
                                    <td>X{quantity}<Button style={{marginLeft: '30px'}} onClick={() => handleRemoveHandler(index)}>REMOVE</Button></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <div style={{textAlign: 'center', margin: '30px'}}>
                        <Button>PURCHASE ${totalPrice}</Button>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ButtonComponent;
