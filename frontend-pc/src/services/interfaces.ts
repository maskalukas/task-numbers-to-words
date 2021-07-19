export interface ICallService {
    callWithoutFilter(numbers: string): Promise<IApiRequest<any>>;
    callWithFilter(numbers: string): Promise<IApiRequest<any>>;
}

export interface IApiRequest<T> {
    controller: AbortController;
    response: T;
}
