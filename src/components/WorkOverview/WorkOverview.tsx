import "./WorkOverview.css";
import {ContextCategory} from "../../contexts/ContextCategory.tsx";
import {useContext} from "react";
import type {Categories, project} from "../../contexts/ContextCategory.tsx";
import {useParams} from "react-router";
import {Stack, Container} from "react-bootstrap";
import type {ReactElement} from "react";
import {bgRemover} from "../../utils/utils.tsx";
import {useMediaQuery} from "react-responsive";

function WorkOverview(): ReactElement {
    const isMobile: boolean = useMediaQuery({maxWidth: "990px"});
    bgRemover();
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
            <a href={"./" + projectId + "/"} className="clickable" key={i}>
                <p className="clickable-name">{projectName}</p>
                <img className="work-image" key={i} src={"/material/" + projectPath + "/main.webp"} alt="Rastaman" />
            </a>
        )
        reactElements.push(post);
    }

    return (
        <>
            <Container className="workOverview">
                <a href="../" style={{marginBottom: "35px"}}>
                    <button className="projectBackBtn">Back to categories</button>
                </a>
                <h1>{categories[categoryName].name}</h1>
                <p>{categories[categoryName].description}</p>

                {isMobile ? <Stack className="image-stack">{reactElements}</Stack> : <div className="image-grid">{reactElements}</div>}

            </Container>
        </>
    )
}

export default WorkOverview;