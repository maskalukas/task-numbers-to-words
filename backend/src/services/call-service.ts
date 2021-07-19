import {ICallService} from "./interfaces";
import {Worker} from "worker_threads";

export class CallService implements ICallService {

    public async convertNumbersToCharacters(numbers: string): Promise<any> {
        /**
        const convertor = new ConvertorNumbersToCharacters("222222")
        const result = await convertor.convert();

        const convertor1 = new ConvertorNumbersToCharacters("222222")
        const result1 = await convertor.convert();
         **/



        const result = await this.runService(numbers);
        return new Promise((resolve) => {
            resolve(result);
        })
    }

    public runService(workerData: any) {
        return new Promise((resolve, reject) => {
            const worker = new Worker('./services/service.js', { workerData });
            worker.on('message', resolve);
        })
    }

}
