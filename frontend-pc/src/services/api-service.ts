import configure from "../configure";
import {CallAbort} from "./call-abort";

/**
 * The main class of api that contains the base api configuration.
 */
export abstract class ApiService {
    /**
     * The base url of server.
     */
    protected baseUrl =  configure.apiBaseUrl;

    /**
     * GET METHOD
     * @param url = endpoint
     */
    protected GET<T>(url: string): Promise<T> {
        const callSingleton = CallAbort.getSingleton();
        callSingleton.newController();

        return fetch(this.baseUrl + url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            signal: callSingleton.getController()?.signal
        }).then((res: any) => {
            return res.json();
        });
    }

    /**
     * Appends the url to the base url.
     * @param nextPartUrl = endpoint.
     */
    protected appendUrl(nextPartUrl: string): void {
        this.baseUrl += "/"+nextPartUrl;
    }
}
