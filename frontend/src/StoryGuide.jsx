import './App.css'
import './mytailwind.css'
import {Link} from "react-router-dom";
import {useState} from 'react';

function StoryGuides() {
    const [searchParams, setSearchParams] = useState({
        location: '',
        proximity: '5',
        proximityUnit: 'km',
        age: '',
        sex: '',
        keyword: '',
        date: '',
        time: ''
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setSearchParams({
            ...searchParams,
            [name]: value
        });
    };

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Search parameters:', searchParams);
        // Handle search functionality here
    };

    return (
        <div id="StoryGuides">
            <div
                className="min-h-screen bg-gradient-to-br from-blue-50 to-green-200 flex flex-col items-center justify-center p-4">
                <div className="w-full max-w-4xl">
                    {/* Logo and Title */}
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold text-green-800 mb-2">Heart Log</h1>
                        <div className="text-green-600">Keeping in Contact, Preserving Memories</div>
                        <div className="text-green-600">Building Connections</div>
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
                                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700">
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
                                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700">
                                                Sign In
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/storyguide"
                                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 bg-green-100">
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

                            <h2 className="text-2xl font-semibold text-gray-800 text-center flex-grow">Find a Guide</h2>
                            <div className="w-8"></div>
                            {/* Spacer for alignment */}
                        </div>

                        {/* Search Card */}
                        <div
                            className="bg-white border border-green-700 rounded-xl p-6 focus-within:ring-2 focus-within:ring-green-300 focus-within:ring-offset-2 mt-6 transition-colors">

                            <h2 className="text-green-700 text-2xl mb-4">Get help with your life story</h2>

                            <form onSubmit={handleSearch} className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                                            value={searchParams.location}
                                            onChange={handleInputChange}
                                            placeholder="City, State, or Address"
                                            className="w-full px-3 py-2 text-green-700 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                        />
                                    </div>

                                    {/* Proximity with unit selection */}
                                    <div className="flex space-x-2">
                                        <div className="flex-grow">
                                            <label className="block text-green-700 text-sm font-medium mb-2"
                                                   htmlFor="proximity">
                                                Proximity
                                            </label>
                                            <input
                                                type="number"
                                                id="proximity"
                                                name="proximity"
                                                value={searchParams.proximity}
                                                onChange={handleInputChange}
                                                placeholder="Distance"
                                                className="w-full px-3 py-2 text-green-700 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                            />
                                        </div>
                                        <div className="w-24">
                                            <label className="block text-green-700 text-sm font-medium mb-2"
                                                   htmlFor="proximityUnit">
                                                Unit
                                            </label>
                                            <select
                                                id="proximityUnit"
                                                name="proximityUnit"
                                                value={searchParams.proximityUnit}
                                                onChange={handleInputChange}
                                                className="w-full px-3 py-2 text-green-700 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                            >
                                                <option value="km">km</option>
                                                <option value="miles">miles</option>
                                            </select>
                                        </div>
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
                                            value={searchParams.age}
                                            onChange={handleInputChange}
                                            placeholder="Age"
                                            className="w-full px-3 py-2 text-green-700 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                        />
                                    </div>

                                    {/* Sex Selection */}
                                    <div>
                                        <label className="block text-green-700 text-sm font-medium mb-2"
                                               htmlFor="sex">
                                            Sex
                                        </label>
                                        <select
                                            id="sex"
                                            name="sex"
                                            value={searchParams.sex}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 text-green-700 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                        >
                                            <option value="">Any</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </select>
                                    </div>

                                    {/* Keyword */}
                                    <div>
                                        <label className="block text-green-700 text-sm font-medium mb-2"
                                               htmlFor="keyword">
                                            Keyword
                                        </label>
                                        <input
                                            type="text"
                                            id="keyword"
                                            name="keyword"
                                            value={searchParams.keyword}
                                            onChange={handleInputChange}
                                            placeholder="Search for specific skills or interests"
                                            className="w-full px-3 py-2 text-green-700 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                        />
                                    </div>

                                    {/* Date */}
                                    <div>
                                        <label className="block text-green-700 text-sm font-medium mb-2"
                                               htmlFor="date">
                                            Date
                                        </label>
                                        <input
                                            type="date"
                                            id="date"
                                            name="date"
                                            value={searchParams.date}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 text-green-700 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                        />
                                    </div>

                                    {/* Time */}
                                    <div>
                                        <label className="block text-green-700 text-sm font-medium mb-2"
                                               htmlFor="time">
                                            Time
                                        </label>
                                        <input
                                            type="time"
                                            id="time"
                                            name="time"
                                            value={searchParams.time}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 text-green-700 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                        />
                                    </div>
                                </div>

                                {/* Search Button */}
                                <div className="flex justify-center mt-6">
                                    <button
                                        type="submit"
                                        className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 text-lg"
                                    >
                                        Search Guides
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Results Section (Placeholder) */}
                        <div className="mt-8 p-6 bg-white border border-green-700 rounded-xl">
                            <h3 className="text-green-700 text-xl mb-4">Search Results</h3>

                            {/* No results message - this would be conditional based on search state */}
                            <div className="text-center py-8 text-gray-500">
                                <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                <p>Enter search criteria and click Search to find Story Guides</p>
                            </div>
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

export default StoryGuides;