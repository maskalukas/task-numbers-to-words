import {ConvertorNumbersToCharacters} from "../utils/convertor-numbers-to-characters";

const { workerData, parentPort } = require('worker_threads')

// You can do any heavy stuff here, in a synchronous way
// without blocking the "main thread"

const convertor = new ConvertorNumbersToCharacters(workerData)
const result = convertor.convert();
parentPort.postMessage(result);

