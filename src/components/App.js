
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {

  const [cartItems, setCartItems] = useState([]);

  const handleRemoveItem = (itemName) => {
    const updatedCartItems = cartItems.filter((item) => item.name !== itemName);
    setCartItems(updatedCartItems);
  };

  function handleAddItems(){

    const newItem = {
      name:document.getElementById("itemName").value,
      price:document.getElementById("itemPrice").value,
    };

    const updatedCartItems = [...cartItems, newItem];

    setCartItems(updatedCartItems);

    //Clear input fields
    document.getElementById('itemName').value = '';
    document.getElementById('itemPrice').value = '';
  }

  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <div id="add-item">
        <label htmlFor="itemName">Item Name</label>
        <input type="text" id="itemName" placeholder="Item Name"/>
        <label htmlFor="itemPrice">Item Price</label>
        <input type="number" id="itemPrice" placeholder="Item Price"/>
        <button onClick={handleAddItems}>Add items</button>
      </div>
      <ChildComponent cartItems={cartItems} handleRemoveItem={handleRemoveItem} />
    </div>
  );
}

const ChildComponent = ({ cartItems, handleRemoveItem }) => {
  return (
    <div className="child">
      <h2>Child Component</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            <span id="itemName">{item.name}</span>&nbsp;&nbsp;
            <span id="itemPrice">${item.price}</span>
            <button onClick={() => handleRemoveItem(item.name)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App
