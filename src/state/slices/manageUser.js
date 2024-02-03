import { createSlice } from "@reduxjs/toolkit";

export const manageUserSlice = createSlice({ 
    name: 'user',
    initialState: {
        name: "",
        homeCity: "",
        advertisedActivity: "",
        prioritizedActivity: "",
        loggedIn: false,
        isGuest: false,
        browsedPeopleHistory: []
    },
    reducers: { 
        setUsername: (state, action) => {
            state.name = action.payload
        },
        setLoggedState: (state, action) => {
            state.loggedIn = action.payload
        },
        setGuestState: (state, action) => {
            state.isGuest = action.payload
        },
        setBrowsedPeopleHistory: (state, action) => {
            state.browsedPeopleHistory = action.payload
        }
        
    }

});

export const { setUsername, setLoggedState, setGuestState } = manageUserSlice.actions;

export default manageUserSlice.reducer;