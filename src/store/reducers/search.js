const initialState = {
    keyWord: "",
    list: [],
};

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SEARCHED":
            return {
                keyWord: action.payload.keyWord,
                list: action.payload.list,
            };
        default:
            return state;
    }
};
export default searchReducer;
