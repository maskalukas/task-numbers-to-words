import {TBrightnessReducerProps} from "../../types";
import reducer, { generalStoreActions } from "../../../slices/general-phone-slice";

const brightnessReducerMethods = generalStoreActions.brightness;

let brightnessState: { brightness: TBrightnessReducerProps };

beforeEach(() => {
    brightnessState = {
        brightness: {
            number: 1
        }
    }
});


test("Should set a new number of brightness",() => {
    const newState = reducer(brightnessState as any, brightnessReducerMethods.setBrightness(0.5));

    expect(newState.brightness.number).toEqual(0.5);
})
