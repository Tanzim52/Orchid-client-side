import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AllMovies = () => {
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();

    // Fetch all movies from the server
    useEffect(() => {
        fetch("http://localhost:5000/movies")
            .then((response) => response.json())
            .then((data) => {
                setMovies(data);
            })
            .catch((error) => {
                console.error("Error fetching movies:", error);
            });
    }, []);

    return (
        <div className="min-h-screen bg-[#040303] text-[#beb0a7]">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-center mb-8 text-[#6a7b76]">All Movies</h1>

                {movies.length === 0 ? (
                    <p className="text-center text-[#8b9d83]">No movies found. Please add some movies!</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {movies.map((movie) => (
                            <div key={movie._id} className="bg-[#3a4e48] p-4 rounded-lg shadow-lg">
                                {/* Movie Poster */}
                                <img
                                    src={movie.poster}
                                    alt={movie.title}
                                    className="w-full h-64 lg:w-[452px] lg:h-[672px] object-cover rounded-md mb-4"
                                />

                                {/* Movie Info */}
                                <div className="space-y-2">
                                    <h2 className="text-xl font-bold text-[#8b9d83]">{movie.title}</h2>
                                    <p><span className="font-semibold">Genre:</span> {movie.genre}</p>
                                    <p><span className="font-semibold">Duration:</span> {movie.duration} mins</p>
                                    <p><span className="font-semibold">Release Year:</span> {movie.releaseYear}</p>
                                    <p><span className="font-semibold">Rating:</span> {movie.rating}/5</p>
                                </div>

                                {/* See Details Button */}
                                <button
                                    onClick={() => navigate(`/movies/${movie._id}`)}
                                    className="mt-4 bg-[#8b9d83] text-white py-2 px-4 rounded-md hover:bg-[#6a7b76] transition"
                                >
                                    See Details
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default AllMovies;
