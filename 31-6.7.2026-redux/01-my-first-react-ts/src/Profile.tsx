import { useSelector } from "react-redux";
import type { RootState } from "./store/store";
import { useDispatch } from "react-redux";
import { setFirstName, setLastName, setEmail, setAge } from "./slices/userSlice";

export const Profile = () => {

    const dispatch = useDispatch();
    const firstName = useSelector(
        (state: RootState) => state.user.firstName
    );
    return (
        <div>
            <h1>Profile</h1>
            <p>First Name: {firstName}</p>
            <input type="text"  onChange={(e) => dispatch(setFirstName(e.target.value))} />
        </div>
    )
}