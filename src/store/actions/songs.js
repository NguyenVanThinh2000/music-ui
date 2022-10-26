export const addPL = (song) => {
    return {
        type: "ADD_PL",
        payload: song,
    };
};
export const removePL = (song) => {
    return {
        type: "REMOVE_PL",
        payload: song,
    };
};
export const addFS = (song) => {
    return {
        type: "ADD_FS",
        payload: song,
    };
};
export const removeFS = (song) => {
    return {
        type: "REMOVE_FS",
        payload: song,
    };
};
