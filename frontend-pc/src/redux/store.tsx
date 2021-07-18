import {configureStore} from "@reduxjs/toolkit";
import {TCallsState, TGeneralState} from "./interfaces";
import callPhoneReducer from "./slices/calls-phone-slice";
import generalPhoneReducer from "./slices/general-phone-slice";

export interface IReducersState {
    generalState: TGeneralState;
    callsState: TCallsState
}

export const store = configureStore({
    reducer: {
        generalState: generalPhoneReducer,
        callsState: callPhoneReducer
    }
});


export default store;
