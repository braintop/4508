import { createSlice } from "@reduxjs/toolkit";

export const languageSlice = createSlice({
    name: "language",
    initialState: {
        current: "עברית",
    },
    reducers: {
        setEnglish: (state) => {
            state.current = "English";
        },
        setHebrew: (state) => {
            state.current = "עברית";
        },
        setArabic: (state) => {
            state.current = "العربية";
        },
        resetLanguage: (state) => {
            state.current = "עברית";
        },
    },
});

export const { setEnglish, setHebrew, setArabic } = languageSlice.actions;
export default languageSlice.reducer;
