import {createContext} from 'react';
import type {Context} from "react";

export interface project {
    projectId: number,
    projectName: string,
    projectPath: string,
    projectDescription: string,
    mainImg: string,
    assets: string[],
    turnables: string[]
}

interface category {
    name: string,
    description: string,
    projects: project[]
}

export interface Categories {
    [key: string]: category
}

// const placeholder_artwork: string = "https://thumbs.dreamstime.com/b/default-placeholder-businessman-half-length-portr-portrait-photo-avatar-man-gray-color-113622427.jpg";
// const placeholder_3d: string = "https://thumbs.dreamstime.com/b/default-placeholder-doctor-half-length-portrait-photo-avatar-gray-color-default-placeholder-doctor-half-length-portrait-113622206.jpg";

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
                    "img1",
                    "img2"
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
                assets: ["asset_1.webp", "asset_2.webp", "asset_3.webp", "asset_4.webp", "asset_5.webp", "asset_6.webp"],
                turnables: ["turnable_1.mp4", "turnable_2.mp4", "turnable_3.mp4"],
            },
            {
                projectId: 2,
                projectName: "Beauty Of Joseon",
                projectDescription: "wow a cream!",
                projectPath: "beauty-of-joseon",
                mainImg: "main.webp",
                assets: ["asset_1.webp", "asset_2.webp"],
                turnables: ["turnable_1.mp4"]
            },
            {
                projectId: 3,
                projectName: "Marc Jacobs",
                projectDescription: "wow marc jacobs!",
                projectPath: "marc-jacobs",
                mainImg: "main.webp",
                assets: ["asset_1.webp", "asset_2.webp", "asset_3.webp", "asset_4.webp", "asset_5.webp", "asset_6.webp", "asset_7.webp"],
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
