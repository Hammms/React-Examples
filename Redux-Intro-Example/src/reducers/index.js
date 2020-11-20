// The purpose of this page is to generate reducers 
//Reducers are functions that take the current state and an action as arguments


//The combineReducers helper function turns an object whose values are different reducing functions
// into a single reducing function you can pass to createStore. This can be seen at export default

import { combineReducers } from 'redux';

// Creating a reducer to manage the state of loading all the songs
const songsReducer = () => {
    return[
        { title: 'No Scrubs', duration: '4:05' },
        { title: 'macarena', duration: '2:30' },
        { title: 'the hammer', duration: '2:45'},
        { title: 'i want it that way', duration: '1:45'}
    ];
};
//reduer to determine what the currently selected song is
const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};


export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})