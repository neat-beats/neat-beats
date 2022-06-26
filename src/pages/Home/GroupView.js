import { useState, createContext } from "react";

const GroupContext = createContext("");

const GroupView = () => {
    const [group, setGroup] = useState("");

    return (
        <div className="groupview">
        </div>
    );
}

export default GroupView;