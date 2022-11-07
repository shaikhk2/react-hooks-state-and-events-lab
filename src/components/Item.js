import React, { useState } from "react";

function Item({ name, category }) {
  const [addToCart, setAddToCart] = useState(false);
 
  const [liClassName, setLiClassName] = useState("");

  function cartClick() {
    console.log(addToCart);
    console.log(!addToCart);
    // setAddToCart((addToCart) => !addToCart)
    setAddToCart(!addToCart)
    console.log(addToCart);
    console.log( addToCart ? "in-cart" : "" );
    setLiClassName( addToCart ? "in-cart" : "" )
  }


  const cartClass = addToCart ? "Remove from Cart" : "Add to Cart";
  //console.log(cartClass);
  //why is the clasname change not working?!?! 
 
  return (
    <li className={liClassName}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={cartClick} className="add">{cartClass}</button>
    </li>
  );
}

export default Item;
