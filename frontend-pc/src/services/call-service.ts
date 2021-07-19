import {ApiService} from "./api-service";
import {ICallService} from "./interfaces";

export class CallService extends ApiService implements ICallService {

    public constructor() {
        super();
        this.appendUrl("/call/")
    }

    public callWithoutFilter(numbers: string): Promise<string[]> {
        return this.GET(numbers + "/nofilter");
    }

    public callWithFilter(numbers: string): Promise<string[]> {
        return this.GET(numbers + "/withfilter");
    }

}
