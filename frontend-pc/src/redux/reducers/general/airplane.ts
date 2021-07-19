import {TGeneralState} from "../../interfaces";
import {TAirplaneReducerProps} from "../types";
/**
 * The initial store for data of the airplane mode.
 */
export const airplaneReducerInitial: TAirplaneReducerProps = {
    /** @inheritDoc */
    status: false
}

/**
 * Reducer methods for changes of the airplane mode.
 */
export const airplaneReducerMethods = {
    /**
     * Turns on the airplane mode.
     */
    setOn(state: TGeneralState): void {
        state.airplane.status = true;
    },
    /**
     * Turns off the airplane mode.
     */
    setOff(state: TGeneralState): void {
        state.airplane.status = false;
    }
}
