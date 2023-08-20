import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {episodesService} from "../../services";
import {progressActions} from "./progressSlice";

const initialState = {
    pages:0,
    episodes:[],
    currentEpisode: null,
};

const getAll = createAsyncThunk(
    'episodesSlice/getAll',
    async ({page}, thunkAPI) =>{
        try {
            thunkAPI.dispatch(progressActions.setIsLoading(true))

            await new Promise(resolve => setTimeout(resolve, 300))
            const {data} = await episodesService.getAll(page);
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        } finally{
            thunkAPI.dispatch(progressActions.setIsLoading(false))
        }
    }
)

const slice = createSlice({
    name:'episodesSlice',
    initialState,
    reducers: {
        setCurrentEpisode: (state, action) => {
            state.currentEpisode = action.payload;
        },
    },
    extraReducers:builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            const {info:{pages}, results} = action.payload;
            state.pages = pages
            state.episodes = results
        })
});

const {reducer:episodesReducer, actions} = slice;

const episodesActions = {
    ...actions,
    getAll
}

export {
    episodesReducer,
    episodesActions
}