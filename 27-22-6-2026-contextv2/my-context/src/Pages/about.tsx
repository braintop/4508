import UserContext from '../Context/UserContext';
import { useContext } from 'react';

export default function About() {
    const { name, isLoggedIn, editName } = useContext(UserContext);
    
    
    return (
        <div>
            About
            <p>{name} {isLoggedIn ? 'Logged In' : 'Logged Out'}</p>
            <input type="text"   onChange={(e) => editName(e.target.value)} />
        </div>
    )
}