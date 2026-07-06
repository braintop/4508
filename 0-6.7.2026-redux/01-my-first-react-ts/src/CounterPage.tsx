import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "./slices/counterSlice";
import type { RootState } from "./store/store";

export default function CounterPage() {

    // קוראים את הערך מתוך ה-Store
    const count = useSelector(
        (state: RootState) => state.counter.value
    );


    const firstName = useSelector(
        (state: RootState) => state.user.firstName
    );

    const lastName = useSelector(
        (state: RootState) => state.user.lastName
    );
    const email = useSelector(
        (state: RootState) => state.user.email
    );
    const age = useSelector(
        (state: RootState) => state.user.age
    );
    // מאפשר לשלוח פעולות ל-Redux
    const dispatch = useDispatch();

    return (
        <div>

            <h1>Redux Counter {firstName} {lastName}</h1>

            <h2>{count}</h2>

            <button onClick={() => dispatch(increment())}>
                +
            </button>

            <button onClick={() => dispatch(decrement())}>
                -
            </button>

            <button onClick={() => dispatch(reset())}>
                Reset
            </button>

        </div>
    );
}