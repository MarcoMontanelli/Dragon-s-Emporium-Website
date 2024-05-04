import React from 'react';

const OrderedListComponent = ({ items }) => {
  return (
    <ol>
      {items.map((item, index) => (
        <li key={index}>
          <strong>{item.title}</strong> {item.content}
        </li>
      ))}
    </ol>
  );
};

export default OrderedListComponent;