import './GroupSelect.css'

import { useRef, useEffect, useState, useContext } from "react";
import { UserContext, GroupContext, LangContext, users, groups } from "../../../sharedData";

import NewCreation from '../../../components/NewCreation'

const GroupSelect = () => {
    const [user, setUser] = useContext(UserContext);
    const [group, setGroup] = useContext(GroupContext);
    const [open, setOpen] = useState(false);
    const lang = useContext(LangContext);

    const selector = useRef();
    const prompt = useRef();
    const wrapper = useRef();
    const newGroupName = useRef();

    const dict = {
        group: ["Groups", "Groupos"],
    };

    useEffect(() => {
        setOpen(false);
    }, [group]);

    useEffect(() => {
        if (open) {
            selector.current.style.display = "block";
            wrapper.current.style.display = "block";
        } else {
            selector.current.style.display = "none";
            wrapper.current.style.display = "none";
        }
    }, [open]);

    const handleCreation = (name) => {
        for (const g of users[user]["groups"]) {
            if (name === groups[g]["name"]) {
                return false;
            }
        }

        const newGroupID = Date.now();
        groups[newGroupID] = {name: name, members: [user], songs: []};
        users[user]["groups"].push(newGroupID);
        return true;
    }

    const openPrompt = () => {
        setOpen(false);
        prompt.current.style.display = "flex";
        newGroupName.current.focus();
    }

    var groupKey = 0;
    return (
        <div className="groupselect">
            <NewCreation type={0} onCreation={handleCreation} displayRef={prompt} nameInput={newGroupName} />
            <a id="opener" onClick={() => setOpen(!open)} >{groups[group]["name"]} ▼</a>
            <div id="wrapper" ref={wrapper} onClick={() => setOpen(false)} />
            <div id="selector" ref={selector}>
                <p>{dict.group[lang]}</p>
                <button onClick={openPrompt}>+</button>
                <hr />
                <ul>
                    {users[user]["groups"].map((g) => <li key={++groupKey} onClick={() => setGroup(g)}>{(g === group) ? <b>{groups[g]["name"]}</b> : groups[g]["name"]}</li>)}
                </ul>
            </div>
            <NewCreation />
        </div>
    );
}

export default GroupSelect;