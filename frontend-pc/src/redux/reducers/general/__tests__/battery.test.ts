import reducer, {generalStoreActions} from "../../../slices/general-phone-slice";
import {TBatteryReducerProps} from "../../types";

const generalStateMethods = generalStoreActions.battery;

let batteryDefaultState: { battery: TBatteryReducerProps };

beforeEach(() => {
    batteryDefaultState = {
        battery: {
            isCharging: false,
            statusNumber: 10,
            isShowedNoBatteryIcon: false
        }
    }
})

test('Should set isCharging on true.', () => {
    const newState = reducer(batteryDefaultState as any, generalStateMethods.setIsChargingOn(true));

    expect(newState.battery.isCharging).toBeTruthy();
});

test('Should decrease the battery statusNumber by 2.',() => {
    const newState1 = reducer(batteryDefaultState as any, generalStateMethods.decreaseNumberByOne());
    const newState2 = reducer(newState1, generalStateMethods.decreaseNumberByOne());

    expect(newState2.battery.statusNumber).toEqual(8);
});

test('Should increase the battery statusNumber by 2.',() => {
    const newState1 = reducer(batteryDefaultState as any, generalStateMethods.increaseNumberByOne());
    const newState2 = reducer(newState1, generalStateMethods.increaseNumberByOne());

    expect(newState2.battery.statusNumber).toEqual(12);
});

test("Should show the no battery icon => true.",() => {
    const newState = reducer(batteryDefaultState as any, generalStateMethods.setShowedNoBatteryIcon(true));

    expect(newState.battery.isShowedNoBatteryIcon).toBeTruthy();
})



