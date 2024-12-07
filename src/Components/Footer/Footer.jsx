import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#040303] text-[#beb0a7] py-8">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Website Info */}
                <div className="text-center md:text-left">
                    <h2 className="text-2xl font-bold text-[#8b9d83] mb-3">PopTime</h2>
                    <p className="text-sm">
                        Your ultimate destination for exploring, adding, and managing movies. Stay connected with us for the latest updates!
                    </p>
                </div>

                {/* Contact Info */}
                <div className="text-center md:text-left">
                    <h3 className="text-xl font-semibold text-[#8b9d83] mb-3">Contact Us</h3>
                    <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                            <FaMapMarkerAlt className="text-[#6a7b76]" />
                            <span>123 Movie Lane, Film City, CA 90210</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <FaPhoneAlt className="text-[#6a7b76]" />
                            <span>+1 (555) 123-4567</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <FaEnvelope className="text-[#6a7b76]" />
                            <span>support@poptime.com</span>
                        </li>
                    </ul>
                </div>

                {/* Social Media Links */}
                <div className="text-center md:text-left">
                    <h3 className="text-xl font-semibold text-[#8b9d83] mb-3">Follow Us</h3>
                    <div className="flex justify-center md:justify-start space-x-4">
                        <a
                            href="https://www.facebook.com/tanzim.mj?mibextid=ZbWKwL"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#beb0a7] hover:text-[#6a7b76] transition"
                        >
                            <FaFacebook size={24} />
                        </a>
                        <a
                            href="https://x.com/Motabai39"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#beb0a7] hover:text-[#6a7b76] transition"
                        >
                            <FaTwitter size={24} />
                        </a>
                        <a
                            href="https://www.instagram.com/tanzim_52/profilecard/?igsh=ejZsZ3lma2twaXlj"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#beb0a7] hover:text-[#6a7b76] transition"
                        >
                            <FaInstagram size={24} />
                        </a>
                        <a
                            href="https://linkedin.com/in/md-mahin-jawad-tanzim-18888b318/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#beb0a7] hover:text-[#6a7b76] transition"
                        >
                            <FaLinkedin size={24} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center text-sm text-[#6a7b76] mt-8 border-t border-[#3a4e48] pt-4">
                © {new Date().getFullYear()} PopTime. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
