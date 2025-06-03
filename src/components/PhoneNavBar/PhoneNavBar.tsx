import "./PhoneNavBar.css"
import "bootstrap/dist/css/bootstrap.min.css";
import {useContext} from "react"
import type {ReactNode} from "react";
import {ContextPhoneMenu, type ShowPhoneMenuProps} from "../../contexts/ContextPhoneMenu.tsx";

function PhoneNavBar(): React.ReactElement {
    const phoneMenuContext: ShowPhoneMenuProps | undefined = useContext(ContextPhoneMenu);
    if (!phoneMenuContext) {
        throw new Error("FUCK YOU");
    }

    const {setShow}: ShowPhoneMenuProps = phoneMenuContext;

    const hamburgerMenu: ReactNode = (
        <div onClick={() => setShow(true)} className="hamburger d-flex flex-column ">
            <div></div>
            <div></div>
            <div></div>
        </div>
    );

    return (
        <nav className="phone-nav d-grid">
            <div className="container-fluid  p-1">
                <div className="row w-100">
                    <div className="col p-0"></div>
                    <div className="col p-0 d-flex justify-content-center">
                        <img alt="Logo" src="/logoipsum.png"
                             style={{height: "50px", width: "50px", marginLeft: "40px"}}/>
                    </div>
                    <div className="col p-0 align-items-end d-flex flex-column justify-content-center">
                        {hamburgerMenu}
                    </div>
                </div>
            </div>
        </nav>

    )
}


export default PhoneNavBar;