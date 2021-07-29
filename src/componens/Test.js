import React, { useState } from 'react';


export default function App() {
    const [name , setName] = useState('Alex');
    const [lastName , setLastName] = useState('Zavadsliy');
    let [age , setAge] = useState(29);
    let [status, setStatus] = useState();


	return (
    <div>
        <p>{name}</p> <button onClick={() => setName('Max')}>change</button>
        <p>{lastName}</p> <button onClick={() => setLastName('Tarantino')}>change</button>
        <p>{age}</p> <button onClick={() => setAge('30')}>change</button><br/>
        <p>{status ? 'Активен' : 'Забанен'}</p>
        <button onClick={() => setStatus(!status)}>{status ? "Забанить" : "Разбанить"}</button><br/>

        <span onClick={() => setAge(age + 1)}>+</span>
        <span onClick={() => setAge(age - 1)}>-</span>
	</div>
    )
  }