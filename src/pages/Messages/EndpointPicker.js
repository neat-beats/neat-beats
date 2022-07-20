import { useContext } from "react";
import { LangContext, UserContext } from "../../sharedData";

const EndpointPicker = ({ type, pick }) => {
    const lang = useContext(LangContext);
    const [user,] = useContext(UserContext);
    const [endpoint, setEndpoint] = pick;

    const dict = {
        from: ["From", "De"],
        to: ["To", "Para"],
    };

    return (
        <div className="endpointpicker">
            <h1>{type === 0 ? dict.from[lang] : dict.to[lang]}</h1>
        </div>
    );
}

export default EndpointPicker;