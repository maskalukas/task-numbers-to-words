import {TGeneralState} from "../../interfaces";
import {TAirplaneReducerProps} from "../types";

export const airplaneReducerInitial: TAirplaneReducerProps = {
    status: false
}

export const airplaneReducerMethods = {
    setOn(state: TGeneralState): void {
        state.airplane.status = true;
    },
    setOff(state: TGeneralState): void {
        state.airplane.status = false;
    }
}
