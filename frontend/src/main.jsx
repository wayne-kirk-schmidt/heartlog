import React from 'react'
import {createRoot} from 'react-dom/client'
import './style.css'
import App from './App'
import Contact from './Contact'
import Journey from './Journey'
import Memories from './Memories'
import Preferences from './Preferences'

import {BrowserOpenURL} from "../wailsjs/runtime/runtime.js";

import { HashRouter, Routes, Route} from 'react-router-dom'

const container = document.getElementById('root')

const root = createRoot(container)

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

root.render(
    <HashRouter basename="/">
        <Routes>
            <Route path="/" element={<App />} exact/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/journey" element={<Journey />}/>
            <Route path="/memories" element={<Memories />}/>
            <Route path="/preferences" element={<Preferences />}/>

        </Routes>
    </HashRouter>
)