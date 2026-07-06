import { useState } from "react";

export default function useCounter(initial: number = 0, step: number = 1) {
    const [count, setCount] = useState(initial);
    function increment() {
        setCount( count + step);
    }
    function decrement() {
        setCount( count - step);
    }
    function reset() {
        setCount(initial);
    }
    return [count, increment, decrement, reset] as const;
}