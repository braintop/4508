import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type Movie from "../models/Movie";

interface TicketState {
    selectedMovies: Movie[];
    error: string;
}

function loadFromLocalStorage(): Movie[] {
    const data = localStorage.getItem("selectedMovies");

    if (data) {
        return JSON.parse(data);
    }

    return [];
}

function saveToLocalStorage(movies: Movie[]) {
    localStorage.setItem("selectedMovies", JSON.stringify(movies));
}

const initialState: TicketState = {
    selectedMovies: loadFromLocalStorage(),
    error: ""
};

const ticketSlice = createSlice({
    name: "tickets",
    initialState,
    reducers: {
        addMovie: (state, action: PayloadAction<Movie>) => {
            const exists = state.selectedMovies.some(
                movie => movie.id === action.payload.id
            );

            if (exists) {
                state.error = "הסרט כבר נבחר";
                return;
            }

            if (state.selectedMovies.length >= 5) {
                state.error = "ניתן לבחור עד 5 סרטים בלבד";
                return;
            }

            state.selectedMovies.push(action.payload);
            saveToLocalStorage(state.selectedMovies);
            state.error = "";
        },
        removeMovie: (state, action: PayloadAction<number>) => {
            state.selectedMovies = state.selectedMovies.filter(
                movie => movie.id !== action.payload
            );
            saveToLocalStorage(state.selectedMovies);
            state.error = "";
        },
        resetTickets: (state) => {
            state.selectedMovies = [];
            saveToLocalStorage(state.selectedMovies);
            state.error = "";
        },
        clearError: (state) => {
            state.error = "";
        }
    }
});

export const { addMovie, removeMovie, resetTickets, clearError } = ticketSlice.actions;
export default ticketSlice.reducer;


