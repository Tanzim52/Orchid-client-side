import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider"; // Assuming you have an AuthContext to manage logged-in user

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const { user } = useContext(AuthContext); // Assuming AuthContext provides the logged-in user's email

  // Fetch favorite movies for the logged-in user
  useEffect(() => {
    if (!user?.email) {
      toast.error("Please log in to view your favorite movies.");
      return;
    }

    fetch(`http://localhost:5000/favorites?userEmail=${user.email}`)
      .then((response) => response.json())
      .then((data) => setFavorites(data))
      .catch((error) => {
        console.error("Error fetching favorite movies:", error);
        toast.error("Failed to fetch favorite movies.");
      });
  }, [user?.email]);

  // Delete a favorite movie
  const handleDeleteFavorite = (id) => {
    fetch(`http://localhost:5000/favorites/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete favorite movie.");
        }
        setFavorites((prev) => prev.filter((movie) => movie._id !== id));
        toast.success("Movie removed from favorites.");
      })
      .catch((error) => {
        console.error("Error deleting favorite movie:", error);
        toast.error("Failed to remove movie from favorites.");
      });
  };

  return (
    <div className="min-h-screen bg-[#040303] text-[#beb0a7]">
      <ToastContainer />
      <div className="container mx-auto py-10">
        <h1 className="text-4xl font-bold text-center text-[#8b9d83] mb-6">
          Your Favorite Movies
        </h1>
        {favorites.length === 0 ? (
          <p className="text-center text-[#8b9d83]">
            No favorite movies found. Add some to see them here!
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {favorites.map((movie) => (
              <div
                key={movie._id}
                className="bg-[#3a4e48] rounded-lg p-4 shadow-lg"
              >
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-full h-64 object-cover rounded-md mb-4"
                />
                <h2 className="text-2xl font-semibold text-[#8b9d83] mb-2">
                  {movie.title}
                </h2>
                <p>
                  <span className="font-semibold">Genre:</span> {movie.genre}
                </p>
                <p>
                  <span className="font-semibold">Duration:</span> {movie.duration} mins
                </p>
                <p>
                  <span className="font-semibold">Release Year:</span> {movie.releaseYear}
                </p>
                <p>
                  <span className="font-semibold">Rating:</span> {movie.rating}/5
                </p>
                <button
                  onClick={() => handleDeleteFavorite(movie._id)}
                  className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 transition w-full"
                >
                  Delete Favorite
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
