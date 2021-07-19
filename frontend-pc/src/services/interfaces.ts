export interface ICallService {
    callWithoutFilter(numbers: string): Promise<string[]>
    callWithFilter(numbers: string): Promise<string[]>
}
