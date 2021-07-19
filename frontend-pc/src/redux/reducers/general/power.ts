import {TGeneralState} from "../../interfaces";
import {TPowerReducerProps} from "../types";

/**
 * The initial store for data of power state.
 */
export const powerReducerInitial: TPowerReducerProps = {
    /**
     * If the phone is on or off.
     */
    status: true
}

/**
 * Reducer methods for changes of power.
 */
export const powerReducerMethods = {
    /**
     * Turns on the phone.
     */
    setOn(state: TGeneralState) {
        state.power.status = true;
    },
    /**
     * Turns of the phone.
     */
    setOff(state: TGeneralState) {
        state.power.status = false;
    }
}
