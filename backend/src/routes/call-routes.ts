import express  from 'express';
import {CallController} from "../controllers/call-controller";
import {ICallService} from "../services/interfaces";
import {CallService} from "../services/call-service";

const router = express.Router();


const initRouters = () => {
    const callService: ICallService = new CallService();
    const callController = new CallController(callService);

    router.get("/:numbers/withfilter", callController.getCharactersFromNumbersWithFilter.bind(callController));
    router.get("/:numbers/nofilter", callController.getCharactersFromNumbersWithouFilter.bind(callController));
}
initRouters();

export default router;
