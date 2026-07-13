import type Movie from "../models/Movie";

const movies: Movie[] = [
    {
        id: 1,
        name: "Avatar",
        genre: "Action",
        year: 2022,
        rating: 8.1,
        price: 45,
        image: "https://picsum.photos/200/300?1",
        description: "A science fiction movie about Pandora.",
        director: "James Cameron",
        actors: "Sam Worthington, Zoe Saldana",
        duration: 192,
        showTimes: ["14:00", "18:00", "21:30"]
    },
    {
        id: 2,
        name: "Titanic",
        genre: "Drama",
        year: 1997,
        rating: 9,
        price: 40,
        image: "https://picsum.photos/200/300?2",
        description: "A love story on the Titanic ship.",
        director: "James Cameron",
        actors: "Leonardo DiCaprio, Kate Winslet",
        duration: 195,
        showTimes: ["13:00", "17:00", "20:00"]
    },
    {
        id: 3,
        name: "Frozen",
        genre: "Animation",
        year: 2013,
        rating: 8,
        price: 35,
        image: "https://picsum.photos/200/300?3",
        description: "A story about two sisters and a frozen kingdom.",
        director: "Chris Buck",
        actors: "Kristen Bell, Idina Menzel",
        duration: 102,
        showTimes: ["11:00", "15:00", "18:30"]
    }
];

export default movies;
