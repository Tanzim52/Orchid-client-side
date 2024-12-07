import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaHome, FaFilm, FaPlusCircle, FaStar, FaSignInAlt, FaUserPlus } from "react-icons/fa";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className="bg-[#040303] text-[#beb0a7]">
            <div className="container mx-auto flex justify-between items-center px-4 py-3">
                {/* Website Logo */}
                <div className="text-2xl font-bold">
                    <NavLink to="/" className="flex items-center gap-2">
                        <FaFilm className="text-[#8b9d83]" />
                        PopTime
                    </NavLink>
                </div>

                {/* Hamburger Menu for Mobile */}
                <button
                    onClick={toggleMenu}
                    className="text-2xl text-[#8b9d83] md:hidden"
                    aria-label="Toggle Menu"
                >
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </button>

                {/* Nav Links */}
                <div
                    className={`${isMenuOpen ? "block" : "hidden"
                        } md:flex flex-col md:flex-row items-center gap-4 absolute md:static top-16 left-0 right-0 bg-[#040303] md:bg-transparent px-6 py-4 md:p-0`}
                >
                    <NavLink
                        to="/"
                        className="flex items-center gap-2 px-3 py-2 rounded-md text-[#beb0a7] hover:bg-[#3a4e48] hover:text-white transition-all"
                        activeClassName="bg-[#6a7b76] text-white"
                    >
                        <FaHome /> Home
                    </NavLink>
                    <NavLink
                        to="/all-movies"
                        className="flex items-center gap-2 px-3 py-2 rounded-md text-[#beb0a7] hover:bg-[#3a4e48] hover:text-white transition-all"
                        activeClassName="bg-[#6a7b76] text-white"
                    >
                        <FaFilm /> All Movies
                    </NavLink>
                    <NavLink
                        to="/add-movie"
                        className="flex items-center gap-2 px-3 py-2 rounded-md text-[#beb0a7] hover:bg-[#3a4e48] hover:text-white transition-all"
                        activeClassName="bg-[#6a7b76] text-white"
                    >
                        <FaPlusCircle /> Add Movie
                    </NavLink>
                    <NavLink
                        to="/favorites"
                        className="flex items-center gap-2 px-3 py-2 rounded-md text-[#beb0a7] hover:bg-[#3a4e48] hover:text-white transition-all"
                        activeClassName="bg-[#6a7b76] text-white"
                    >
                        <FaStar /> My Favorites
                    </NavLink>
                    <NavLink
                        to="/extra"
                        className="flex items-center gap-2 px-3 py-2 rounded-md text-[#beb0a7] hover:bg-[#3a4e48] hover:text-white transition-all"
                        activeClassName="bg-[#6a7b76] text-white"
                    >
                        <FaFilm /> Extra
                    </NavLink>
                    <NavLink
                        to="/login"
                        className="flex items-center gap-2 px-3 py-2 rounded-md text-[#beb0a7] hover:bg-[#3a4e48] hover:text-white transition-all"
                        activeClassName="bg-[#6a7b76] text-white"
                    >
                        <FaSignInAlt /> Login
                    </NavLink>
                    <NavLink
                        to="/register"
                        className="flex items-center gap-2 px-3 py-2 rounded-md text-[#beb0a7] hover:bg-[#3a4e48] hover:text-white transition-all"
                        activeClassName="bg-[#6a7b76] text-white"
                    >
                        <FaUserPlus /> Register
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
