import React from 'react';
import './App.module.css';
import uuid from 'react-uuid';

function id(id) {
	return id.uuid
}

const prods = [
	{id: id(), name: 'product1', cost: 100},
	{id: id(), name: 'product2', cost: 200},
	{id: id(), name: 'product3', cost: 300},
];

export default function App() {

  const res = prods.map(function(item) {
    return <p key={uuid}>{item.name} {item.cost}</p>
  })

    return (
      <>
        <div>
              {res}
        </div>
      </>
    );
}