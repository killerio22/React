import {useState} from "react";
import TestUseMemo from "./components/TestUseMemo";
import TestUseCallBack from "./components/TestUseCallBack";
import TestUseToggle from "./components/TestUseToggle/TestUseToggle";
import TestUseFetch from "./components/TestUseFetch";
import TestUseArray from "./components/TestUseArray";

const App = () => {
    // const  [ count1, setCount1] = useState(0)
    return (
        <div>
            {/*<button onClick={()=>setCount1(prev=>++prev)}>i1</button>*/}
            {/*<TestUseMemo count1={count1}/>*/}
            {/*<TestUseCallBack count1={count1}/>*/}
            {/*<TestUseToggle/>*/}
            {/*<TestUseFetch/>*/}
            <TestUseArray/>
        </div>
    );
};

export default App;