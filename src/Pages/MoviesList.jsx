import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from '../Components/MovieCard';

const MoviesList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://imdb-top-100-movies.p.rapidapi.com/', {
                    headers: {
                        'x-rapidapi-key': '44333e3076msh9de29939ff76be1p1775acjsn07c44e083440',
                        'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com',
                    }
                });
                setMovies(response.data);
            } catch (error) {
                console.error('Failed to fetch movies:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="min-h-screen bg-gray-950 p-6">
            <h1 className="text-4xl text-white font-bold text-center mb-8">🎬 IMDb Top 100 Movies</h1>
            <div className="flex flex-wrap justify-center">
                {movies.map((movie, index) => (
                    <MovieCard key={index} movie={movie} />
                ))}
            </div>
        </div>
    );
};

export default MoviesList;
