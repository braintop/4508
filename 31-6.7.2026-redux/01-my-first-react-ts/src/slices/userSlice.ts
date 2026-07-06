import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: "user", 
    initialState: {
        firstName: "asaf",
        lastName: "cohen",
        email: "asaf@gmail.com",
        age: 20
    },
    reducers: {
        setFirstName: (state, action) => {
            state.firstName = action.payload
        },
        setLastName: (state, action) => {
            state.lastName = action.payload
        },
        setEmail: (state, action) => {
            state.email = action.payload
        },
        setAge: (state, action) => {
            state.age = action.payload
        }
    }
})
export const { setFirstName, setLastName, setEmail, setAge } = userSlice.actions
export default userSlice.reducer





// import { createSlice } from "@reduxjs/toolkit";

// const userSlice = createSlice({
//   name: "user",

//   initialState: {
//     firstName: "Asaf",
//     lastName: "Cohen",
//   },

//   reducers: {
//     changeName(state) {
//       state.firstName = "David";
//     },
//     changeLastName(state) {
//       state.lastName = "Ben-David";
//     }
//   },
// });

// export const { changeName } = userSlice.actions;

// export default userSlice.reducer;