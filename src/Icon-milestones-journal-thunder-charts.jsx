import './App.css'
import './mytailwind.css'
import { Link } from "react-router-dom";

function Journey() {
    return (
        <div
            className="min-h-screen bg-gradient-to-br from-blue-50 to-green-200 flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-md">
                {/* Logo and Title */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-green-800 mb-2">Heart Vine</h1>
                    <div className="text-green-600">Your Personal Growth Journey</div>
                    <div className="text-green-600">Track Your Progress</div>
                </div>

                {/* Journey Content */}
                <div className="bg-white rounded-lg shadow-xl p-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Your Journey</h2>

                    {/* Journey Milestone Card */}
                    <div className="bg-white border border-green-700 rounded-xl p-4 flex hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-100 focus:ring-offset-2 mt-6 transition-colors items-center">
                        <div className="h-14 w-14 rounded-full bg-green-50 flex items-center justify-center mr-4">
                            <svg className="h-9 w-9 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                        </div>
                        <div className="flex-1">
                            <h2 className="text-green-700 text-2xl">Milestones</h2>
                            <p className="text-green-500 text-sm">Track your personal growth journey</p>
                        </div>
                    </div>

                    {/* Journal Entry Card */}
                    <div className="bg-white border border-green-700 rounded-xl p-4 flex hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-100 focus:ring-offset-2 mt-6 transition-colors items-center">
                        <div className="h-14 w-14 rounded-full bg-green-50 flex items-center justify-center mr-4">
                            <svg className="h-9 w-9 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                            </svg>
                        </div>
                        <div className="flex-1">
                            <h2 className="text-green-700 text-2xl">Journal</h2>
                            <p className="text-green-500 text-sm">Record your thoughts and feelings</p>
                        </div>
                    </div>

                    {/* Goals Card */}
                    <div className="bg-white border border-green-700 rounded-xl p-4 flex hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-100 focus:ring-offset-2 mt-6 transition-colors items-center">
                        <div className="h-14 w-14 rounded-full bg-green-50 flex items-center justify-center mr-4">
                            <svg className="h-9 w-9 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M13 10V3L4 14h7v7l9-11h-7z"/>
                            </svg>
                        </div>
                        <div className="flex-1">
                            <h2 className="text-green-700 text-2xl">Goals</h2>
                            <p className="text-green-500 text-sm">Set and track your personal goals</p>
                        </div>
                    </div>

                    {/* Progress Visualization Card */}
                    <div className="bg-white border border-green-700 rounded-xl p-4 flex hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-100 focus:ring-offset-2 mt-6 transition-colors items-center">
                        <div className="h-14 w-14 rounded-full bg-green-50 flex items-center justify-center mr-4">
                            <svg className="h-9 w-9 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                            </svg>
                        </div>
                        <div className="flex-1">
                            <h2 className="text-green-700 text-2xl">Visualize</h2>
                            <p className="text-green-500 text-sm">See your growth over time</p>
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
    );
}

export default Journey;