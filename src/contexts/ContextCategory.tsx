import {createContext} from 'react';
import type {Context} from "react";

export interface project {
    projectId: number,
    projectName: string,
    projectPath: string,
    projectDescription: string,
    mainImg: string,
    assets: asset[],
    turnables: string[]
}

export interface asset {
    paths: string[],
    text: string | null,
    tag: "asset" | "reference"
}

interface category {
    name: string,
    description: string,
    projects: project[]
}

export interface Categories {
    [key: string]: category
}


// TODO: fix so that the contents are an object with a name, description, and array of strings (paths).
const allCategories: Categories = {
    artwork: {
        name: "Artwork",
        description: "Wow so amazing",
        projects: [
            {
                projectId: 1,
                projectName: "Santa Clause",
                projectDescription: "Wow a santa clause!",
                projectPath: "santa-clause",
                mainImg: "hej",
                assets: [
                    // "img1",
                    // "img2"
                ],
                turnables: []
            }
        ]
    },
    thirdperspective: {
        name: "3D",
        description: "Wow, 3D!",
        projects: [
            {
                projectId: 1,
                projectName: "Tom and Jerry",
                projectDescription: "Wow Tom and Jerry!!",
                projectPath: "tom-and-jerry",
                mainImg: "main.webp",
                assets: [
                    {
                        paths: ["asset_1.webp", "asset_2.webp"],
                        text: "First reference! :D",
                        tag: "reference"
                    },
                    {
                        paths: ["asset_1.webp"],
                        text: "second reference! :D",
                        tag: "reference"
                    },
                    {
                        paths: ["asset_5.webp", "asset_6.webp"],
                        text: "First Assets! :D",
                        tag: "asset"
                    },
                    {
                        paths: ["asset_3.webp", "asset_4.webp"],
                        text: "Second assets! :D",
                        tag: "asset"
                    },
                    // "asset_1.webp", "asset_2.webp", "asset_3.webp", "asset_4.webp", "asset_5.webp", "asset_6.webp"
                ],
                turnables: ["turnable_1.mp4", "turnable_2.mp4", "turnable_3.mp4"],
            },
            {
                projectId: 2,
                projectName: "Beauty Of Joseon",
                projectDescription: "wow a cream!",
                projectPath: "beauty-of-joseon",
                mainImg: "0.webp",
                assets: [
                    {
                        paths: ["reference.webp"],
                        text: "Here is a reference image with Zografa's hand in the image. I am an amazing data scientist and I love interactive movies!",
                        tag: "reference"
                    },

                    {
                        paths: ["2.webp", "3.webp"],
                        text: "My beautiful thing here",
                        tag: "asset"
                    },
                    {
                        paths: ["4.webp", "5.webp", "6.webp"],
                        text: "Clustered shit",
                        tag: "asset"
                    }
                ],
                turnables: ["7.mp4", "7.mp4"]
            },
            {
                projectId: 3,
                projectName: "Marc Jacobs",
                projectDescription: "wow marc jacobs!",
                projectPath: "marc-jacobs",
                mainImg: "main.webp",
                assets: [
                ],
                turnables: ["turnable_1.mp4"]
            }
        ]
    }
}
// const fullCategory: Categories = {
//     artwork: ["Artwork", "Description", placeholder_artwork, placeholder_artwork, placeholder_artwork],
//     thirdperspective: ["3D", "Description", placeholder_3d, placeholder_3d, placeholder_3d],
//     graphicdesign: ["Graphic Design", "Description", "graphicdesign", "graphicdesign-", "graphicdesign-", "graphicdesign-"],
// }

export const ContextCategory: Context<Categories> = createContext<Categories>(allCategories);
