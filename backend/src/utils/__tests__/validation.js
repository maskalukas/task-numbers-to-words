import {Validation} from "../validation";


test("Should check numbers correctly.",() => {
    const result = Validation.checkNumbers("234678");
    expect(result.result).toBeTruthy();
});

test("Should check numbers poorly.",() => {
    const result = Validation.checkNumbers("145551");
    expect(result.result).toBeFalsy();
})
