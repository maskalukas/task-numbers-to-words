import {TVolumeReducerProps} from "../../types";
import reducers, {generalStoreActions} from "../../../slices/general-phone-slice";

let volumeState: { volume: TVolumeReducerProps };

beforeEach(() => {
    volumeState = {
        volume: {
            status: true
        }
    }
});

test('Should set the volume to on.',() => {
    const newState = reducers(volumeState as any, generalStoreActions.volume.setOn());

    expect(newState.volume.status).toBeTruthy();
});

test('Should set the volume to off.',() => {
    const newState = reducers(volumeState as any, generalStoreActions.volume.setOff());

    expect(newState.volume.status).toBeFalsy();
});

