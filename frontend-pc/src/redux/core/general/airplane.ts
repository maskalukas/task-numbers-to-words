import {TGeneralState} from "../../interfaces";
import { TAirplaneProps} from "../types";

export const airplaneInitial: TAirplaneProps = {
    status: false
}

export const airplaneMethods = {
    setOn(state: TGeneralState): void {
        state.airplane.status = true;
    },
    setOff(state: TGeneralState): void {
        state.airplane.status = false;
    }
}
