import Offcanvas from "react-bootstrap/Offcanvas"
import {ContextPhoneMenu, type ShowPhoneMenuProps} from "../../contexts/ContextPhoneMenu.tsx";
import {useContext} from "react";


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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur debitis, delectus dolore et
                    excepturi exercitationem illo labore magni minima molestiae numquam officiis pariatur quam quas
                    quidem repellendus saepe similique ut?
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default PhoneMenu;