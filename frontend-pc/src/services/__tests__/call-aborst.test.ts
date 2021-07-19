import {CallAbort} from "../call-abort";

let callAbort: CallAbort;

beforeEach(() => {
    callAbort = new CallAbort();
})

test("Should return singleton instance.",() => {
    const singletonInstance = CallAbort.getSingleton();

    expect(singletonInstance instanceof CallAbort).toBeTruthy();
});

test("Should create a new controller.",() => {
    callAbort.newController();

    expect(callAbort.getController() instanceof AbortController).toBeTruthy();
});
