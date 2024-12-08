// src/pages/Login.jsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'animate.css';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
    const { googleLogin } = React.useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        // Mock validation for email/password login
        toast.success('Logged in successfully!');
        navigate(from, { replace: true });
    };

    const handleGoogleLogin = async () => {
        try {
            await googleLogin();
            toast.success('Google Login Successful!');
            navigate(from, { replace: true });
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded p-8 w-full max-w-md animate__animated animate__fadeIn">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <input
                            {...register('email', { required: 'Email is required' })}
                            type="email"
                            className="w-full px-4 py-2 border rounded"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Password</label>
                        <input
                            {...register('password', { required: 'Password is required' })}
                            type="password"
                            className="w-full px-4 py-2 border rounded"
                        />
                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                    </div>
                    <button className="bg-blue-500 text-white w-full py-2 rounded mt-4">Login</button>
                </form>
                <div className="mt-4 text-center">
                    <button
                        onClick={handleGoogleLogin}
                        className="bg-red-500 text-white w-full py-2 rounded flex items-center justify-center gap-2"
                    >
                        Login with Google
                    </button>
                </div>
                <p className="text-center mt-4">
                    Don't have an account?{' '}
                    <Link to="/register" className="text-blue-500 underline">
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
