import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

export default function TicketPage() {
    const selectedMovies = useSelector(
        (state: RootState) => state.tickets.selectedMovies
    );

    return (
        <div>
            <h1>Tickets Page</h1>
            <p>Selected movies: {selectedMovies.length}</p>

            {selectedMovies.map(movie => (
                <div key={movie.id}>
                    <h2>{movie.name}</h2>
                    <p>Price: ₪{movie.price}</p>
                </div>
            ))}
        </div>
    );
}
