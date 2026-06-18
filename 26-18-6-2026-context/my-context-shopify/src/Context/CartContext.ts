import { createContext } from "react";
interface CartContextType {
    items: string[];
    addToCart: (item: string) => void;
    removeItem: (item: string) => void;
    clearCart: () => void;
}//comments

const CartContext = createContext<CartContextType>(null);
export default CartContext;