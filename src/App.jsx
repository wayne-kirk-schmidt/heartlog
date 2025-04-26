import {useState} from 'react'
import './App.css'
import './mytailwind.css'
import {Link} from "react-router-dom";

function App() {
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
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-200 flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-md">
                {/* Logo and Title */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-green-800 mb-2">Heart Log</h1>
                    <div className="text-green-600">Keeping in Contact, Preserving Memories</div>
                    <div className="text-green-600">Building Conenctions</div>
                </div>

                {/* Signup Form */}
                <div className="bg-white rounded-lg shadow-xl p-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Sign Up</h2>

                    <form onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="firstname" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                                <input
                                    type="text"
                                    id="firstname"
                                    name="firstname"
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

                            <Link to="/contact" className="font-medium text-green-600 hover:text-green-800
">
                                Contact us
                            </Link>
                            &nbsp;
                            for more information

                        </p>
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-8 text-center text-sm text-gray-600">
                    <p>By signing up, you agree to our Terms of Service and Privacy Policy</p>

                </div>
                <div className="mt-8 text-center text-sm text-gray-600">
          <p>© 2025 Heart Log. All rights reserved.</p>
        </div>
            </div>
        </div>
    )
}

export default App