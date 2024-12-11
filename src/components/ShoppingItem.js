import React, { useState } from 'react';

function ShoppingItem({ item, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedItem, setEditedItem] = useState(item);

  const handleEditChange = (e) => {
    setEditedItem({ ...editedItem, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    onEdit(item.id, editedItem);
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <div>
          <input
            type="text"
            name="name"
            value={editedItem.name}
            onChange={handleEditChange}
          />
          <input
            type="number"
            name="price"
            value={editedItem.price}
            onChange={handleEditChange}
          />
          <input
            type="number"
            name="quantity"
            value={editedItem.quantity}
            onChange={handleEditChange}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <span>
          {item.name} - R$ {item.price} x {item.quantity} = R${' '}
          {(item.price * item.quantity).toFixed(2)}
        </span>
      )}
      <div>
        <button onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? 'Cancel' : 'Edit'}
        </button>
        <button onClick={() => onDelete(item.id)}>Delete</button>
      </div>
    </li>
  );
}

export default ShoppingItem;
