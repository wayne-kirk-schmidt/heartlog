import React from 'react'
import {createRoot, hydrateRoot} from 'react-dom/client'
import './style.css'
import App from './App'
import Contact from './Contact'
import Journey from './Journey'
import Memories from './Memories'
import Preferences from './Preferences'
import Pricing from './Pricing'
import Signin from './Signin'
import StoryGuide from './StoryGuide'

import {BrowserOpenURL} from "../wailsjs/runtime/runtime.js";

import { HashRouter, Routes, Route} from 'react-router-dom'

const container = document.getElementById('root')



// root.render(
//     <React.StrictMode>
//         <App/>
//         <BrowserRouter>
//             <Routes>
//                 <Route path="/" element={<App/>}/>
//                 <Route path="/contact" element={<Contact/>}/>
//             </Routes>
//         </BrowserRouter>
//     </React.StrictMode>
// )

// const root = createRoot(container)
// root.render(
//     <HashRouter basename="/">
//         <Routes>
//             <Route path="/" element={<App />} exact/>
//             <Route path="/contact" element={<Contact />}/>
//             <Route path="/journey" element={<Journey />}/>
//             <Route path="/memories" element={<Memories />}/>
//             <Route path="/preferences" element={<Preferences />}/>
//             <Route path="/pricing" element={<Pricing />}/>
//             <Route path="/signin" element={<Signin />}/>
//             <Route path="/storyguide" element={<StoryGuide />}/>
//         </Routes>
//     </HashRouter>
// )

const app = (
    <HashRouter basename="/">
        <Routes>
            <Route path="/" element={<App />} exact/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/journey" element={<Journey />}/>
            <Route path="/memories" element={<Memories />}/>
            <Route path="/preferences" element={<Preferences />}/>
            <Route path="/pricing" element={<Pricing />}/>
            <Route path="/signin" element={<Signin />}/>
            <Route path="/storyguide" element={<StoryGuide />}/>
        </Routes>
    </HashRouter>
)

// Check if the root element has children to determine if it was pre-rendered
if (container.hasChildNodes()) {
    hydrateRoot(container, app)
} else {
    createRoot(container).render(app)
}
