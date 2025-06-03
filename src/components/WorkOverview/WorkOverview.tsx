import "./WorkOverview.css"
import {ContextCategory} from "../../contexts/ContextCategory.tsx";
import {useContext} from "react";
import type {Categories, project} from "../../contexts/ContextCategory.tsx";
import {useParams} from "react-router";
import {Stack, Container} from "react-bootstrap";
import type {ReactElement} from "react";

function WorkOverview(): ReactElement {
    const categories: Categories = useContext(ContextCategory);
    if (!categories) throw new Error("Category context not found");

    const categoryName: string = useParams().name!;

    if (!(categoryName in categories) || categoryName === undefined) {
        window.location.href = "/";
        return <></>;
    }

    const reactElements: ReactElement[] = [];
    const categoryProjects: project[] = categories[categoryName].projects;

    for (let i = 0; i < categoryProjects.length; i++) {
        const {projectId, projectName, projectPath} = categoryProjects[i];

        const post: ReactElement = (
            <a href={"./" + projectId + "/"} className="clickable">
                <p style={{margin: 0, fontSize: "32px"}}>{projectName}</p>
                <img className="work-image" key={i} src={"/material/" + projectPath + "/main.webp"} alt="Rastaman" />
            </a>
        )
        reactElements.push(post);
    }

    return (
        <>
            <Container className="workOverview">
                <h1>{categories[categoryName].name}</h1>
                <p>{categories[categoryName].description}</p>

                <Stack className="image-stack">
                    {reactElements}
                </Stack>
            </Container>
        </>
    )
}

export default WorkOverview;