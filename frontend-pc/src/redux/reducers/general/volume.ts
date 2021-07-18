import {TGeneralState} from "../../interfaces";
import {PayloadAction} from "@reduxjs/toolkit";
import {TVolumeReducerProps} from "../types";

export const volumeReducerInitial: TVolumeReducerProps = {
    status: true
}

export const volumeReducerMethods = {
    setOn(state: TGeneralState) {
        state.volume.status = true;
    },
    setOff(state: TGeneralState) {
        state.volume.status = false;
    }
}

