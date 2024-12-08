import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import 'animate.css';
import { FaMoon, FaSun } from 'react-icons/fa';

const Home = () => {
    const movies = useLoaderData();
    const navigate = useNavigate();
    const [darkMode, setDarkMode] = useState(false);

    // Sort and select the 6 highest-rated movies
    const featuredMovies = [...movies]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 6);

    // Carousel responsive settings
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} transition-colors duration-500 pb-7 px-6`}>
            {/* Dark Mode Toggle */}
            <div className="p-4 flex justify-end">
                <button
                    className="flex items-center gap-2 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-4 py-2 rounded shadow"
                    onClick={() => setDarkMode(!darkMode)}
                >
                    {darkMode ? <FaSun /> : <FaMoon />}
                    {darkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
            </div>

            {/* Slider */}
            <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={3000}>
                <div className="h-96 flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 animate__animated animate__fadeIn">
                    <h2 className="text-4xl font-bold text-white">Explore the World of Cinema</h2>
                </div>
                <div className="h-96 flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 animate__animated animate__fadeIn">
                    <h2 className="text-4xl font-bold text-white">Discover Unforgettable Stories</h2>
                </div>
                <div className="h-96 flex items-center justify-center bg-gradient-to-r from-yellow-400 to-red-500 animate__animated animate__fadeIn">
                    <h2 className="text-4xl font-bold text-white">Your Journey into Entertainment</h2>
                </div>
            </Carousel>

            {/* Featured Movies */}
            <section className="py-8">
                <h2 className="text-3xl font-bold text-center mb-6">Featured Movies</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuredMovies.map((movie) => (
                        <div key={movie._id} className="bg-gray-100 dark:bg-gray-800 p-4 rounded shadow animate__animated animate__fadeInUp">
                            <img
                                src={movie.poster}
                                alt={movie.title}
                                className="w-full h-64 lg:w-[452px] lg:h-[672px] object-cover rounded mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-2">{movie.title}</h3>
                            <p>Genre: {movie.genre}</p>
                            <p>Duration: {movie.duration} min</p>
                            <p>Release Year: {movie.releaseYear}</p>
                            <p>Rating: {movie.rating}/5</p>
                            <button
                                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
                                onClick={() => navigate(`/movie/${movie._id}`)}
                            >
                                See Details
                            </button>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-8">
                    <button
                        className="bg-blue-500 text-white px-6 py-3 rounded"
                        onClick={() => navigate('/all-movies')}
                    >
                        See All Movies
                    </button>
                </div>
            </section>

            {/* Extra Section 1 */}
            <section className="py-8 bg-gradient-to-r from-indigo-500 to-purple-500 text-white mb-7">
                <h2 className="text-3xl font-bold text-center mb-6 animate__animated animate__fadeIn">Top Genres to Explore</h2>
                <p className="text-center mb-4 animate__animated animate__fadeIn">
                    Discover movies from a variety of genres: Action, Drama, Comedy, and more.
                </p>
                <div className="flex justify-center">
                    <button
                        className="bg-white text-indigo-600 px-6 py-3 rounded animate__animated animate__fadeInUp"
                    >
                        Explore Genres
                    </button>
                </div>
            </section>

            {/* Extra Section 2 */}
            <section className="py-8 bg-gradient-to-r from-green-500 to-teal-500 text-white">
                <h2 className="text-3xl font-bold text-center mb-6 animate__animated animate__fadeIn">Join the Movie Club</h2>
                <p className="text-center mb-4 animate__animated animate__fadeIn">
                    Connect with a community of movie enthusiasts and share your passion!
                </p>
                <div className="flex justify-center">
                    <button
                        className="bg-white text-green-600 px-6 py-3 rounded animate__animated animate__fadeInUp"
                        onClick={() => navigate('/community')}
                    >
                        Join Now
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Home;
