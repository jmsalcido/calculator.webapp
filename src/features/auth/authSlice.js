import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { logInAPI } from './authAPI';

const user = JSON.parse(localStorage.getItem("user"));

const initialState = user 
    ? { loggedIn: true, user} 
    : { loggedIn: false, user: null };


export const logIn = createAsyncThunk(
    'auth/logIn',
    async (form) => {
        return logInAPI(form.username, form.password);
    }
);

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logOut: (state) => {
            state.loggedIn = false;
            state.user = null;

            localStorage.removeItem("user");
        }
    },
    extraReducers: (builder) => {
        builder.addCase(logIn.fulfilled, (state, action) => {
            state.loggedIn = true;
            state.user = action.payload
        })
    },
});

export const { logOut } = authSlice.actions;

export const isLoggedIn = (state) => state.auth.loggedIn.value; 
export const selectUser = (state) => state.auth.user;

export default authSlice.reducer;