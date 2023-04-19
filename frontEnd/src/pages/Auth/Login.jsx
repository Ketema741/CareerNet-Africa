import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { MdLock } from 'react-icons/md';
import { FaFacebookF, FaEnvelope } from 'react-icons/fa';

// import Alert from "../layouts/Alerts";
import AlertContext from "../../context/alert/alertContext";

import AuthContext from "../../context/Auth/authContext";
import loginsvg from '../../assets/undraw_access_account_re_8spm.svg'

const Login = (props) => {
    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);
    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    const { email, password } = user;
    // const { setAlert } = alertContext;
    const { userLogin, error, setAlert, isUserAuthenticated, loadUser } = authContext;

    useEffect(() => {
        if (isUserAuthenticated) {

            loadUser()
            console.log('loged in')
            navigate('/');
        }
        if (error === 'Invalid Credentials') {
            // setAlert(error, 'danger');
        }

        // eslint-disable-next-line
    }, [error, isUserAuthenticated, props.history]);

    const onChange = (e) =>
        setUser({ ...user, [e.target.name]: e.target.value });
    const onSubmit = (e) => {
        e.preventDefault();
        if (email === '' || password === '') {
            setAlert('Please fill all field', 'danger');
        } else {
            userLogin({ email, password });
        }
    };

    return (

        <div className="mt-24 min-w-screen  bg-white flex items-center justify-center px-5 py-1">

            <div className=" bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden" style={{ maxWidth: "1000px" }}>
                <div className="md:flex w-full ">
                    <div className="hidden md:block w-1/2  py-10 px-10">
                        <img src={loginsvg} className="" />
                    </div>
                    <div className=" flex flex-col items-center justify-center">
                        <div className="flex flex-col px-4 sm:px-6 md:px-8 lg:px-10 rounded-md w-full max-w-md">
                            <div className="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800">Login To Your Account</div>
                            <button className="relative mt-6 border rounded-md py-2 text-sm text-gray-800 bg-gray-200 hover:bg-gray-300">
                                <span className="absolute left-0 top-0 flex items-center justify-center h-full w-10 text-blue-500"><FaFacebookF /></span>
                                <span>Login with Facebook</span>
                            </button>
                            <div className="relative mt-10 h-px bg-gray-300">
                                <div className="absolute left-0 top-0 flex justify-center w-full -mt-2">
                                    <span className="bg-gray-100 px-4 text-xs text-black uppercase">Or Login With Email</span>
                                </div>
                            </div>
                            <div className="mt-10">
                                <form onSubmit={onSubmit} >
                                    <div className="flex flex-col mb-6">
                                        <label htmlFor="email" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">E-Mail Address:</label>
                                        <div className="relative">
                                            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                                <span><FaEnvelope /></span>
                                            </div>

                                            <input id="email"
                                                type="email"
                                                name="email"
                                                className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                                                placeholder="E-Mail Address"
                                                onChange={onChange}
                                                required
                                                minLength="6"

                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col mb-6">
                                        <label htmlFor="password" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Password:</label>
                                        <div className="relative">
                                            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                                <span><MdLock /></span>
                                            </div>

                                            <input
                                                id="password"
                                                type="password"
                                                name="password"
                                                className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                                                placeholder="Password"
                                                onChange={onChange}
                                                required
                                                minLength="6"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex items-center mb-6 -mt-4">
                                        <div className="flex ml-auto">
                                            <a href="#" className="inline-flex text-xs sm:text-sm text-blue-500 hover:text-blue-700">Forgot Your Password?</a>
                                        </div>
                                    </div>

                                    <div className="flex w-full">
                                        <button type="submit" className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in">
                                            <span className="mr-2 uppercase">Login</span>
                                            <span><MdLock /></span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="flex justify-center items-center mt-6">
                                <a href="#" target="_blank" className="inline-flex items-center font-bold text-blue-500 hover:text-blue-700 text-xs text-center">
                                    <span>
                                        <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                            <path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                                        </svg>
                                    </span>
                                    <span className="ml-2">You don't have an account?</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Login


