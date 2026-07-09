import { createSlice } from "@reduxjs/toolkit";

interface TicketState {
    movieName: string;
    ticketsCount: number;
    price: number;
}

const initialState: TicketState = {
    movieName: "Avatar",
    ticketsCount: 0,
    price: 45
};

const ticketSlice = createSlice({
    name: "tickets",
    initialState,
    reducers: {
        addTicket: (state) => {
            state.ticketsCount = state.ticketsCount + 1;
        },
        removeTicket: (state) => {
            if (state.ticketsCount > 0) {
                state.ticketsCount = state.ticketsCount - 1;
            }
        },
        resetTickets: (state) => {
            state.ticketsCount = 0;
        }
    }
});

export const { addTicket, removeTicket, resetTickets } = ticketSlice.actions;
export default ticketSlice.reducer;



