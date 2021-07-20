/**
 * Service for calls
 */
export interface ICallService {
    /**
     * Returns characters converted from numbers without the filter.
     */
    convertNumbersToCharactersWithoutFilter(numbers: string): string[];
    /**
     * Returns characters converted from numbers with filter.
     * So only real words.
     */
    convertNumbersToCharactersWithFilter(numbers: string): string[];
}
