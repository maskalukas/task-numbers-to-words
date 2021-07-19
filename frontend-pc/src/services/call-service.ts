import {ApiService} from "./api-service";
import {ICallService} from "./interfaces";

/**
 * @inheritDoc
 */
export class CallService extends ApiService implements ICallService {

    public constructor() {
        super();
        this.appendUrl("call/")
    }

    /** @inheritDoc */
    public callWithoutFilter(numbers: string): Promise<string[]> {
        return this.GET(numbers + "/nofilter");
    }

    /** @inheritDoc */
    public callWithFilter(numbers: string): Promise<string[]> {
        return this.GET(numbers + "/withfilter");
    }


}
