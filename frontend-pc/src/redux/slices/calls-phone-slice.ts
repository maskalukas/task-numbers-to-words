import {TCallsState} from "../interfaces";

import {createSlice} from "@reduxjs/toolkit";
import {callProgressReducerInitial, callProgressReducerMethods} from "../reducers/calls/call-progress";
import {callHistoryReducerMethods} from "../reducers/calls/call-history";

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
        callProgressCancelCall: callProgressReducerMethods.cancelCall,
        // callHistory
        callHistoryAddCall: callHistoryReducerMethods.addCall
    }
});

export const callsStoreActions  = {
    callProgres: {
        call: callsPhoneSlice.actions.callProgressCall,
        cancelCall: callsPhoneSlice.actions.callProgressCancelCall
    },
    callHistory: {
        addCall: callsPhoneSlice.actions.callHistoryAddCall
    }
}

export default callsPhoneSlice.reducer;
