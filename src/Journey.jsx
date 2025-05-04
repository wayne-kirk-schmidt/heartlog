import './App.css'
import './mytailwind.css'
import { Link } from "react-router-dom";
import { useState } from 'react';

function Journey() {
    const [searchData, setSearchData] = useState({
        date: '',
        keyword: '',
        person: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
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

    // Sample person data for dropdown
    const people = [
        { id: 1, name: "Select a person" },
        { id: 2, name: "Pastor Jeff" },
        { id: 3, name: "Wayne L Smith" },
        { id: 4, name: "Wayne K Smith" },
        { id: 5, name: "Jake Nguyen" }
    ];

    return (
        <div
            className="min-h-screen bg-gradient-to-br from-blue-50 to-green-200 flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-4xl">
                {/* Logo and Title */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-green-800 mb-2">Heart Vine</h1>
                    <div className="text-green-600">Keeping in Contact, Preserving Memories</div>
                    <div className="text-green-600">Building Conenctions</div>
                </div>

                {/* Journey Content */}
                <div className="bg-white rounded-lg shadow-xl p-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Your Journey</h2>

                    {/* Search Card */}
                    <div className="bg-white border border-green-700 rounded-xl p-6 hover:bg-green-50 focus-within:ring-2 focus-within:ring-green-300 focus-within:ring-offset-2 mt-6 transition-colors">
                        <div className="flex items-center mb-4">
                            <div className="h-10 w-10 rounded-full bg-green-50 flex items-center justify-center mr-3">
                                <svg className="h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none"
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
                                    <label className="block text-green-700 text-sm font-medium mb-2" htmlFor="keyword">
                                        Keyword
                                    </label>
                                    <input
                                        type="text"
                                        id="keyword"
                                        name="keyword"
                                        placeholder="Search by keyword"
                                        value={searchData.keyword}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border text-green-700 border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                    />
                                </div>

                                {/* Person Dropdown */}
                                <div className="w-full md:w-1/3 px-2 mb-4">
                                    <label className="block text-green-700 text-sm font-medium mb-2" htmlFor="person">
                                        Person
                                    </label>
                                    <select
                                        id="person"
                                        name="person"
                                        value={searchData.person}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border text-green-700 border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
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
                        <p className="text-gray-500 text-center">Search results will appear here</p>
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
    );
}

export default Journey;