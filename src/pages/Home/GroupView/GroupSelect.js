import './GroupSelect.css'

import { useRef, useEffect, useState, useContext } from "react";
import { UserContext, GroupContext, users, groups } from "../../../sharedData";

const GroupSelect = () => {
    const [user, setUser] = useContext(UserContext);
    const [group, setGroup] = useContext(GroupContext);
    const [open, setOpen] = useState(false);

    const selector = useRef();

    useEffect(() => {
        setOpen(false);
    }, [group]);

    useEffect(() => {
        if (open) {
            selector.current.style.display = "block";
        } else {
            selector.current.style.display = "none";
        }
    }, [open]);

    var groupKey = 0;
    return (
        <div className="groupselect">
            <a id="opener" onClick={() => setOpen(!open)} >{groups[group]["name"]} ▼</a>
            <div id="selector" ref={selector}>
                <ul>
                    {users[user]["groups"].map((g) => <li key={++groupKey} onClick={() => setGroup(g)}>{(g === group) ? <b>{groups[g]["name"]}</b> : groups[g]["name"]}</li>)}
                </ul>
            </div>
        </div>
    );
}

export default GroupSelect;