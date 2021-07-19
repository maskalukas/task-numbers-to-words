import {TPowerReducerProps} from "../../types";
import reducers, {generalStoreActions} from "../../../slices/general-phone-slice";

let powerState: { power: TPowerReducerProps };

beforeEach(() => {
    powerState = {
        power: {
            status: false
        }
    }
});

test('Should turn on the phone.',() => {
    const newState1 = reducers(powerState as any, generalStoreActions.power.setOn());

    expect(newState1.power.status).toBeTruthy()
});

test('Should turn off the phone.',() => {
    const newState1 = reducers(powerState as any, generalStoreActions.power.setOn());
    const newState2 = reducers(newState1 as any, generalStoreActions.power.setOff());

    expect(newState2.power.status).toBeFalsy();
});
