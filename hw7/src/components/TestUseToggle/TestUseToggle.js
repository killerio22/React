import React from 'react';
import useToggle from "../../hooks/useToggle";
import css from './TestUseToggle.module.css';

const TestUseToggle = () => {
    const {value, change} = useToggle(true);
    return (
        <div className={[css.TestUseToggle, value?css.red:css.blue].join(' ')}>
            <button onClick={change}>{!value?'blue':'red'}</button>
        </div>
    );
};

export default TestUseToggle;