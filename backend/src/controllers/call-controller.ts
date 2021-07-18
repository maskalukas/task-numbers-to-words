import {ICallService} from "../services/interfaces";
import {Request, Response} from "express";

export class CallController {

    private callService: ICallService;

    public constructor(callService: ICallService) {
        this.callService = callService;
    }

    public getCharactersFromNumbersWithouFilter(req: Request,res: Response,next: any) {
    }

    public getCharactersFromNumbersWithFilter(req: Request, res: Response, next: any) {

    }
}
