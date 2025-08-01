import React from 'react';

const MovieCard = ({ movie }) => {
    return (
        <div className="bg-gray-900 text-white rounded-2xl overflow-hidden shadow-lg w-72 m-4">
            <img src={movie.image} alt={movie.title} className="w-full h-96 object-cover" />
            <div className="p-4">
                <h2 className="text-xl font-bold mb-1">{movie.title} <span className="text-sm text-gray-400">({movie.year})</span></h2>
                <p className="text-sm text-gray-300 mb-2">Rating: ⭐ {movie.rating}</p>
                <p className="text-sm text-gray-400 mb-2 line-clamp-3">{movie.description}</p>
                <div className="flex flex-wrap gap-1 mt-2">
                    {movie.genre.map((g, idx) => (
                        <span
                            key={idx}
                            className="text-xs bg-purple-600 text-white px-2 py-1 rounded-full"
                        >
                            {g}
                        </span>
                    ))}
                </div>
                <a
                    href={movie.imdb_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-sm text-purple-400 hover:underline"
                >
                    View on IMDb
                </a>
            </div>
        </div>
    );
};

export default MovieCard;
