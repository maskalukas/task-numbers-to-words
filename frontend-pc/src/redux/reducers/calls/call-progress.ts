import {TCallProgressReducerProps} from "../types";
import {TCallsState} from "../../interfaces";

export const callProgressReducerInitial: TCallProgressReducerProps = {
    status: false
}

export const callProgressReducerMethods = {
    call(state: TCallsState): void {
        state.callProgress.status = true;
    },
    cancelCall(state: TCallsState): void {
        state.callProgress.status = false;
    }
}
