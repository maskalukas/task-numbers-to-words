import {TGeneralState} from "../../interfaces";
import {TVolumeReducerProps} from "../types";

/**
 * The initial store for data of volume.
 */
export const volumeReducerInitial: TVolumeReducerProps = {
    /** @inheritDoc */
    status: true
}

/**
 * Reducers methods for changes of the volume.
 */
export const volumeReducerMethods = {
    /**
     * Sets the volume on.
     */
    setOn(state: TGeneralState) {
        state.volume.status = true;
    },
    /**
     * Sets the volume off.
     */
    setOff(state: TGeneralState) {
        state.volume.status = false;
    }
}

