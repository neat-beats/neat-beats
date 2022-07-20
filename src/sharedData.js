import { createContext } from "react";

export const UserContext = createContext();
export const GroupContext = createContext();
export const LangContext = createContext();

export const messages = {
    1: {
        groups: [1, 2],
        texts: [
            [1, "Hey how's it going??"],
            [2, "I'm great! How about you?"],
            [2, "Isn't it so cool to be texting on NeatBeats?"],
            [1, "yeah fr! Talk to you later!"],
        ],
    }
}

export const songs = {
    1: {
        name: "Dancing King",
        group: 1,
    },
    2: {
        name: "Bohemian Rap City",
        group: 1,
    },
    3: {
        name: "Stereoactive",
        group: 2,
    },
    4: {
        name: "Lightning",
        group: 2,
    },
    5: {
        name: "Sucker for Spain",
        group: 2,
    }
}

export const groups = {
    1: {
        name: "w",
        members: ["w"],
        songs: [
            1, 2
        ],
        messages: [

        ],
    },
    2: {
        name: "Imagine Wagons",
        members: ["w"],
        songs: [
            3, 4, 5
        ],
        messages: [

        ],
    },
}

export const users = {
    "w": {
        password: "w",
        groups: [
            1, 2
        ],
    },
}