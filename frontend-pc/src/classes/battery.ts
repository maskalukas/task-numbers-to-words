import {IBattery, TBatteryPart, TBatteryPartsNames} from "./interfaces";
import {TBatteryReducerProps} from "../redux/reducers/types";

export class Battery implements IBattery {

    private readonly batteryState: TBatteryReducerProps;

    private static readonly TYPES: { name: TBatteryPartsNames, color: string, range: [number, number] }[] = [{
        name: "battery-empty",
        color: "e41414", // red
        range: [0,20]
    },{
        name: "battery-quarter",
        color: "af5100", // orange
        range: [21,40]
    },{
        name: "battery-half",
        color: "af5100", // orange
        range: [41,60]
    },{
        name: "battery-three-quarters",
        color: "009557", // green
        range: [61,80]
    },{
        name: "battery-full",
        color: "009557", // green
        range: [81,100]
    }]


    constructor(batteryState: TBatteryReducerProps) {
        this.batteryState = batteryState;
    }

    /** @inheritDoc */
    public getCurrentBatteryPart(): TBatteryPart {

        let resultObject: TBatteryPart|any = null;

        for(let i = 0; i < Battery.TYPES.length; i++) {
            const fromRange = Battery.TYPES[i].range[0];
            const toRange = Battery.TYPES[i].range[1];

            if(this.batteryState.statusNumber >= fromRange && this.batteryState.statusNumber <= Battery.TYPES[i].range[1]) {
                resultObject = {
                    name: Battery.TYPES[i].name,
                    color: Battery.TYPES[i].color
                }

                break;
            }
        }
        return resultObject;
    }




}
