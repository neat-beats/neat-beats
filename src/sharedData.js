import { createContext } from "react";

export const UserContext = createContext();
export const GroupContext = createContext();
export const LangContext = createContext();
export const SongContext = createContext();

export const messages = {
    1: {
        groups: [1, 3],
        texts: [
            [1, "Hey how's it going??"],
            [3, "I'm great! How about you?"],
            [3, "Isn't it so cool to be texting on NeatBeats?"],
            [1, "yeah fr! Talk to you later?"],
            [3, "yup"],
            [1, "cool"],
            [1, "Hey how's it going??"],
            [3, "I'm great! How about you?"],
            [3, "Isn't it so cool to be texting on NeatBeats?"],
            [1, "yeah fr! Talk to you later?"],
            [3, "yup"],
            [1, "cool"],
            [1, "Hey how's it going??"],
            [3, "I'm great! How about you?"],
            [3, "Isn't it so cool to be texting on NeatBeats?"],
            [1, "yeah fr! Talk to you later?"],
            [3, "yup"],
            [1, "cool"],
        ],
    },
    2: {
        groups: [2, 3],
        texts: [],
    }
}

export const songs = {
    1: {
        name: "Sonatina in Your Face",
        src: require("./songs/Sonatina_in_ur_face.mp3"),
        group: 1,
        acceptedContributions: 6,
        contributions: 2,
    },
}

export const groups = {
    1: {
        name: "w",
        members: ["w"],
        songs: [
            1
        ],
        messages: [
            [3, 1],
        ],
    },
    2: {
        name: "Imagine Wagons",
        members: ["w"],
        songs: [],
        messages: [
            [3, 2],
        ],
    },
    3: {
        name: "q",
        members: ["q"],
        songs: [],
        messages: [
            [1, 1],
            [2, 2],
        ]
    }
}

export const users = {
    "w": {
        password: "w",
        groups: [
            1, 2
        ],
    },
    "q": {
        password: "q",
        groups: [
            3
        ],
    }
}