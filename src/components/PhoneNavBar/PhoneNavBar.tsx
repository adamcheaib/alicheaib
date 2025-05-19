import "./PhoneNavBar.css"
import "bootstrap/dist/css/bootstrap.min.css";

function PhoneNavBar(): React.ReactElement {

    return (
        <nav className="phone-nav d-grid">
            <div className="container-fluid  p-1">
                <div className="row w-100">
                    <div className="col p-0"></div>
                    <div className="col p-0 d-flex justify-content-center">
                        <img alt="Logo" src="/logoipsum.png" style={{height: "50px", width: "50px", marginLeft: "40px"}} />
                    </div>
                    <div className="col p-0 align-items-end d-flex flex-column justify-content-center">
                        <div className="hamburger d-flex flex-column p-0 ">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default PhoneNavBar;