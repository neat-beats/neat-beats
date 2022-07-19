import './GroupView/GroupView.css'

import { useContext, useState, useEffect, useRef, useCallback } from "react";
import GroupSelect from './GroupView/GroupSelect';
import Search from '../../components/Search';
import NewCreation from '../../components/NewCreation';
import { UserContext, GroupContext, LangContext, users, groups, songs } from '../../sharedData';

const GroupView = () => {
    const [, updateState] = useState();
    const forceUpdate = useCallback(() => updateState({}), []);

    const [user, setUser] = useContext(UserContext);
    const [group, setGroup] = useState(users[user]["groups"][0]);
    var allSongs = groups[group]["songs"];
    const [groupSongs, setGroupSongs] = useState(allSongs);
    const lang = useContext(LangContext);

    const prompt = useRef();
    const newSongName = useRef();

    const dict = {
        placeholder: ["Search for song in group", "Procura música neste grupo"],
    };

    const handleSearch = (search) => {
            if (search === "") {
                setGroupSongs(allSongs);
            } else {
                setGroupSongs(allSongs.filter((s) => songs[s].name.toLowerCase().search(search.toLowerCase()) !== -1));
            }
    }

    const handleCreation = (name) => {
        for (const s of groups[group]["songs"]) {
            if (name === songs[s]["name"]) {
                return false;
            }
        }

        const newSongID = Date.now();
        songs[newSongID] = {name: name, group: group};
        groups[group]["songs"].push(newSongID);
        forceUpdate();
        return true;
    }

    const handleSongPick = (songPick) => {
        alert("Picked song " + songPick + " (not implemented yet)");
    }

    const openPrompt = () => {
        prompt.current.style.display = "flex";
        newSongName.current.focus();
    }

    useEffect(() => {
        handleSearch("");
        allSongs = groups[group]["songs"];
        setGroupSongs(allSongs);
    }, [group]);

    var songKey = 0;
    return (
        <div className="groupview">
            <GroupContext.Provider value={[group, setGroup]}>
                <NewCreation type={1} onCreation={handleCreation} displayRef={prompt} nameInput={newSongName} />
                <GroupSelect />
                <hr />
                <Search placeholder={dict.placeholder[lang]} activeChange={handleSearch} style={{
                    width: "calc(100% - 70px)",
                    height: "30px",
                    marginTop: "20px",
                    marginBottom: "20px",
                    borderRadius: "10px",
                    paddingLeft: "10px",
                    fontSize: "20px",
                }} />
                <button onClick={openPrompt}>+</button>
                <div id="scroll-y">
                    <ul id="songlist">
                        {groupSongs.map((s) => <li key={songKey++} onClick={() => handleSongPick(s)}>{songs[s]["name"]}</li>)}
                    </ul>
                </div>
            </GroupContext.Provider>
        </div>
    );
}

export default GroupView;