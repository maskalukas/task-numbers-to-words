import {ApiService} from "./api-service";
import {IApiRequest, ICallService} from "./interfaces";

export class CallService extends ApiService implements ICallService {


    public constructor() {
        super();
        this.appendUrl("/call/")
    }

    public callWithoutFilter(numbers: string): Promise<IApiRequest<any>> {
        return this.GET(numbers + "/nofilter");
    }

    public callWithFilter(numbers: string): Promise<IApiRequest<any>> {
        return this.GET(numbers + "/withfilter");
    }


}
