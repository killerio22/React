import {useCallback, useState} from "react";
import TestUseCallBackChild from "./TestUseCallBackChild";

const TestUseCallBack = ({count1}) => {
    const [count2, setCount2] = useState(0)
    const someFun = useCallback(() =>{
        let res = 0
        for (let i = 0; i < 1958674; i++){
            res+=count1
        }
        return res
    },[count1])

    return(
        <div>
            <TestUseCallBackChild someFun={someFun}/>
            <div>count1: {count1}</div>
            <div>count2: {count2}</div>
            <button onClick={()=>setCount2((prev=>++prev))}>i2</button>
        </div>
    )
}

export default TestUseCallBack