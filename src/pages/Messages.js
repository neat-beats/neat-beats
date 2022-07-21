import './Messages/Messages.css'
import { useContext, useState, useEffect, useCallback, useRef } from "react";
import EndpointPicker from "./Messages/EndpointPicker";
import { LangContext, UserContext, groups, users, messages } from "../sharedData";
import { Icon } from '@iconify/react';

const Messages = () => {
    const [, updateState] = useState();
    const forceUpdate = useCallback(() => updateState({}), []);

    const lang = useContext(LangContext);
    const [user,] = useContext(UserContext);
    const [origin, setOrigin] = useState(users[user].groups[0]);
    const [target, setTarget] = useState();
    const [newMessage, setNewMessage] = useState("");
    const [messageDisplay, setMessageDisplay] = useState();
    const [messageDisabled, setMessageDisabled] = useState();

    const newMessageInput = useRef();
    const messageRef = useRef();

    const dict = {
        messages: ["Messages", "Mensagems"],
        placeholder: ["Type message...", "Digite mensagem..."],
    };

    const loadMessages = () => {
        if (target === null) {
            setMessageDisabled(true);
            return <></>;
        }
        setMessageDisabled(false);

        let msgList = groups[origin].messages;
        let msgs = [];
        for (let i = 0; i < msgList.length; i++) {
            if (msgList[i][0] === target) {
                msgs = messages[msgList[i][1]].texts;
                break;
            }
        }

        let msgKey = 0;
        return (
            <>
                {msgs.map((m) => <div className="message" key={msgKey++}><p sent={m[0] === origin ? "0" : "1"}>
                    {m[1]}
                </p></div>)}
            </>
        );
    }

    const handleNewMessage = (event) => {
        event.preventDefault();

        let msgList = groups[origin].messages;
        for (let i = 0; i < msgList.length; i++) {
            if (msgList[i][0] === target) {
                messages[msgList[i][1]].texts.push([origin, newMessage]);
                break;
            }
        }

        newMessageInput.current.value = "";
        setMessageDisplay(loadMessages());
    }

    useEffect(() => {
        let a = groups[origin].messages;
        if (a.length !== 0) {
            setTarget(groups[origin].messages[0][0]);
            setMessageDisplay(loadMessages());
        } else setTarget(null);
    }, [origin]);

    useEffect(() => {
        setMessageDisplay(loadMessages());
    }, [target]);

    useEffect(() => {
        messageRef.current.scrollTop = messageRef.current.scrollHeight;
    }, [messageDisplay])

    useEffect(() => {
        if (!messageDisabled) newMessageInput.current.focus();
    }, [messageDisabled]);

    return (
        <div className="messages">
            <EndpointPicker id="as" type={0} pick={[origin, setOrigin]} />
            <EndpointPicker id="to" type={1} from={origin} pick={[target, setTarget]}/>
            <div id="texts">
                <h1>{dict.messages[lang]}</h1>
                <div id="msg" ref={messageRef}>
                    {messageDisplay}
                </div>
                <form id="send" onSubmit={handleNewMessage}>
                    <input type="text" ref={newMessageInput} disabled={messageDisabled} onChange={(e) => setNewMessage(e.target.value)} placeholder={dict.placeholder[lang]} />
                    <button type="submit" disabled={messageDisabled}><Icon icon="system-uicons:paper-plane-alt" color="white" width="22" height="22" /></button>
                </form>
            </div>
        </div>
    );
}

export default Messages;