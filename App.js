import React, {useState} from "react"

const Counter = () => {
    const [count, setCount] = useState(0);

    const increament = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        setCount(count - 1);
    };
    return (
        <div>
            <h2>Counter</h2>
            <p>Count: {count}</p>
            <button onClick={increament}>+1</button>
            <button onClick={decrement}>-1</button>
        </div>
    );
};
export default Counter;


// const InputForm = () => {
//     const [inputValue, setInputValue] = useState('');
//
//     const handleChange = (event) => {
//         setInputValue(event.target.value);
//     };
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         alert(`Submitted value ${inputValue}`);
//         setInputValue('')
//     };
//     return (
//         <div>
//             <h2>Input Form</h2>
//             <form onSubmit={handleSubmit}>
//                 <input type="text" value={inputValue} onChange={handleChange}/>
//                 <button type={"submit"}>Submit</button>
//             </form>
//         </div>
//     );
// };
// export default InputForm