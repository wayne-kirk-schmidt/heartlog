import {useState} from 'react';
import './App.css';
import './mytailwind.css'
import {Link} from "react-router-dom";

function SignIn() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
    })

    const handleInputChange = (e) => {
        const {name, value, type, checked} = e.target
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Sign in form submitted:', formData)
        // Handle signin logic here
    }

    return (
        <div id="SignIn">
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
                        <div className="text-green-600">Building Connections</div>
                    </div>

                    {/* Signin Form */}
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
                                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 bg-green-100">
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
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Sign In</h2>

                        <form onSubmit={handleSubmit}>
                            <div className="space-y-4">
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
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        placeholder="••••••••"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-green-900"
                                        required
                                    />
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            id="rememberMe"
                                            name="rememberMe"
                                            checked={formData.rememberMe}
                                            onChange={handleInputChange}
                                            className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                                        />
                                        <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-700">
                                            Remember me
                                        </label>
                                    </div>

                                    <div className="text-sm">
                                        <Link to="/forgot-password" className="font-medium text-green-600 hover:text-green-800">
                                            Forgot password?
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 mt-6 transition-colors"
                            >
                                Sign In
                            </button>
                        </form>

                        {/* Divider with "or" text */}
                        <div className="mt-6 relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">Or continue with</span>
                            </div>
                        </div>

                        {/* Social Sign-in Buttons */}
                        <div className="mt-6 grid grid-cols-2 gap-3">
                            <button
                                type="button"
                                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                            >
                                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                                </svg>
                                Google
                            </button>
                            <button
                                type="button"
                                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                            >
                                <svg className="w-5 h-5 mr-2" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11 11H0V0H11V11Z" fill="#F25022"/>
                                    <path d="M23 11H12V0H23V11Z" fill="#7FBA00"/>
                                    <path d="M11 23H0V12H11V23Z" fill="#00A4EF"/>
                                    <path d="M23 23H12V12H23V23Z" fill="#FFB900"/>
                                </svg>
                                Microsoft
                            </button>

                        </div>

                        <div className="mt-6 text-center">
                            <p className="text-sm text-gray-600">
                                Don't have an account?{' '}
                                <Link to="/" className="font-medium text-green-600 hover:text-green-800">
                                    Sign Up
                                </Link>
                            </p>
                            <p className="text-sm text-gray-600 mt-2">
                                <Link to="/contact" className="font-medium text-green-600 hover:text-green-800">
                                    Contact us
                                </Link>
                                &nbsp;
                                for more information.
                            </p>
                        </div>
                    </div>

                    {/*Footer*/}
                    <div className="mt-8 text-center text-sm text-gray-600">
                        <p>By signing in, you agree to our Terms of Service and Privacy Policy</p>
                    </div>
                    <div className="mt-4 text-center text-sm text-gray-600">
                        <p>© 2025 Heart Log. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn