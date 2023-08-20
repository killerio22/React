import {configureStore} from "@reduxjs/toolkit";

import { characterReducer, episodesReducer, progressReducer } from "./slices";

const store = configureStore({
    reducer:{
        episodes:episodesReducer,
        characters:characterReducer,
        progress:progressReducer
    }
});

export {
    store
}