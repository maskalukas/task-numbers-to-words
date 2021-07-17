import {TGeneralState} from "../../interfaces";
import {PayloadAction} from "@reduxjs/toolkit";
import {TVolumeProps} from "../types";

export const volumeInitial: TVolumeProps = {
    status: false
}

export const volumeMethods = {
    setOn(state: TGeneralState) {
        state.volume.status = true;
    },
    setOff(state: TGeneralState) {
        state.volume.status = false;
    }
}

