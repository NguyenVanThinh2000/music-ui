const initialState = {
    list: JSON.parse(localStorage.getItem("songs")) || [],
    playingId: null,
};

const songsReducer = (state = initialState, action) => {
    let newList;
    let songIdx;
    switch (action.type) {
        // handle playlist
        case "ADD_PL":
            newList = [...state.list];
            songIdx = newList.findIndex((x) => x.id === action.payload.id);
            if (songIdx >= 0) {
                // nếu có trong songs thêm trường isPlaylist = true
                newList[songIdx].isPlayList = true;
            } else {
                // nếu chưa có trong songs thì thêm vào songs
                newList.push(action.payload);
            }
            localStorage.setItem("songs", JSON.stringify(newList));
            return {
                ...state,
                list: newList,
            };
        case "REMOVE_PL":
            newList = [...state.list];
            songIdx = newList.findIndex((x) => x.id === action.payload.id);
            if (newList[songIdx].isFavoriteSong === true) {
                newList[songIdx].isPlayList = false;
            } else {
                newList.splice(songIdx, 1);
            }
            localStorage.setItem("songs", JSON.stringify(newList));
            return {
                ...state,
                list: newList,
            };

        // handle favorite songs
        case "ADD_FS":
            newList = [...state.list];
            songIdx = newList.findIndex((x) => x.id === action.payload.id);
            if (songIdx >= 0) {
                // nếu có trong songs thêm trường isFavoriteSong = true
                newList[songIdx].isFavoriteSong = true;
            } else {
                // nếu chưa có trong songs thì thêm vào songs
                newList.push(action.payload);
            }
            localStorage.setItem("songs", JSON.stringify(newList));
            return {
                ...state,
                list: newList,
            };
        case "REMOVE_FS":
            newList = [...state.list];
            songIdx = newList.findIndex((x) => x.id === action.payload.id);
            if (newList[songIdx].isPlayList === true) {
                newList[songIdx].isFavoriteSong = false;
            } else {
                newList.splice(songIdx, 1);
            }
            localStorage.setItem("songs", JSON.stringify(newList));
            return {
                ...state,
                list: newList,
            };
        default:
            return state;
    }
};
export default songsReducer;
