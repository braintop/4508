import { useState } from "react";
import { useDispatch } from "react-redux";
import type Movie from "../models/Movie";
import { addMovie } from "../ticketSlice/ticketSlice";

interface Props {
    movie: Movie;
}

export default function MovieCard({ movie }: Props) {
    const [showInfo, setShowInfo] = useState(false);
    const dispatch = useDispatch();

    function toggleInfo() {
        setShowInfo(!showInfo);
    }

    function selectTicket() {
        dispatch(addMovie(movie));
    }

    return (
        <div>
            <img src={movie.image} width="150" />
            <h2>{movie.name}</h2>
            <p>Genre: {movie.genre}</p>
            <p>Year: {movie.year}</p>
            <p>Rating: {movie.rating}</p>
            <p>Price: ₪{movie.price}</p>

            <button onClick={toggleInfo}>More Info</button>
            <button onClick={selectTicket}>Select Ticket</button>

            {showInfo && (
                <div>
                    <h3>More Info</h3>
                    <p>Description: {movie.description}</p>
                    <p>Director: {movie.director}</p>
                    <p>Actors: {movie.actors}</p>
                    <p>Duration: {movie.duration} minutes</p>
                    <ul>
                        {movie.showTimes.map(time => (
                            <li key={time}>{time}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}


