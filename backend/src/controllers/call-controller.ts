import {ICallService} from "../services/interfaces";
import {Request, Response} from "express";

export class CallController {

    private callService: ICallService;

    public constructor(callService: ICallService) {
        this.callService = callService;
    }

    public async getCharactersFromNumbersWithouFilter(req: Request,res: Response,next: any) {
        const result = await this.callService.convertNumbersToCharacters(req.params.numbers);
        res.header("Access-Control-Allow-Origin", "*");
        res.send(result);
    }

    public async getCharactersFromNumbersWithFilter(req: Request, res: Response, next: any) {
        const result = await this.callService.convertNumbersToCharacters(req.params.numbers);
        res.send(result);
    }
}
