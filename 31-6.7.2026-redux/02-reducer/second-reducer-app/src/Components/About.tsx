import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
export const About = () => {
    const firstName = useSelector(
        (state: RootState) => state.user.firstName
    );
    const lastName = useSelector(
        (state: RootState) => state.user.lastName
    );
    return (
        <div>
            <h1>About</h1>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
        </div>
    )
}