import {Nav} from "react-bootstrap";
import "./PcNavBar.css"
import "bootstrap/dist/css/bootstrap.min.css";

function PcNavBar(): React.ReactElement {


    return (
        <Nav className="justify-content-center" style={{backgroundColor: "#4F0069"}}>
            <Nav.Item>
                <Nav.Link>
                    KAKRIKO
                </Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default PcNavBar;