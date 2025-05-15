import './App.css'
import './mytailwind.css'
import {Link} from "react-router-dom";
import {useState} from 'react';
import {Greet} from "../wailsjs/go/main/App";

function Memories() {

    // Generate 10 consecutive dates starting from today
    // const generateDates = () => {
    //     const dates = [];
    //     const today = new Date();
    //
    //     for (let i = 0; i < 10; i++) {
    //         const date = new Date(today);
    //         date.setDate(today.getDate() + i);
    //         dates.push(date);
    //     }
    //
    //     return dates;
    // };

    // const timelineDates = generateDates();

    return (
        <div id="Preferences">
        <div
            className="min-h-screen bg-gradient-to-br from-lime-50 to-lime-100 flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-4xl">
                {/* Logo and Title */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-green-950 mb-2">HeartLog</h1>
                    <div className="text-green-950">builds family history</div>
                    <div className="text-green-950">through memories</div>
                </div>

                {/* Main Content */}
                <div className="bg-white rounded-lg shadow-xl p-8">
                    <div className="flex justify-between items-center mb-6 relative">

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
                                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700">
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
                                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 bg-green-100">
                                            Preferences
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/pricing"
                                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700">
                                            Pricing
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/signin"
                                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 ">
                                            Sign In
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

                        <h2 className="text-2xl font-semibold text-gray-800 text-center flex-grow">Your Preferences</h2>
                        <div className="w-8"></div>
                        {/* Spacer for alignment */}
                    </div>


                    {/* Entry Card */}
                    <div
                        className="bg-white border border-green-700 rounded-xl p-6 focus-within:ring-2 focus-within:ring-green-300 focus-within:ring-offset-2 mt-6 transition-colors">


                        <div className="flex flex-col md:flex-row items-start mb-6">
                            {/* Profile Picture Selector */}
                            <div className="w-full md:w-1/4 flex justify-center md:justify-start mb-4 md:mb-0">
                                <div className="relative group">
                                    <div
                                        className="h-32 w-32 border-2 border-green-600 rounded-lg bg-gray-50 flex items-center justify-center overflow-hidden">
                                        <svg className="h-16 w-16 text-green-400" xmlns="http://www.w3.org/2000/svg"
                                             fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                                                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                                        </svg>
                                        <input
                                            type="file"
                                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                            accept="image/*"
                                            aria-label="Select profile picture"
                                        />
                                    </div>
                                    <div
                                        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div
                                            className="bg-black bg-opacity-50 rounded-lg h-full w-full flex items-center justify-center">
                                            <span className="text-white text-xs font-medium">Upload Photo</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Profile Information Form */}
                            <div className="w-full md:w-3/4 pl-0 md:pl-6">
                                <h2 className="text-green-700 text-2xl mb-4">Profile Information</h2>

                                <form className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {/* Name */}
                                        <div>
                                            <label className="block text-green-700 text-sm font-medium mb-2"
                                                   htmlFor="name">
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                placeholder="Your full name"
                                                className="w-full px-3 py-2 text-green-700 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                            />
                                        </div>

                                        {/* Location */}
                                        <div>
                                            <label className="block text-green-700 text-sm font-medium mb-2"
                                                   htmlFor="location">
                                                Location
                                            </label>
                                            <input
                                                type="text"
                                                id="location"
                                                name="location"
                                                placeholder="City, State"
                                                className="w-full px-3 py-2 text-green-700 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                            />
                                        </div>

                                        {/* Phone */}
                                        <div>
                                            <label className="block text-green-700 text-sm font-medium mb-2"
                                                   htmlFor="phone">
                                                Phone
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                placeholder="(123) 456-7890"
                                                className="w-full px-3 py-2 text-green-700 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                            />
                                        </div>

                                        {/* Email */}
                                        <div>
                                            <label className="block text-green-700 text-sm font-medium mb-2"
                                                   htmlFor="email">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                placeholder="your.email@example.com"
                                                className="w-full px-3 py-2 text-green-700 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                            />
                                        </div>

                                        {/* Age */}
                                        <div>
                                            <label className="block text-green-700 text-sm font-medium mb-2"
                                                   htmlFor="age">
                                                Age
                                            </label>
                                            <input
                                                type="number"
                                                id="age"
                                                name="age"
                                                placeholder="40"
                                                className="w-full px-3 py-2 text-green-700 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                            />
                                        </div>

                                        {/* Family Members */}
                                        <div>
                                            <label className="block text-green-700 text-sm font-medium mb-2"
                                                   htmlFor="familyMembers">
                                                Family members
                                            </label>
                                            <input
                                                type="text"
                                                id="familyMembers"
                                                name="familyMembers"
                                                placeholder="John, Jane, James"
                                                className="w-full px-3 py-2 text-green-700 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                            />
                                        </div>
                                    </div>

                                    {/* Save Button */}
                                    <div className="flex justify-end mt-4">
                                        <button
                                            type="submit"
                                            className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                                        >
                                            Save Profile
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>


                        <Link to="/pricing"
                            className="bg-blue-800 hover:bg-blue-400 text-white font-medium py-2 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-offset-2">
                            Pricing Plan
                        </Link>
                    </div>


                    {/* Navigation Links */}
                    <div className="mt-8 text-center">
                        <Link to="/" className="text-green-600 hover:text-green-800 transition-colors">
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Memories;