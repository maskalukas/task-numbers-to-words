import {ICallService} from "./interfaces";
import {Worker} from "worker_threads";
import {ConvertorNumbersToCharacters} from "../utils/convertor-numbers-to-characters";

export class CallService implements ICallService {

    public convertNumbersToCharactersWithoutFilter(numbers: string): string[] {
        const convertor = new ConvertorNumbersToCharacters(numbers, false);
        return convertor.convert();
    }

    public convertNumbersToCharactersWithFilter(numbers: string): string[] {
        const convertor = new ConvertorNumbersToCharacters(numbers, true);
        return convertor.findRealWorlds();
    }

}
