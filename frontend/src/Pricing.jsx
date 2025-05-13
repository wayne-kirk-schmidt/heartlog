import {useState} from 'react';
import './App.css';
import './mytailwind.css'
import {Link} from "react-router-dom";

function Pricing() {
    return (
        <div id="Pricing">
            <div className="min-h-screen bg-gradient-to-br from-lime-50 to-lime-100 flex flex-col items-center justify-center p-4">
                <div className="w-full max-w-6xl">
                    {/* Logo and Title */}
                    <div className="text-center mb-8">
                        <div>
                            <a href="http://www.heartlog.com" target>
                                {/*<img src={heartLogLogo} className="logo" alt="heartlog logo" />*/}
                            </a>
                        </div>
                        <h1 className="text-4xl font-bold text-green-950 mb-2">HeartLog</h1>
                        <div className="text-green-950">builds family history</div>
                        <div className="text-green-950">through memories</div>
                    </div>

                    {/* Main Content */}
                    <div className="bg-white rounded-lg shadow-xl p-8">
                        {/* Hamburger Menu Button */}
                        <div className="relative">
                            <button
                                className="w-8 h-8 flex flex-col items-center justify-center bg-green-600 hover:bg-green-700 text-white rounded-md p-1 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                                onClick={() => document.getElementById('navigation-menu').classList.toggle('hidden')}
                                aria-label="Toggle navigation menu"
                            >
                                {/*Below is the hamburger menu*/}
                                <span className="w-4 h-0.5 bg-white mb-1"></span>
                                <span className="w-4 h-0.5 bg-white mb-1"></span>
                                <span className="w-4 h-0.5 bg-white"></span>
                            </button>

                            {/* Dropdown Navigation Menu */}
                            <div
                                id="navigation-menu"
                                className="hidden absolute left-0 top-10 w-48 bg-white shadow-lg rounded-md overflow-hidden z-10 border border-gray-200"
                            >
                                <ul className="py-1">
                                    <li>
                                        <Link to="/"
                                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 ">
                                            Sign Up
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/contact"
                                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700">
                                            Contact
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/journey"
                                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700">
                                            Journey
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/memories"
                                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700">
                                            Memories
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/preferences"
                                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 ">
                                            Preferences
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/pricing"
                                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 bg-green-100">
                                            Pricing
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/signin"
                                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 ">
                                            Sign In
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/storyguide"
                                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 ">
                                            Story Guides
                                        </Link>
                                    </li>
                                    <li className="border-t border-gray-200">
                                        <Link to="/"
                                              className="block px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                                            Logout
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Our Pricing Plans</h2>

                        {/* Pricing Cards - Horizontal Layout */}
                        <div className="flex flex-col md:flex-row gap-6 mt-6">
                            {/* Starter Plan */}
                            <div className="flex-1 bg-white border border-green-700 rounded-xl p-6 hover:shadow-lg transition-shadow">
                                <div className="text-center">
                                    <h2 className="text-2xl font-semibold text-green-700">Basic</h2>
                                    <h1 className="text-4xl font-bold text-gray-800 my-4">$3<span className="text-xl text-gray-600">/month</span></h1>

                                    <div className="text-left my-6 space-y-3">
                                        <div className="flex items-center">
                                            <div className="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center mr-3">
                                                <svg className="h-3 w-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="text-gray-600">Capture audio, video, text</span>
                                        </div>

                                        <div className="flex items-center">
                                            <div className="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center mr-3">
                                                <svg className="h-3 w-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="text-gray-600">Basic memory storage</span>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center mr-3">
                                                <svg className="h-3 w-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="text-gray-600">Share with 10 people</span>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center mr-3">
                                                <svg className="h-3 w-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="text-gray-600">Email support</span>
                                        </div>
                                    </div>

                                    <button className="w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                                        Choose
                                    </button>
                                </div>
                            </div>

                            {/* Enhanced Plan */}
                            <div className="flex-1 bg-white border border-green-700 rounded-xl p-6 hover:shadow-lg transition-shadow">
                                <div className="text-center">
                                    <h2 className="text-2xl font-semibold text-green-700">Enhanced</h2>
                                    <h1 className="text-4xl font-bold text-gray-800 my-4">$9<span className="text-xl text-gray-600">/month</span></h1>

                                    <div className="text-left my-6 space-y-3">
                                        <div className="flex items-center">
                                            <div className="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center mr-3">
                                                <svg className="h-3 w-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="text-gray-600">Capture audio, video, text</span>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center mr-3">
                                                <svg className="h-3 w-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="text-gray-600">AI text prompt base to <br/> interact with platform</span>

                                        </div>
                                        <div className="flex items-center">
                                            <div className="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center mr-3">
                                                <svg className="h-3 w-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="text-gray-600">Enhanced memory storage</span>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center mr-3">
                                                <svg className="h-3 w-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="text-gray-600">Share with 50 people</span>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center mr-3">
                                                <svg className="h-3 w-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="text-gray-600">Priority support</span>
                                        </div>
                                    </div>

                                    <button className="w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                                        Choose
                                    </button>
                                </div>
                            </div>

                            {/* Advanced Plan */}
                            <div className="flex-1 bg-white border border-green-700 rounded-xl p-6 hover:shadow-lg transition-shadow">
                                <div className="text-center">
                                    <h2 className="text-2xl font-semibold text-green-700">Advanced</h2>
                                    <h1 className="text-4xl font-bold text-gray-800 my-4">$12<span className="text-xl text-gray-600">/month</span></h1>

                                    <div className="text-left my-6 space-y-3">
                                        <div className="flex items-center">
                                            <div className="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center mr-3">
                                                <svg className="h-3 w-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="text-gray-600">Capture audio, video, text</span>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center mr-3">
                                                <svg className="h-3 w-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="text-gray-600">AI text prompt base to <br/> interact with platform</span>

                                        </div>
                                        <div className="flex items-center">
                                            <div className="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center mr-3">
                                                <svg className="h-3 w-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="text-gray-600">Multiple reminders</span>

                                        </div>
                                        <div className="flex items-center">
                                            <div className="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center mr-3">
                                                <svg className="h-3 w-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="text-gray-600">Voice or Avatar assistant</span>

                                        </div>
                                        <div className="flex items-center">
                                            <div className="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center mr-3">
                                                <svg className="h-3 w-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="text-gray-600">Unlimited memory storage</span>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center mr-3">
                                                <svg className="h-3 w-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="text-gray-600">Unlimited sharing</span>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center mr-3">
                                                <svg className="h-3 w-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="text-gray-600">Priority support</span>
                                        </div>
                                    </div>

                                    <button className="w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                                        Choose
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 text-center">
                            <p className="text-sm text-gray-600">
                                Have questions about our pricing plans?{' '}
                                <Link to="/contact" className="font-medium text-green-600 hover:text-green-800">
                                    Contact us
                                </Link>
                            </p>
                        </div>
                    </div>

                    {/*Footer*/}
                    <div className="mt-8 text-center text-sm text-gray-600">
                        <p>All plans include our standard terms of service and privacy policy</p>
                    </div>
                    <div className="mt-4 text-center text-sm text-gray-600">
                        <p>© 2025 Heart Log. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing