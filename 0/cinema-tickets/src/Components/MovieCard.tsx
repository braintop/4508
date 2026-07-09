import { useState } from "react";
import type Movie from "../models/Movie";

interface Props {
    movie: Movie;
}

export default function MovieCard({ movie }: Props) {
    const [showInfo, setShowInfo] = useState(false);

    function toggleInfo() {
        setShowInfo(!showInfo);
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
            <button>Select Ticket</button>

            {showInfo && (
                <div>
                    <h3>More Info</h3>
                    <p>Description: {movie.description}</p>
                    <p>Director: {movie.director}</p>
                    <p>Actors: {movie.actors}</p>
                    <p>Duration: {movie.duration} minutes</p>
                    <p>Show Times:</p>
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
