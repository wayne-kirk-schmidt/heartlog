import './App.css'
import './mytailwind.css'
import {Link} from "react-router-dom";

function App() {
    // const [formData, setFormData] = useState({
    //     firstname: '',
    //     lastname: '',
    //     email: '',
    //     phoneno: '',
    //     country: ''
    // })

    // const handleInputChange = (e) => {
    //     const {name, value} = e.target
    //     setFormData({
    //         ...formData,
    //         [name]: value
    //     })
    // }
    //
    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     console.log('Form submitted:', formData)
    //     // Handle signup logic here
    // }

    return (
        <div
            className="min-h-screen bg-gradient-to-br from-blue-50 to-green-200 flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-md">
                {/* Logo and Title */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-green-800 mb-2">Heart Log</h1>
                    <div className="text-green-600">Keeping in Contact, Preserving Memories</div>
                    <div className="text-green-600">Building Conenctions</div>
                </div>

                {/* Signup Form */}
                <div className="bg-white rounded-lg shadow-xl p-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Contact Us</h2>



                  <div className="bg-white border border-green-700 rounded-xl p-4 flex hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-100 focus:ring-offset-2 mt-6 transition-colors items-center">

                    <div className="h-14 w-14 rounded-full bg-green-50 flex items-center justify-center mr-4">

                      <svg className="h-9 w-9 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none"
                             viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>


                    </div>

                    <div className="flex-1">
                        <h2 className="text-green-700 text-2xl ">Email</h2>
                        <p className="text-green-500 text-sm">info@heartlog.com</p>
                      </div>
                  </div>

                   <div className="bg-white border border-green-700 rounded-xl p-4 flex hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-100 focus:ring-offset-2 mt-6 transition-colors items-center">

                    <div className="h-14 w-14 rounded-full bg-green-50 flex items-center justify-center mr-4">

                      <svg
  className="h-9 w-9 text-green-600"
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
>
  {/* Main globe circle */}
  <circle cx="12" cy="12" r="9" strokeWidth="1.5" />

  {/* Horizontal lines representing latitude */}
  <path d="M3 12h18" strokeWidth="0.8" />
  <path d="M4 7h16" strokeWidth="0.8" />
  <path d="M4 17h16" strokeWidth="0.8" />

  {/* Vertical lines representing longitude */}
  <path d="M12 3v18" strokeWidth="0.8" />
  <path d="M7 4v16" strokeWidth="0.8" />
  <path d="M17 4v16" strokeWidth="0.8" />

  {/* Web/internet indicator elements */}
  <path d="M15 8l2 2" strokeWidth="1.2" />
  <path d="M7 14l2 2" strokeWidth="1.2" />

  {/* Small connection points */}
  <circle cx="17" cy="10" r="0.8" strokeWidth="0" fill="currentColor" />
  <circle cx="9" cy="16" r="0.8" strokeWidth="0" fill="currentColor" />
  <circle cx="12" cy="12" r="1" strokeWidth="0" fill="currentColor" />
</svg>



                    </div>

                    <div className="flex-1">
                        <h2 className="text-green-700 text-2xl ">Website</h2>
                        <p className="text-green-500 text-sm">www.heartlog.com</p>
                      </div>
                  </div>

                  <div className="bg-white border border-green-700 rounded-xl p-4 flex hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-100 focus:ring-offset-2 mt-6 transition-colors items-center">

                    <div className="h-14 w-14 rounded-full bg-green-50 flex items-center justify-center mr-4">

                      <svg className="h-9 w-9 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none"
                             viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>


                    </div>

                    <div className="flex-1">
                        <h2 className="text-green-700 text-2xl ">Support</h2>
                        <p className="text-green-500 text-sm">080-1234-5678</p>
                      </div>
                  </div>


                  <div className="bg-blue-50 border border-blue-700 rounded-xl p-4 mt-4 text-center">
            <Link to="/" className="text-white hover:text-white font-medium">
              Back Signup
            </Link>
          </div>
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