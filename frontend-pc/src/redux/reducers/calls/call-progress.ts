import {TCallProgressReducerProps} from "../types";
import {TCallsState} from "../../interfaces";

/**
 * The initial store for data of calling.
 */
export const callProgressReducerInitial: TCallProgressReducerProps = {
    status: false
}

/**
 * Reducer methods for changes during calling.
 */
export const callProgressReducerMethods = {
    /**
     * Turns on the call.
     */
    call(state: TCallsState): void {
        state.callProgress.status = true;
    },
    /**
     * Turns of the call.
     */
    cancelCall(state: TCallsState): void {
        state.callProgress.status = false;
    }
}
