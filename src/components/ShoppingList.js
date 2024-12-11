import React from 'react';
import ShoppingItem from './ShoppingItem';

function ShoppingList({ items, onDelete, onEdit }) {
  return (
    <ul>
      {items.map((item) => (
        <ShoppingItem
          key={item.id}
          item={item}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
}

export default ShoppingList;
