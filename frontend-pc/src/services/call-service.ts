import {ApiService} from "./api-service";
import {ICallService} from "./interfaces";

export class CallService extends ApiService implements ICallService {

    public constructor() {
        super();
        this.appendUrl("/call/")
    }

    public call(numbers: string): Promise<string[]> {
        return this.GET(numbers + "/nofilter");
    }

}
