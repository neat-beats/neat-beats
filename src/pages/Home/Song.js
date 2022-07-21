import { useContext, useEffect, useState, useRef } from "react";
import { LangContext, UserContext, SongContext, users, songs } from "../../sharedData";
import { Icon } from '@iconify/react';

const Song = () => {
    const lang = useContext(LangContext);
    const [user,] = useContext(UserContext);
    const [song,] = useContext(SongContext);
    const [songName, setSongName] = useState("");
    const [owner, setOwner] = useState(false);

    const player = useRef();

    const dict = {
        song: ["Song: ", "Música: "],
        currVersion: ["Current Version: ", "Versão Atual: "],
        newVersion: ["Upload New Version: ", "Carregar Nova Versão: "],
    };

    useEffect(() => {
        if (song !== -1) {
            let found = false;
            for (let g in users[user].groups) {
                if (g === songs[song].group) {
                    setOwner(true);
                    found = true;
                    break;
                }
            }
            if (!found) {
                setOwner(false);
            }
        }
        player.current.load();
    }, [song]);

    return (
        <div className="song">
            <div id="header">{song === -1 ? "" : <h1>{dict.song[lang]}<em>{songs[song].name}</em></h1>}</div>
            <div className="maker">{dict.currVersion[lang]}
                <audio controls ref={player}>
                    <source src={song === -1 ? "" : songs[song].src} type="audio/mpeg" />
                </audio>
            </div>
            <div className="maker">{dict.newVersion[lang]}
                <button onClick={() => alert("Apparently I can't do this without backend support.")} ><Icon icon="ant-design:upload-outlined" color="white" width="22" height="22" /></button>
            </div>
        </div>
    );
}

export default Song;