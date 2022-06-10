import { createSlice } from '@reduxjs/toolkit';

export const moodSlice = createSlice({
    name: 'mood',
    initialState: false,
    reducers: {
        changeMood: state=>!state
    }
})

export const { changeMood } = moodSlice.actions;

export default moodSlice.reducer;
