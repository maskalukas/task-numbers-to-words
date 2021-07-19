import reducer, {callsStoreActions} from "../../../slices/calls-phone-slice";
import {TCallsState} from "../../../interfaces";

const callProgressMethods = callsStoreActions.callProgres;

let callState: TCallsState;

beforeEach(() => {
    callState = {
        callProgress: {
            status: false,
        },
    }
})

describe("Method: call",() => {
    test('should change a call state on true', () => {
        expect(reducer(callState,callProgressMethods.call())).toEqual({
            callProgress: {
                status: true
            },
        } as TCallsState)
    });

    test('should change a call state on false',() => {
        callState = reducer(callState,callProgressMethods.call());

        expect(reducer(callState, callProgressMethods.cancelCall())).toEqual({
            callProgress: {
                status: false
            },
        } as TCallsState)
    });
})



