import React, {useRef} from 'react';
import useArray from "../hooks/useArray";

const TestUseArray = () => {
    const {data, add, remove} = useArray(['a', 'b', 'c']);
    const ipt = useRef();

    const addItem = () => {
        add(ipt.current.value)
        ipt.current.value=''
    }

    return (
        <div>
            <div>
                <input type="text" ref={ipt}/>
                <button onClick={addItem}>add</button>
            </div>
            {data.map((item, index)=>(
                <div key={index}>
                    {item} <button onClick={()=>remove(index)}>remove</button>
                </div>
            ))}
        </div>
    );
};

export default TestUseArray;