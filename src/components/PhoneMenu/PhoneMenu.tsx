import Offcanvas from "react-bootstrap/Offcanvas"
import {ContextPhoneMenu, type ShowPhoneMenuProps} from "../../contexts/ContextPhoneMenu.tsx";
import {useContext} from "react";
import {Stack, Dropdown} from "react-bootstrap";
import "./PhoneMenu.css"


function PhoneMenu(): React.ReactElement {
    const contextPhoneMenu = useContext(ContextPhoneMenu);
    if (!contextPhoneMenu) {
        throw new Error("ContextPhoneMenu needs a provider")
    }
    const {show, setShow}: ShowPhoneMenuProps = contextPhoneMenu;

    return (
        <>
            <Offcanvas show={show} onHide={() => setShow(false)} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Ali Cheaib</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Stack className="phoneMenu" style={{alignItems: "center"}}>
                        <a className="phoneOption" href="#">Home</a>
                        <a className="phoneOption" href="#">About me</a>
                        <a className="phoneOption" href="#">Bireme Studios</a>
                        <Dropdown drop="down-centered" className="dropDownBtn">
                            <Dropdown.Toggle>
                                Categories
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item className="phoneOption" href="#">Artwork</Dropdown.Item>
                                <Dropdown.Item className="phoneOption" href="#">3D</Dropdown.Item>
                                <Dropdown.Item className="phoneOption" href="#">Graphic Design</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                    </Stack>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default PhoneMenu;