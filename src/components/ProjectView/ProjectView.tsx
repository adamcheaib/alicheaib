import "./ProjectView.css"
import {useParams} from "react-router";
import {type ReactElement, useContext} from "react";
import {type Categories, ContextCategory, type project, type asset} from "../../contexts/ContextCategory.tsx";
import {Stack, Container} from "react-bootstrap";
import {bgRemover} from "../../utils/utils.tsx";


function ProjectView(): ReactElement {
    bgRemover();
    const categoryName: string = useParams().name!;
    const projectId: string = useParams().id!
    const fullCategories: Categories = useContext(ContextCategory);
    const categoryProjects: project[] = fullCategories[categoryName].projects;
    const queuedProject: project | undefined = categoryProjects.find((project: project) => project.projectId === parseInt(projectId));
    const categoryReadableName: string = fullCategories[categoryName].name;

    if (!queuedProject) {
        window.location.href = "/home";
    }

    const assets: ReactElement[] = [];
    const references: ReactElement[] = [];

    // const testAssets = queuedProject!.assets.filter(d => d.tag === "asset");
    // console.log(testAssets);

    /*TODO: Loop through filtered references and filtered assets instead. This way you can group the different related assets to each other! This is merely for design!*/
    const filteredReferences: asset[] = queuedProject!.assets.filter(d => d.tag === "reference");
    const filteredAssets: asset[] = queuedProject!.assets.filter(d => d.tag === "asset");
    const rootPath: string = "/material/" + queuedProject!.projectPath + "/";

    filteredReferences.forEach((d, index) => {
        const tempRefs: ReactElement[] = [];

        for (let i = 0; i < d.paths.length; i++) {
            const fullPath: string = rootPath + d.paths[i];
            tempRefs.push(<img className="referenceImg" src={fullPath} key={"ref-" + i} alt="Reference image"/>)
        }

        references.push(<Stack key={index} style={{alignItems: "center"}}>{tempRefs}<p className="referenceImg">{d.text}</p>
        </Stack>)
    });


    filteredAssets.forEach((d, index) => {
        const tempAssets: ReactElement[] = [];
        const imgPath: string = "/material/" + queuedProject!.projectPath + "/";

        for (let i = 0; i < d.paths.length; i++) {
            const fullPath: string = imgPath + d.paths[i];
            tempAssets.push(<img className="assetImg" src={fullPath} key={"asset-" + i} alt="Reference image"/>)
        }

        assets.push(<Stack key={index} style={{alignItems: "center"}}>{tempAssets}<p className="assetImg">{d.text}</p></Stack>)
    })

    const mainImg: ReactElement = <img className="assetImg" alt="Main image of the project" src={rootPath + "main.webp"}/>

    // For 3D projects only
    const turnables: ReactElement[] = [];

    for (let i = 0; i < queuedProject!.turnables.length; i++) {
        const turnablePath: string = "/material/" + queuedProject!.projectPath + "/" + queuedProject!.turnables[i];

        // The playsInline attribute makes sure that the video can be played without fullscreen!
        const turnableElement: ReactElement = (
            <video className="threeD-video" controls={false} loop={true} key={i} muted={true} autoPlay={true}
                   playsInline={true}>
                <source src={turnablePath} type="video/mp4"/>
            </video>
        );

        turnables.push(turnableElement);
    }

    return (
        <>
            <Container className="projectContainer">

                <a href="../">
                    <button className="projectBackBtn">Back to {categoryReadableName}</button>
                </a>
                <h1 style={{justifySelf: "center", gridRow: 1, gridColumn: 1}}>{queuedProject!.projectName}</h1>
                <p>{queuedProject!.projectDescription}</p>
                {mainImg}

                <Stack className="assetsStack">
                    <h1>References</h1>
                    {references}

                    <h1 style={{marginTop: "75px"}}>Used assets</h1>
                    {assets}
                    <div id="turnables">
                        {turnables}
                    </div>
                </Stack>

                <a href="../">
                    <button className="projectBackBtn">Back to {categoryReadableName}</button>
                </a>
            </Container>
        </>
    )
}

export default ProjectView;