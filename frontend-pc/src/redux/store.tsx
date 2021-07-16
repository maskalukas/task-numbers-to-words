import {configureStore} from "@reduxjs/toolkit";
import generalPhoneReducer from "./slices/general-phone/general-phone-slice";
import {TGeneralState} from "./interfaces";

export interface IReducersState {
    generalState: TGeneralState;
}

export const store = configureStore({
    reducer: {
        generalState: generalPhoneReducer
    }
});


export default store;
