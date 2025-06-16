import {Nav, Container} from "react-bootstrap";
import "./PcNavBar.css"
import "bootstrap/dist/css/bootstrap.min.css";

function PcNavBar(): React.ReactElement {


    return (
        <Nav variant="pills" defaultActiveKey="link-1"
             style={{backgroundColor: "var(--bireme)"}}>
            <Container className="pc-menu-container">
                <a href="/">
                    <img alt="Logo" src="/logoipsum.png"
                         style={{height: "50px", width: "50px", marginLeft: "40px", margin: "5px 0 5px 0"}}/>
                </a>

                <div className="pc-menu">

                    <Nav.Item>
                        <Nav.Link eventKey="link-1" href="/home">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2" href="/">Artwork</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-3">Graphic Design</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-4">3D</Nav.Link>
                    </Nav.Item>
                </div>
            </Container>
        </Nav>
    )
}

export default PcNavBar;