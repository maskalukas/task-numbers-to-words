import {IBattery, TBatteryPart, TBatteryPartsNames} from "./interfaces";
import {TBatteryReducerProps} from "../redux/reducers/types";
import { Dispatch, AnyAction } from "redux";
import {generalStoreActions} from "../redux/slices/general-phone/general-phone-slice";

export class Battery implements IBattery {

    private readonly batteryState: TBatteryReducerProps;
    private readonly dispatch: Dispatch;

    private static readonly TYPES: { name: TBatteryPartsNames, color: string, range: [number, number] }[] = [{
        name: "battery-empty",
        color: "e41414", // red
        range: [0, 20]
    }, {
        name: "battery-quarter",
        color: "af5100", // orange
        range: [21, 40]
    }, {
        name: "battery-half",
        color: "af5100", // orange
        range: [41, 60]
    }, {
        name: "battery-three-quarters",
        color: "009557", // green
        range: [61, 80]
    }, {
        name: "battery-full",
        color: "009557", // green
        range: [81, 100]
    }]


    constructor(batteryState: TBatteryReducerProps, dispatch: Dispatch) {
        this.batteryState = batteryState;
        this.dispatch = dispatch;
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

    /** @inheritDoc */
    public chargeBattery(): any {
        const interval = setInterval(() => {
            this.dispatch(generalStoreActions.battery.increaseNumberByOne());
        },1000)

        return () => clearInterval(interval);
    }

    /** @inheritDoc */
    public dischargeBattery(): void {
        if(this.batteryState.statusNumber > 0 && !this.batteryState.isCharging) {
            this.dispatch(generalStoreActions.battery.decreaseNumberByOne());

            if(this.batteryState.statusNumber === 1) {
                this.dispatch(generalStoreActions.power.setOff());
                this.dispatch(generalStoreActions.battery.setShowedNoBatteryIcon(true));
            }
        }
    }

    /** @inheritDoc */
    public showNoBatteryIcon(value: boolean, withTimeout: boolean = true): any {
        if(withTimeout) {
            const timeout = setTimeout(() => {
                this.dispatch(generalStoreActions.battery.setShowedNoBatteryIcon(value))
            },1500);

            return () => clearTimeout(timeout)
        } else {
            this.dispatch(generalStoreActions.battery.setShowedNoBatteryIcon(value));
        }
    }






}
