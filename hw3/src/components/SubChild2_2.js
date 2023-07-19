import React, { useContext, useState } from 'react';
import { MyContext } from './MyContext';

function SubChild2_2() {
    const { setData } = useContext(MyContext);
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setData(inputValue);
        setInputValue('');
    };

    return (
        <div>
            <h2>SubChild2_2</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={inputValue} onChange={handleChange} />
                <button type="submit">Передати дані</button>
            </form>
        </div>
    );
}

export default SubChild2_2;
