export interface ICallService {
    convertNumbersToCharactersWithoutFilter(numbers: string): string[];
    convertNumbersToCharactersWithFilter(numbers: string): string[];
}
