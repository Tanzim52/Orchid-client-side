import React, { useState } from "react";
import { FaImage } from "react-icons/fa";
import { Rating } from "react-simple-star-rating";

import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const AddMovies = () => {
    const [formData, setFormData] = useState({
        poster: "",
        title: "",
        genre: "",
        duration: "",
        releaseYear: "",
        summary: "",
    });
    const [rating, setRating] = useState(0,[]);

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Handle rating change
    const handleRatingChange = (rate) => {
        setRating(rate); // Convert rating to a scale of 1-5
    };

    const validateForm = () => {
        const { poster, title, genre, duration, releaseYear, summary } = formData;

        if (!poster || !/^https?:\/\/.+\..+$/.test(poster)) {
            toast.error("Please provide a valid Poster URL");
            return false;
        }
        if (!title || title.length < 2) {
            toast.error("Movie title must be at least 2 characters long");
            return false;
        }
        if (!genre) {
            toast.error("Please select a genre");
            return false;
        }
        if (!duration || parseInt(duration) <= 60) {
            toast.error("Duration must be greater than 60 minutes");
            return false;
        }
        if (!releaseYear) {
            toast.error("Please select a release year");
            return false;
        }
        if (!summary || summary.length < 10) {
            toast.error("Summary must be at least 10 characters long");
            return false;
        }
        if (!rating) {
            toast.error("Please select a rating");
            return false;
        }
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        const movieData = { ...formData, rating };
        console.log(movieData)
        fetch("http://localhost:5000/add-movie", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(movieData),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to add movie");
                }
                return response.json();
            })
            .then((result) => {
                console.log("Movie added:", result);
                toast.success("Movie added successfully!");
                setFormData({
                    poster: "",
                    title: "",
                    genre: "",
                    duration: "",
                    releaseYear: "",
                    summary: "",
                });
                setRating(0);
            })
            .catch((error) => {
                console.error("Error adding movie:", error);
                toast.error("Failed to add movie. Please try again.");
            });
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-[#040303]">
            <ToastContainer></ToastContainer>
            <div className="w-full sm:w-11/12 md:w-8/12 lg:w-6/12 xl:w-4/12">
                <div className="p-6 bg-[#3a4e48] rounded-md shadow-lg text-[#beb0a7]">
                    <h2 className="text-2xl font-bold mb-4 text-[#6a7b76]">Add a Movie</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Movie Poster URL */}
                        <div>
                            <label className="block mb-2 font-semibold">Movie Poster URL</label>
                            <div className="flex items-center gap-2">
                                <FaImage className="text-[#8b9d83]" />
                                <input
                                    type="url"
                                    name="poster"
                                    value={formData.poster}
                                    onChange={handleChange}
                                    placeholder="Enter poster URL"
                                    className="w-full p-2 rounded-md"
                                />
                            </div>
                        </div>

                        {/* Movie Title */}
                        <div>
                            <label className="block mb-2 font-semibold">Movie Title</label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                placeholder="Enter movie title"
                                className="w-full p-2 rounded-md"
                            />
                        </div>

                        {/* Genre */}
                        <div>
                            <label className="block mb-2 font-semibold">Genre</label>
                            <select
                                name="genre"
                                value={formData.genre}
                                onChange={handleChange}
                                className="w-full p-2 rounded-md"
                            >
                                <option value="">Select Genre</option>
                                <option value="Comedy">Comedy</option>
                                <option value="Drama">Drama</option>
                                <option value="Horror">Horror</option>
                                <option value="Action">Action</option>
                                <option value="Thriller">Thriller</option>
                                <option value="Adventure">Adventure</option>
                            </select>
                        </div>

                        {/* Duration */}
                        <div>
                            <label className="block mb-2 font-semibold">Duration (in minutes)</label>
                            <input
                                type="number"
                                name="duration"
                                value={formData.duration}
                                onChange={handleChange}
                                placeholder="Enter duration"
                                className="w-full p-2 rounded-md"
                            />
                        </div>

                        {/* Release Year */}
                        <div>
                            <label className="block mb-2 font-semibold">Release Year</label>
                            <select
                                name="releaseYear"
                                value={formData.releaseYear}
                                onChange={handleChange}
                                className="w-full p-2 rounded-md"
                            >
                                <option value="">Select Year</option>
                                <option value="2024">2024</option>
                                <option value="2023">2023</option>
                                <option value="2022">2022</option>
                                <option value="2021">2021</option>
                                <option value="2020-Earlier">2020-Earlier</option>
                            </select>
                        </div>

                        {/* Rating */}
                        <div>
                            <label className="block mb-2 font-semibold">Rating (1-5)</label>
                            <div >
                                <Rating
                                    
                                    onClick={handleRatingChange}
                                    ratingValue={rating * 200} // Convert back to 20-point scale for the component
                                    size={30}
                                    
                                    
                                />
                            </div>
                        </div>

                        {/* Summary */}
                        <div>
                            <label className="block mb-2 font-semibold">Summary</label>
                            <textarea
                                name="summary"
                                value={formData.summary}
                                onChange={handleChange}
                                placeholder="Enter a short summary"
                                className="w-full p-2 rounded-md"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="bg-[#8b9d83] text-white px-4 py-2 rounded-md hover:bg-[#6a7b76] transition"
                        >
                            Add Movie
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddMovies;
