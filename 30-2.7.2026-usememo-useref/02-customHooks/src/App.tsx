import useLocalStorage from './useLocalStorage'
import useCounter from './useCounter'
import CartButtons from './CartButtons'
function App() {

  const [name, setName] = useLocalStorage<string>("name", "");
  const [count, increment, decrement, reset] = useCounter(2, 4);
  return (
    <div>
      <h2>Local Storage Demo</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p>שלום {name}</p>

      <h1>Cart Buttons</h1>
      <CartButtons />
    </div>
  );
}

export default App
