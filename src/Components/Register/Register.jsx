// src/pages/Register.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { toast } from 'react-toastify';
import 'animate.css';

const Register = () => {
    const auth = getAuth();
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleRegister = async (event) => {
        event.preventDefault();
        setError('');

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;

        // Password validation
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordRegex.test(password)) {
            setError('Password must have at least 6 characters, including uppercase and lowercase letters.');
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Update profile with name and photo URL
            await updateProfile(user, { displayName: name, photoURL });
            toast.success('Registration successful!');
            navigate('/'); // Redirect to home
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded p-8 w-full max-w-md animate__animated animate__fadeIn">
                <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
                <form onSubmit={handleRegister}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Name</label>
                        <input
                            name="name"
                            type="text"
                            className="w-full px-4 py-2 border rounded"
                            placeholder="Your Name"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <input
                            name="email"
                            type="email"
                            className="w-full px-4 py-2 border rounded"
                            placeholder="Your Email"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Photo URL</label>
                        <input
                            name="photoURL"
                            type="url"
                            className="w-full px-4 py-2 border rounded"
                            placeholder="Your Photo URL"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Password</label>
                        <input
                            name="password"
                            type="password"
                            className="w-full px-4 py-2 border rounded"
                            placeholder="Your Password"
                            required
                        />
                    </div>
                    {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                    <button className="bg-blue-500 text-white w-full py-2 rounded mt-4">Register</button>
                </form>
                <p className="text-center mt-4">
                    Already have an account?{' '}
                    <Link to="/login" className="text-blue-500 underline">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
