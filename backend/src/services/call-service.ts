import {ICallService} from "./interfaces";
import {ConvertorNumbersToCharacters} from "../utils/convertor-numbers-to-characters";

/**
 * Service for calls
 */
export class CallService implements ICallService {

    /** @inheritDoc */
    public convertNumbersToCharactersWithoutFilter(numbers: string): string[] {
        const convertor = new ConvertorNumbersToCharacters(numbers, false);
        return convertor.convertWithoutRealWords();
    }

    /** @inheritDoc */
    public convertNumbersToCharactersWithFilter(numbers: string): string[] {
        const convertor = new ConvertorNumbersToCharacters(numbers, true);
        return convertor.convertWithRealWords();
    }

}
