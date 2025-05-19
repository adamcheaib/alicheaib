// import { useState } from 'react'
import {useMediaQuery} from "react-responsive";
import {BrowserRouter, Routes, Route, Navigate} from "react-router"
import PhoneNavBar from "./components/PhoneNavBar/PhoneNavBar.tsx"
import PcNavBar from "./components/PcNavBar/PcNavBar.tsx";
import Footer from "./components/Footer/Footer.tsx"
import './App.css'

function App() {
const isMobile: boolean = useMediaQuery({maxWidth: "768px"});

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={isMobile ? <PhoneNavBar /> : <PcNavBar />}></Route>

                {/* This is to return to the homepage if the route is non-existant*/}
                <Route path="*" element={<Navigate to={"/" }/>}></Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
