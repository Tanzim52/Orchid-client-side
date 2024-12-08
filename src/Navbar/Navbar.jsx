import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import {
    FaBars,
    FaTimes,
    FaHome,
    FaFilm,
    FaPlusCircle,
    FaStar,
    FaSignInAlt,
    FaUserPlus,
    FaSignOutAlt,
} from "react-icons/fa";
import { AuthContext } from "../Components/Provider/AuthProvider";


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, logout } = useContext(AuthContext);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const handleLogout = async () => {
        try {
            await logout();
        } catch (error) {
            console.error("Logout failed:", error.message);
        }
    };

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

                    {/* Conditional Rendering Based on User Authentication */}
                    {user ? (
                        <div className="flex items-center gap-4">
                            {/* Logout Button */}
                            <button
                                onClick={handleLogout}
                                className="flex items-center gap-2 text-red-500 hover:text-red-700 transition-all"
                            >
                                <FaSignOutAlt /> Logout
                            </button>

                            {/* Profile Picture and Hover Effect */}
                            <div className="relative group">
                                <img
                                    src={user.photoURL || "https://via.placeholder.com/40"}
                                    alt="User Profile"
                                    className="w-10 h-10 rounded-full border-2 border-[#8b9d83] cursor-pointer"
                                />
                                {/* Hover to Show User Name */}
                                <div className="absolute -left-7 top-12 hidden group-hover:block bg-[#3a4e48] text-white rounded-md shadow-lg px-4 py-2">
                                    {user.displayName || "User"}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <>
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
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
