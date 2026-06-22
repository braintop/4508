import UserContext from '../Context/UserContext';
import { useContext } from 'react';
export default function NavBar() {
    const { name, isLoggedIn, login, logout } = useContext(UserContext);
    return (
        <div>
            NavBar
            <button onClick={login}>Login</button>
            <button onClick={logout}>Logout</button>
            <p>{name} {isLoggedIn ? 'Logged In' : 'Logged Out'}</p>
        </div>
    )
}