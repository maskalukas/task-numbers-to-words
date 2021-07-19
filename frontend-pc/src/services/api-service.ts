import configure from "../configure";
import {IApiRequest} from "./interfaces";
import {CallAbort} from "./call-abort";

export abstract class ApiService {
    protected baseUrl =  configure.apiBaseUrl;

    protected GET<T>(url: string): Promise<IApiRequest<T>> {

        const callSingleton = CallAbort.getSingleton();
        callSingleton.newController();

        return fetch(this.baseUrl + url, {
            method: "GET",
            headers: {
                "Content-Type": "text/plain"
            },
            signal: callSingleton.getController()?.signal
        }).then((res: any) => {

            return new Promise(async (resolve) => {
                resolve({
                    controller: callSingleton.getController() as AbortController,
                    response: await res.json()
                })
            })
        })
    }

    protected appendUrl(nextPartUrl: string): void {
        this.baseUrl += nextPartUrl;
    }
}
