import { createContext } from "react";

export const UserContext = createContext();
export const GroupContext = createContext();

export const songs = {
    1: {
        name: "Dancing King",
        group: 1,
        isPrivate: false,
    },
    2: {
        name: "Bohemian Rap City",
        group: 1,
        isPrivate: false,
    },
    3: {
        name: "Stereoactive",
        group: 2,
        isPrivate: false,
    },
    4: {
        name: "Lightning",
        group: 2,
        isPrivate: false,
    },
    5: {
        name: "Sucker for Spain",
        group: 2,
        isPrivate: false,
    }
}

export const groups = {
    1: {
        name: "w",
        members: ["w"],
        songs: [
            1, 2
        ],
        isPrivate: false,
    },
    2: {
        name: "Imagine Wagons",
        members: ["w"],
        songs: [
            3, 4, 5
        ],
        isPrivate: false,
    },
}

export const users = {
    "w": {
        password: "w",
        groups: [
            1, 2
        ]
    },
}