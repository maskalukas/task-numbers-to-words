import {configureStore} from "@reduxjs/toolkit";
import {TCallsState, TGeneralState, TMessagesState} from "./interfaces";
import callPhoneReducer from "./slices/calls-phone-slice";
import generalPhoneReducer from "./slices/general-phone-slice";
import messagePhoneReducer from "./slices/messages-phone-slice";

export interface IReducersState {
    generalState: TGeneralState;
    callsState: TCallsState,
    smsState: TMessagesState
}

export const store = configureStore({
    reducer: {
        generalState: generalPhoneReducer,
        callsState: callPhoneReducer,
        smsState:  messagePhoneReducer
    }
});


export default store;
