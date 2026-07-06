import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <div>
            <Link to="/">Profile|</Link>
            <Link to="/about">About</Link>
        </div>
    )
}