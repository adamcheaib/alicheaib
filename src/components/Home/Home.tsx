import "bootstrap/dist/css/bootstrap.min.css";
import {Container} from "react-bootstrap";
import "./Home.css";

function Home(): React.ReactElement {

    return (
        <>
            <Container className="links-container">
                <h1><a className="homeLink" href="./category/artwork/">Artwork</a></h1>
                <h1><a className="homeLink" href="./category/graphicdesign/">Graphic Design</a></h1>
                <h1><a className="homeLink" href="./category/thirdperspective/">3D</a></h1>
            </Container>
        </>
    )
}

export default Home;