export interface ICallService {
    call(numbers: string): Promise<string[]>
}
