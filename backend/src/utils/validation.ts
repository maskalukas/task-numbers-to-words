/**
 * The validation object for request params.
 */
export class Validation {
    /**
     * Checks string of numbers.
     * The numbers must be from 2 to 9 and max length must be 10.
     */
    public static checkNumbers(numbers: string): { result: boolean, msg: string } {
        const result = RegExp("^[2-9]{0,10}$").test(numbers);

        if(result) {
            return { result: true, msg: "" }
        } else {
            return {
                result: false,
                msg: "Numbers range: 2-9, max length: 10!"
            }
        }
    }
}
