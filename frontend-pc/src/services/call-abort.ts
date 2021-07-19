
export class CallAbort {

    private static instance: CallAbort;

    private controller: AbortController | undefined;

    public static getSingleton(): CallAbort {
        if(!CallAbort.instance) {
            CallAbort.instance = new CallAbort();
        }

        return CallAbort.instance;
    }

    public newController(): AbortController {
        this.controller = new AbortController();
        return this.controller;
    }

    public getController(): AbortController | undefined {
        return this.controller;
    }

    public abortRequest(): void {
        this.controller?.abort();
    }
}
