import {ApiService} from "./api-service";
import {ICallService} from "./interfaces";

export class CallService extends ApiService implements ICallService {

    public call(): Promise<string[]> {
        return new Promise((resolve) => {
            resolve(["abc","add","acc"])
        });
    }

}
