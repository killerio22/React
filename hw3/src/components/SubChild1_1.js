import React, { useContext } from 'react';
import { MyContext } from './MyContext';

function SubChild1_1() {
    const { data } = useContext(MyContext);

    return (
        <div>
            <h3>SubChild1_1</h3>
            <p>Input Value: {data}</p>
        </div>
    );
}

export default SubChild1_1;
