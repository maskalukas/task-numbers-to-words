import {ICallService} from "../services/interfaces";
import {Request, Response} from "express";

/**
 * Controller for calls
 */
export class CallController {
    /** @inheritDoc */
    private callService: ICallService;

    public constructor(callService: ICallService) {
        this.callService = callService;
    }

    /**
     * Returns characters converted from numbers without the filter.
     */
    public async getCharactersFromNumbersWithoutFilter(req: Request,res: Response,next: any) {
        const result = await this.callService.convertNumbersToCharactersWithoutFilter(req.params.numbers);
        res.send(result);
    }

    /**
     * Returns characters converted from numbers with filter.
     */
    public async getCharactersFromNumbersWithFilter(req: Request, res: Response, next: any) {
        const result = await this.callService.convertNumbersToCharactersWithFilter(req.params.numbers);
        res.send(result);
    }
}
