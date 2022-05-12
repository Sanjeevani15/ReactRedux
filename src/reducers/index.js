import {combineReducers} from 'redux'
const songReducer=()=>{
    return [
        {title: 'Come as you are', duration : '4:05'},
        {title: 'Travellin Soldier', duration : '3:45'},
        {title: 'Knockin\' on Heaven\' Door', duration : '2:55'},
        {title: 'Into the night', duration : '3:10'},
        {title: 'I want it that way', duration : '2:45'},
    ];
};

const selectedSongReducer=(selectedSong=null,action)=>{
        if(action.type==='SONG_SELECTED'){
            return action.payload;
        }

        return selectedSong;
};

export default combineReducers({
    songs:songReducer,
    selectedSong:selectedSongReducer,
});