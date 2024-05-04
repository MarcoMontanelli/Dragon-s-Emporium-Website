import React from 'react';

const UnoredredList = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          <strong>{item.title}</strong> {item.content}
        </li>
      ))}
    </ul>
  );
};

export default UnoredredList;