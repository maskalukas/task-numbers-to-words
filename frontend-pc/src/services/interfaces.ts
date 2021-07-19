/**
 * Service that containes concrete api methods for calling.
 */
export interface ICallService {
    /**
     * Sends request for converting numbers to words without a filter.
     * @param numbers = Numbers for converting.
     */
    callWithoutFilter(numbers: string): Promise<string[]>;
    /**
     * Sends request for converting numbers to words with a filter.
     * @param numbers = Numbers for converting.
     */
    callWithFilter(numbers: string): Promise<string[]>;
}


