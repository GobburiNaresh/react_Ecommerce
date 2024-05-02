import React from 'react';
import Header from '../Header/Header';
import BodyComponent from '../BodyComponent/BodyComponent';
import FooterComponent from '../FooterComponent/FooterComponent';
import { CartProvider } from '../Context/ItemContext';
function App() {
  const productsArr = [
    {
      title: "Colors",
      price: 100,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      title: "Blue Color",
      price: 100,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  return (
    <CartProvider>
        <Header />
        <BodyComponent products={productsArr}/>
        <FooterComponent />
    </CartProvider>
  );
}

export default App;
