import {useState} from 'react';
import logo from './assets/images/logo-universal.png';
import './App.css';
import './mytailwind.css'
import {Greet} from "../wailsjs/go/main/App";
import {Link} from "react-router-dom";

function Journey() {
    const [searchData, setSearchData] = useState({
        date: '',
        keyword: '',
        person: ''
    });

    const [resultText, setResultText] = useState("Please enter your name below 👇");
    const [name, setName] = useState('');
    const updateName = (e) => setName(e.target.value);
    const updateResultText = (result) => setResultText(result);

    // State for selected date node on timeline
    const [selectedDateIndex, setSelectedDateIndex] = useState(3); // Default selected date (index 3)

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setSearchData({
            ...searchData,
            [name]: value
        });
    };

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Search with:', searchData);
        // Implement search logic here
    };

    // Handle timeline date selection
    const handleDateSelect = (index) => {
        setSelectedDateIndex(index);
        // You could update other parts of your state here based on the selected date
    };

    // Sample person data for dropdown
    const people = [
        {id: 1, name: "Select a person"},
        {id: 2, name: "Pastor Jeff"},
        {id: 3, name: "Wayne L Schmidt"},
        {id: 4, name: "Wayne K Schmidt"},
        {id: 5, name: "Jake Nguyen"}
    ];

    // Generate 10 consecutive dates starting from today
    const generateDates = () => {
        const dates = [];
        const today = new Date();

        for (let i = 0; i < 10; i++) {
            const date = new Date(today);
            date.setDate(today.getDate() + i);
            dates.push(date);
        }

        return dates;
    };

    const timelineDates = generateDates();

    return (
        <div id="Journey">


            <div
                className="min-h-screen bg-gradient-to-br from-lime-50 to-lime-100 flex flex-col items-center justify-center p-4">
                <div className="w-full max-w-4xl">
                    {/* Logo and Title */}
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold text-green-950 mb-2">HeartLog</h1>
                        <div className="text-green-950">builds family history</div>
                        <div className="text-green-950">through memories</div>
                    </div>

                    {/* Journey Content */}
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
                                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 bg-green-100">
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
                                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 ">
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
                                            Story Guide
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
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Your Journey</h2>


                        {/* Search Card */}
                        <div
                            className="bg-white border border-green-700 rounded-xl p-6 focus-within:ring-2 focus-within:ring-green-300 focus-within:ring-offset-2 mt-6 transition-colors">
                            <div className="flex items-center mb-4">
                                <div
                                    className="h-10 w-10 rounded-full bg-green-50 flex items-center justify-center mr-3">
                                    <svg className="h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg"
                                         fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                                    </svg>
                                </div>
                                <h2 className="text-green-700 text-2xl">Search Entries</h2>
                            </div>

                            <form onSubmit={handleSearch}>
                                <div className="flex flex-wrap -mx-2">
                                    {/* Date Picker */}
                                    <div className="w-full md:w-1/3 px-2 mb-4">
                                        <label className="block text-green-700 text-sm font-medium mb-2" htmlFor="date">
                                            Date
                                        </label>
                                        <input
                                            type="date"
                                            id="date"
                                            name="date"
                                            value={searchData.date}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 text-green-700 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                        />
                                    </div>

                                    {/* Keyword Search */}
                                    <div className="w-full md:w-1/3 px-2 mb-4">
                                        <label className="block text-green-700 text-sm font-medium mb-2"
                                               htmlFor="keyword">
                                            Keyword
                                        </label>
                                        <input
                                            type="text"
                                            id="keyword"
                                            name="keyword"
                                            placeholder="Search by keyword"
                                            value={searchData.keyword}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 text-green-700 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                        />
                                    </div>

                                    {/* Person Dropdown */}
                                    <div className="w-full md:w-1/3 px-2 mb-4">
                                        <label className="block text-green-700 text-sm font-medium mb-2"
                                               htmlFor="person">
                                            Person
                                        </label>
                                        <select
                                            id="person"
                                            name="person"
                                            value={searchData.person}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 text-green-700 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
                                        >
                                            {people.map((person) => (
                                                <option key={person.id} value={person.id === 1 ? '' : person.name}>
                                                    {person.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                {/* Search Button */}
                                <div className="flex justify-end mt-2">
                                    <button
                                        type="submit"
                                        className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                                    >
                                        Search
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Results Area (placeholder) */}
                        <div className="mt-8 p-4 border border-gray-200 rounded-lg bg-gray-50">
                            <p className="text-gray-500 text-center">10 results were found</p>
                        </div>

                        {/* Timeline Component */}
                        <div className="mb-8">
                            <div className="relative py-8">
                                {/* Horizontal Line */}
                                <div
                                    className="absolute h-0.5 w-full bg-green-200 top-1/2 transform -translate-y-1/2"></div>

                                {/* Date Nodes */}
                                <div className="flex justify-between relative">
                                    {timelineDates.map((date, index) => (
                                        <div key={index} className="flex flex-col items-center">
                                            {/* Circle Node */}
                                            <div
                                                className={`w-6 h-6 rounded-full border-2 border-green-500 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 transition-colors z-10 
                                            ${selectedDateIndex === index ? 'bg-green-500' : 'bg-white'}`}
                                                onClick={() => handleDateSelect(index)}
                                                aria-label={`Select date ${date.toLocaleDateString()}`}
                                            >
                                                {selectedDateIndex === index && (
                                                    <span className="sr-only">Selected</span>
                                                )}
                                            </div>

                                            {/* Date Label */}
                                            <div className="text-xs text-green-700 mt-2 text-center">
                                                {date.toLocaleDateString('en-US', {month: 'short', day: 'numeric'})}
                                            </div>
                                        </div>
                                    ))}
                                </div>
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

export default Journey;