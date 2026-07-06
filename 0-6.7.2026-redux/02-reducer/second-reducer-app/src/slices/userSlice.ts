import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        firstName: "asaf",
        lastName: "cohen",
    },
    reducers: {
        setFirstName: (state, action) => {
            state.firstName = action.payload
        },
        setLastName: (state, action) => {
            state.lastName = action.payload
        }
    }
})

export const { setFirstName, setLastName } = userSlice.actions
export default userSlice.reducer