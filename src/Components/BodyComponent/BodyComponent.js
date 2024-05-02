import React, {useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { CartContext } from '../Context/ItemContext'; 
import ButtonComponent from '../Header/Button';

const BodyComponent = (props) => {
    const { addToCart } = useContext(CartContext);

    return (
        <div className="d-flex justify-content-center align-items-center flex-column">
            <h1 style={{ margin: '20px', textAlign: 'center', fontFamily: 'cursive', fontWeight: 'bold' }}>Music</h1>
            {props.products.map((product, index) => (
                <Card key={index} style={{ width: '18rem', marginTop: '50px' }} className="text-center">
                    <Card.Img src={product.imageUrl} />
                    <Card.Body>
                        <div className="d-flex justify-content-between align-items-center">
                            <Card.Text style={{ marginTop: '10px' }}>${product.price}</Card.Text>
                            <Button variant="primary" onClick={() => addToCart(product)}>ADD TO CART</Button>
                        </div>
                    </Card.Body>
                </Card>
            ))}
            <div style={{ margin: '50px' }}>
                <ButtonComponent>See The Cart</ButtonComponent>
            </div>
        </div>
    );
};

export default BodyComponent;
