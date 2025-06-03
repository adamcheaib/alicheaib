// import {ContextCategory} from "../../contexts/ContextCategory.tsx";
// import {useContext} from "react";
import "./ProjectView.css"
import {useParams} from "react-router";
import {type ReactElement, useContext} from "react";
import {type Categories, ContextCategory, type project} from "../../contexts/ContextCategory.tsx";
import {Stack, Container} from "react-bootstrap";


function ProjectView(): ReactElement {
    const categoryName: string = useParams().name!;
    const projectId: string = useParams().id!
    const fullCategories: Categories = useContext(ContextCategory);
    const categoryProjects: project[] = fullCategories[categoryName].projects;
    const queuedProject: project | undefined = categoryProjects.find((project: project) => project.projectId === parseInt(projectId));

    if (!queuedProject) {
        window.location.href = "/home";
    }

    const assets: ReactElement[] = [];

    for (let i = 0; i < queuedProject!.assets.length; i++) {
        const assetPath: string = "/material/" + queuedProject!.projectPath + "/" + queuedProject!.assets[i];
        const assetElement: ReactElement = <img key={i} src={assetPath}/>;
        assets.push(assetElement);
    }

    const mainImgPath: string = "/material/" + queuedProject!.projectPath + "/main.webp";
    const mainImg: ReactElement = <img src={mainImgPath}/>

    const turnables: ReactElement[] = [];

    for (let i = 0; i < queuedProject!.turnables.length; i++) {
        const turnablePath: string = "/material/" + queuedProject!.projectPath + "/" + queuedProject!.turnables[i];
        const turnableElement: ReactElement = (
            <video controls={false} loop key={i} muted autoPlay>
                <source src={turnablePath} type="video/mp4"/>
            </video>
        );

        turnables.push(turnableElement);
    }

    return (
        <>
            <Container className="projectContainer">
                <h1>{queuedProject!.projectName}</h1>
                <p>{queuedProject!.projectDescription}</p>
                {mainImg}

                <Stack className="assetsStack">
                    <h1>Used assets</h1>
                    {assets}
                    {turnables}
                </Stack>
            </Container>
        </>
    )
}

export default ProjectView;