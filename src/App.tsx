// import { useState } from 'react'
import {useMediaQuery} from "react-responsive";
import {BrowserRouter, Routes, Route, Navigate} from "react-router"
import {useState} from "react";
import PhoneNavBar from "./components/PhoneNavBar/PhoneNavBar.tsx"
import PcNavBar from "./components/PcNavBar/PcNavBar.tsx";
import PhoneMenu from "./components/PhoneMenu/PhoneMenu.tsx";
import './App.css'
import {ContextPhoneMenu} from "./contexts/ContextPhoneMenu.tsx";

function App() {
    const isMobile: boolean = useMediaQuery({maxWidth: "768px"});
    const [show, setShow] = useState(false);

    return (
        <>
            <ContextPhoneMenu.Provider value={{show, setShow}}>
                {isMobile ? <PhoneNavBar/> : <PcNavBar/>}
                <PhoneMenu></PhoneMenu>
            </ContextPhoneMenu.Provider>

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<div>hej</div>}></Route>

                    {/* This is to return to the homepage if the route is non-existant*/}
                    <Route path="*" element={<Navigate to={"/"}/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
