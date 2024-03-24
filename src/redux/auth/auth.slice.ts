import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
};

const AuthSlice = createSlice({
    name: "AuthSlice",
    initialState,
    reducers: {
        setUser: (state, { payload }) => {
            state.user = payload;
        },
    },
});

export const { setUser } = AuthSlice.actions;

export const authReducer = AuthSlice.reducer;
