import UserContext from '../Context/UserContext';
import { useContext } from 'react';
export default function Home() {

    const { name, isLoggedIn } = useContext(UserContext);
    return (
        <div>
            Home
            <p>{name} {isLoggedIn ? 'Logged In' : 'Logged Out'}</p>
        </div>
    )
}