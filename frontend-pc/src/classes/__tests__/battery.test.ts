import {Battery} from "../battery";
import reducer from "../../redux/slices/general-phone-slice";
import {Dispatch} from "redux";
import {TBatteryPart, TBatteryPartsNames} from "../interfaces";
import {batteryReducerInitial} from "../../redux/reducers/general/battery";


describe("Battery parts",() => {
    test("Should return the first part of the battery due to statusNumber 10.",() => {
        const batteryState = {...batteryReducerInitial};
        batteryState.statusNumber = 10;

        const battery = new Battery(batteryState, reducer as Dispatch);

        const batteryPart: TBatteryPart = battery.getCurrentBatteryPart();
        expect(batteryPart.name).toBe("battery-empty" as TBatteryPartsNames)
    });

    test("Should return the second part of the battery due to statusNumber 40.",() => {
        const batteryState = {...batteryReducerInitial};
        batteryState.statusNumber = 40;

        const battery = new Battery(batteryState, reducer as Dispatch);

        const batteryPart: TBatteryPart = battery.getCurrentBatteryPart();
        expect(batteryPart.name).toBe("battery-quarter" as TBatteryPartsNames)
    });

    test("Should return the third part of the battery due to statusNumber 41.",() => {
        const batteryState = {...batteryReducerInitial};
        batteryState.statusNumber = 41;

        const battery = new Battery(batteryState, reducer as Dispatch);

        const batteryPart: TBatteryPart = battery.getCurrentBatteryPart();
        expect(batteryPart.name).toBe("battery-half" as TBatteryPartsNames)
    });

    test("Should return the fourth part of the battery due to statusNumber 70.",() => {
        const batteryState = {...batteryReducerInitial};
        batteryState.statusNumber = 70;

        const battery = new Battery(batteryState, reducer as Dispatch);

        const batteryPart: TBatteryPart = battery.getCurrentBatteryPart();
        expect(batteryPart.name).toBe("battery-three-quarters" as TBatteryPartsNames)
    });

    test("Should return the fifth part of the battery due to statusNumber 100.",() => {
        const batteryState = {...batteryReducerInitial};
        batteryState.statusNumber = 100;

        const battery = new Battery(batteryState, reducer as Dispatch);

        const batteryPart: TBatteryPart = battery.getCurrentBatteryPart();
        expect(batteryPart.name).toBe("battery-full" as TBatteryPartsNames)
    });
});



