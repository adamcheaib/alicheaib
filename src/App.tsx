import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import {useMediaQuery} from "react-responsive";
import {BrowserRouter, Routes, Route, Navigate} from "react-router"
import {useState} from "react";
import Home from "./components/Home/Home.tsx"
import Footer from "./components/Footer/Footer.tsx"
import PhoneNavBar from "./components/PhoneNavBar/PhoneNavBar.tsx"
import PcNavBar from "./components/PcNavBar/PcNavBar.tsx";
import PhoneMenu from "./components/PhoneMenu/PhoneMenu.tsx";
import WorkOverview from "./components/WorkOverview/WorkOverview.tsx";
import {ContextPhoneMenu} from "./contexts/ContextPhoneMenu.tsx";
import ProjectView from "./components/ProjectView/ProjectView.tsx";

function App() {
    const isMobile: boolean = useMediaQuery({maxWidth: "768px"});
    const [show, setShow] = useState(false);
    document.body.classList.add("mainBg");

    return (
        <>
            <ContextPhoneMenu.Provider value={{show, setShow}}>
                {isMobile ? <PhoneNavBar/> : <PcNavBar/>}
                <PhoneMenu></PhoneMenu>
            </ContextPhoneMenu.Provider>
            <main>
                <BrowserRouter>
                    <Routes>
                        <Route path="/home" element={<Home></Home>}></Route>
                        <Route path="/category/:name" element={<WorkOverview/>}></Route>
                        <Route path="/category/:name/:id" element={<ProjectView/>}></Route>

                        {/* This is to return to the homepage if the route is non-existant*/}
                        <Route path="*" element={<Navigate to={"/home"}/>}></Route>
                    </Routes>
                </BrowserRouter>
            </main>

            <Footer></Footer>
        </>
    )
}

export default App
