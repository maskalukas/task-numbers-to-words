import {TAirplaneReducerProps} from "../../types";
import reducer, { generalStoreActions } from "../../../slices/general-phone-slice";

let airplaneReducerMethods =  generalStoreActions.airplane;
let airplaneStateDefault: { airplane: TAirplaneReducerProps };

beforeEach(() => {
    airplaneStateDefault = {
        airplane: {
            status: false
        }
    }
});

test("Should set an airplane state on true.",() => {
    const newState = reducer(airplaneStateDefault as any, airplaneReducerMethods.setOn());

    expect(newState.airplane.status).toEqual(true);
});

test("Should set an airplane state on true and then back on false.",() => {
    airplaneStateDefault = reducer(airplaneStateDefault as any, airplaneReducerMethods.setOn());
    const newState = reducer(airplaneStateDefault as any, airplaneReducerMethods.setOff());

    expect(newState.airplane.status).toEqual(false);
})

