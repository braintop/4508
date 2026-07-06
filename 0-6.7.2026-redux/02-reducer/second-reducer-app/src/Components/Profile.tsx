import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { setFirstName, setLastName } from "../slices/userSlice";
import { useDispatch } from "react-redux";

export const Profile = () => {
    const firstName = useSelector(
        (state: RootState) => state.user.firstName
    );
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Profile</h1>
            <p>First Name: {firstName}</p>
            <input type="text" onChange={(e) => dispatch(setFirstName(e.target.value))} />
        </div>
    )
}

