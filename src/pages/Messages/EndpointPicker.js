import { useContext } from "react";
import { LangContext, UserContext, groups, users } from "../../sharedData";

const EndpointPicker = ({ type, from, pick }) => {
    const lang = useContext(LangContext);
    const [user,] = useContext(UserContext);
    const [endpoint, setEndpoint] = pick;

    const dict = {
        from: ["As", "Como"],
        to: ["To", "Para"],
    };

    const buildList = () => {
        let list = [];

        if (type === 0) {
            list = users[user].groups.map((g) => <li key={g} onClick={(e) => setEndpoint(g)}>
                    {g === endpoint ? <b>{groups[g].name}</b> : groups[g].name}
                </li>);
        } else {
            list = groups[from].messages.map((m) => <li key={m[0]} onClick={(e) => setEndpoint(m[0])}>
                    {m[0] === endpoint ? <b>{groups[m[0]].name}</b> : groups[m[0]].name}
                </li>);
        }

        return list;
    }

    return (
        <div className="endpointpicker">
            <h1>{type === 0 ? dict.from[lang] : dict.to[lang]}</h1>
            <div id="picker">
                <ul>
                    {buildList()}
                </ul>
            </div>
        </div>
    );
}

export default EndpointPicker;