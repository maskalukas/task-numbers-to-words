import {ICallService} from "./interfaces";
import {ConvertorNumbersToCharacters} from "../utils/convertor-numbers-to-characters";

export class CallService implements ICallService {

    public convertNumbersToCharacters(numbers: string): Promise<any> {
        const convertor = new ConvertorNumbersToCharacters(numbers)
        const result = convertor.convert();
        return result;
    }

}
