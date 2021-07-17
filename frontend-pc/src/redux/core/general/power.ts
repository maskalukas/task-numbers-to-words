import {TPowerProps, TVolumeProps} from "../types";
import {TGeneralState} from "../../interfaces";

export const powerInitial: TPowerProps = {
    status: false
}

export const powerMethods = {
    setOn(state: TGeneralState) {
        state.power.status = true;
    },
    setOff(state: TGeneralState) {
        state.power.status = false;
    }
}
