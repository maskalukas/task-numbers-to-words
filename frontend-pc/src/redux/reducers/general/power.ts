import {TGeneralState} from "../../interfaces";
import {TPowerReducerProps} from "../types";

export const powerReducerInitial: TPowerReducerProps = {
    status: true
}

export const powerReducerMethods = {
    setOn(state: TGeneralState) {
        state.power.status = true;
    },
    setOff(state: TGeneralState) {
        state.power.status = false;
    }
}
