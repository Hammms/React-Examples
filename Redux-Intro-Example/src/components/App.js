import React from 'react';
import SongDetail from './SongDetail';
import SongList from './songlist';


const App = () => {
    return(
        <div className="ui cotainer grid">
            <div className="ui row">
                <div className="column eight wide">
            <SongList />
                </div>
                <div className="column eight wide">
                    <SongDetail />
                </div>
            </div>
        </div>
    ); 
};

export default App;