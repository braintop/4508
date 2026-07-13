import { Link } from 'react-router-dom'
export default function Navbar() {
    return (
        <div>
            <Link to="/">Home|</Link>
            <Link to="/ticket">Ticket|</Link>
            <Link to="/recomondation">Recomondation|</Link>
            <Link to="/about">About</Link>
        </div>
    )
}