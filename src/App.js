import React, { useState } from 'react';
import ShoppingList from './components/ShoppingList';
import './styles/app.css';

function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: '', price: '', quantity: '' });

  const handleChange = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  };

  const addItem = () => {
    if (
      newItem.name.trim() &&
      parseFloat(newItem.price) > 0 &&
      parseInt(newItem.quantity) > 0
    ) {
      setItems([...items, { ...newItem, id: Date.now() }]);
      setNewItem({ name: '', price: '', quantity: '' });
    } else {
      alert('Por favor preencha todos os campos corretamente!');
    }
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const editItem = (id, updatedItem) => {
    setItems(items.map((item) => (item.id === id ? updatedItem : item)));
  };

  const calculateTotal = () => {
    return items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    ).toFixed(2);
  };

  return (
    <div className="container">
      <h1>Shopping List</h1>
      <div className="form-container">
        <input
          type="text"
          name="name"
          value={newItem.name}
          onChange={handleChange}
          placeholder="Item"
        />
        <input
          type="number"
          name="price"
          value={newItem.price}
          onChange={handleChange}
          placeholder="Price"
          step="0.01"
        />
        <input
          type="number"
          name="quantity"
          value={newItem.quantity}
          onChange={handleChange}
          placeholder="Quantity"
          min="1"
        />
        <button onClick={addItem}>Add</button>
      </div>
      <ShoppingList
        items={items}
        onDelete={deleteItem}
        onEdit={editItem}
      />
      <div className="total-container">
        <h3>Total: R$ {calculateTotal()}</h3>
      </div>
    </div>
  );
}

export default App;
