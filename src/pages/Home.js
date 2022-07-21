import './Home/Home.css'
import { useState } from 'react';
import { SongContext } from '../sharedData';
import GroupView from './Home/GroupView'
import Song from './Home/Song';

const Home = () => {
    const [song, setSong] = useState(-1);

    return (
        <div className="home">
            <SongContext.Provider value={[song, setSong]}>
                <GroupView />
                <Song />
            </SongContext.Provider>
        </div>
    );
}

export default Home;