function Footer(): React.ReactElement {
    return (
        <footer>
            <img alt="Logo"></img>

            <div style={{marginTop: "20px", marginBottom: "20px", display: "flex", flexDirection: "column", gap: "5px"}}>
                <p style={{margin: "0"}}>About me</p>
                <p style={{margin: "0"}}>Artwork</p>
                <p style={{margin: "0"}}>Graphic Design</p>
                <p style={{margin: "0"}}>3D</p>
            </div>

            <p>Bireme Studios</p>
        </footer>
    )
}

export default Footer;