/**
 * Singleton class.
 * Manages cancelling of requests.
 */
export class CallAbort {
    /**
     * The instance of this class as singleton.
     */
    private static instance: CallAbort;
    /**
     * Class for cancelling of requests.
     * Signal from this class is placed to the api config.
     */
    private controller: AbortController | undefined;

    /**
     * Returns the singleton instance.
     */
    public static getSingleton(): CallAbort {
        if(!CallAbort.instance) {
            CallAbort.instance = new CallAbort();
        }

        return CallAbort.instance;
    }

    /**
     * Creates a new abort controller.
     */
    public newController(): AbortController {
        this.controller = new AbortController();
        return this.controller;
    }

    /**
     * Returns the controller.
     */
    public getController(): AbortController | undefined {
        return this.controller;
    }

    /**
     * Cancelling the request.
     */
    public abortRequest(): void {
        this.controller?.abort();
    }
}
