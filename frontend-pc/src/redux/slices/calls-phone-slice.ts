import {TCallsState} from "../interfaces";

import {createSlice} from "@reduxjs/toolkit";
import {callProgressReducerInitial, callProgressReducerMethods} from "../reducers/calls/call-progress";

const initialState: TCallsState = {
    callProgress: callProgressReducerInitial,
    history: []
}


const callsPhoneSlice = createSlice({
    name: "calls",
    initialState: initialState,
    reducers: {
        // callProgress
        callProgressCall: callProgressReducerMethods.call,
        callProgressCancelCall: callProgressReducerMethods.cancelCall
    }
});

export const callsStoreActions  = {
    callProgres: {
        call: callsPhoneSlice.actions.callProgressCall,
        cancelCall: callsPhoneSlice.actions.callProgressCancelCall
    }
}

export default callsPhoneSlice.reducer;
