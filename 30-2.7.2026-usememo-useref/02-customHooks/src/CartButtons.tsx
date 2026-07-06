import useCounter from "./useCounter";

export default function CartButtons() {
    const [count, increment, decrement, reset] = useCounter(0, 3);
    return (
        <div>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <p>Count: {count}</p>
        </div>
    )
}