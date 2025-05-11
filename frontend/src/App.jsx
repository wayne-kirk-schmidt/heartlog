import {useState} from 'react';
import logo from './assets/images/logo-universal.png';
import './App.css';
import './mytailwind.css'
import {Greet} from "../wailsjs/go/main/App";

function App() {
    const [resultText, setResultText] = useState("Please enter your name below 👇");
    const [name, setName] = useState('');
    const updateName = (e) => setName(e.target.value);
    const updateResultText = (result) => setResultText(result);

    function greet() {
        Greet(name).then(updateResultText);
    }

    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phoneno: '',
        country: ''
    })

    const handleInputChange = (e) => {
        const {name, value} = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
        // Handle signup logic here
    }

    return (
        <div id="App">


            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-200 flex flex-col items-center justify-center p-4">
                <div className="w-full max-w-md">
                    {/* Logo and Title */}
                    <div className="text-center mb-8">
                        <div>
                            <a href="http://www.heartlog.com" target>
                                {/*<img src={heartLogLogo} className="logo" alt="heartlog logo" />*/}
                            </a>
                        </div>
                        <h1 className="text-4xl font-bold text-green-800 mb-2">Heart Log</h1>
                        <div className="text-green-600">Keeping in Contact, Preserving Memories</div>
                        <div className="text-green-600">Building Conenctions</div>
                    </div>

                    {/* Signup Form */}
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
                                        <a href="#"
                                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 bg-green-100">
                                            Sign Up
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/contact"
                                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700">
                                            Contact
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/journey"
                                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700">
                                            Journey
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/memories"
                                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700">
                                            Memories
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/preferences"
                                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 ">
                                            Preferences
                                        </a>
                                    </li>

                                    <li className="border-t border-gray-200">
                                        <a href="/"
                                              className="block px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                                            Logout
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Sign Up</h2>

                        <form onSubmit={handleSubmit}>
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="firstname" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                                    <input
                                        type="text"
                                        id="firstname"
                                        name="firstname"
                                        placeholder="John"
                                        value={formData.firstname}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-green-900"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="lastname" className="block text-sm font-medium text-gray-700 mb-1">Last
                                        Name</label>
                                    <input
                                        type="text"
                                        id="lastname"
                                        name="lastname"
                                        placeholder="Doe"
                                        value={formData.lastname}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-green-900"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email
                                        Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="john.doe@heartlog.com"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-green-900"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phoneno" className="block text-sm font-medium text-gray-700 mb-1">Phone
                                        Number</label>
                                    <input
                                        type="text"
                                        id="phoneno"
                                        name="phoneno"
                                        placeholder="0412345678"
                                        value={formData.phoneno}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-green-900"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="country"
                                           className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                                    <select
                                        id="country"
                                        name="country"
                                        value={formData.country}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-green-900"
                                        required
                                    >
                                        <option value="" disabled>Select a country</option>
                                        <option value="USA">USA</option>
                                        <option value="Japan">Japan</option>
                                        <option value="Singapore">Singapore</option>
                                        <option value="Australia">Australia</option>
                                    </select>
                                </div>

                            </div>

                            <button
                                type="submit"
                                className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 mt-6 transition-colors"
                            >
                                Sign Up
                            </button>
                        </form>

                        <div className="mt-6 text-center">
                            <p className="text-sm text-gray-600">
                                Already have an account?{' '}
                                <a href="#" className="font-medium">
                                    Log In
                                </a>
                            </p>
                            <p className="text-sm text-gray-600">

                                <a href="/contact" className="font-medium text-green-600 hover:text-green-800
">
                                    Contact us
                                </a>
                                &nbsp;
                                for more information.


                            </p>

                        </div>
                    </div>

                     {/*Footer*/}
                    <div className="mt-8 text-center text-sm text-gray-600">
                        <p>By signing up, you agree to our Terms of Service and Privacy Policy</p>

                    </div>
                    <div className="mt-8 text-center text-sm text-gray-600">
                        <p>© 2025 Heart Log. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default App
