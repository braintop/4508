import { useSelector } from "react-redux";
import type { RootState } from "./store/store";

export const Navbar = () => {
    const count = useSelector((state: RootState) => state.counter.value)
    return (
        <div>

            <h2>🛒 מספר מוצרים: {count}</h2>

        </div>
    )
}