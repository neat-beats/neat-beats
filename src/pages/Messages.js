import './Messages/Messages.css'
import { useContext, useState } from "react";
import EndpointPicker from "./Messages/EndpointPicker";
import { LangContext } from "../sharedData";

const Messages = () => {
    const lang = useContext(LangContext);
    const [origin, setOrigin] = useState(0);
    const [target, setTarget] = useState(0);

    const dict = {

    };

    return (
        <div className="messages">
            <EndpointPicker type={0} pick={[origin, setOrigin]} />
            <EndpointPicker type={1} pick={[target, setTarget]}/>
        </div>
    );
}

export default Messages;