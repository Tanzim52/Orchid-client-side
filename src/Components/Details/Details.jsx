import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react"; // Import for user email
import { AuthContext } from "../Provider/AuthProvider";


const Details = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [movie, setMovie] = useState(null);
    const { user } = useContext(AuthContext); // Assuming the AuthContext provides the logged-in user

    // Fetch movie details by ID
    useEffect(() => {
        fetch(`http://localhost:5000/movies/${id}`)
            .then((response) => response.json())
            .then((data) => setMovie(data))
            .catch((error) => {
                console.error("Error fetching movie details:", error);
                toast.error("Failed to fetch movie details.");
            });
    }, [id]);

    // Delete Movie
    const handleDelete = () => {
        fetch(`http://localhost:5000/movies/${id}`, {
            method: "DELETE",
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to delete movie.");
                }
                toast.success("Movie deleted successfully!");
                navigate("/all-movies"); // Navigate back to All Movies page
            })
            .catch((error) => {
                console.error("Error deleting movie:", error);
                toast.error("Failed to delete movie.");
            });
    };

    // Add to Favorite
    const handleAddToFavorites = () => {
        if (!user?.email) {
            toast.error("Please log in to add movies to your favorites.");
            return;
        }

        const favoriteData = {
            ...movie,
            userEmail: user.email, // Add the logged-in user's email
        };

        fetch(`http://localhost:5000/favorites`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(favoriteData),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to add movie to favorites.");
                }
                return response.json();
            })
            .then(() => {
                toast.success("Movie added to favorites!");
            })
            .catch((error) => {
                console.error("Error adding movie to favorites:", error);
                toast.error("Failed to add movie to favorites.");
            });
    };

    return (
        <div className="min-h-screen bg-[#040303] text-[#beb0a7] flex items-center justify-center">
            <ToastContainer />
            {movie ? (
                <div className="w-full sm:w-10/12 md:w-8/12 lg:w-6/12 bg-[#3a4e48] p-6 rounded-lg shadow-lg">
                    <img
                        src={movie.poster}
                        alt={movie.title}
                        className="w-full h-72 object-cover lg:w-[452px] lg:h-[672px] rounded-md mb-4"
                    />
                    <h1 className="text-3xl font-bold text-[#8b9d83] mb-2">{movie.title}</h1>
                    <p><span className="font-semibold">Genre:</span> {movie.genre}</p>
                    <p><span className="font-semibold">Duration:</span> {movie.duration} mins</p>
                    <p><span className="font-semibold">Release Year:</span> {movie.releaseYear}</p>
                    <p><span className="font-semibold">Rating:</span> {movie.rating}/5</p>
                    <p><span className="font-semibold">Summary:</span> {movie.summary}</p>

                    {/* Action Buttons */}
                    <div className="mt-6 flex gap-4">
                        <button
                            onClick={handleDelete}
                            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
                        >
                            Delete Movie
                        </button>
                        <button
                            onClick={handleAddToFavorites}
                            className="bg-[#8b9d83] text-white px-4 py-2 rounded-md hover:bg-[#6a7b76] transition"
                        >
                            Add to Favorite
                        </button>
                    </div>
                </div>
            ) : (
                <p className="text-center text-[#8b9d83]">Loading movie details...</p>
            )}
        </div>
    );
};

export default Details;
