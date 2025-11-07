import { Request, Response, Router } from "express";
import { getCodeDetails, saveCodeDetails } from "../controllers/CodeController";

const notecodeRouter = Router();

notecodeRouter.get('/', getCodeDetails);

notecodeRouter.post('/', saveCodeDetails)

export { notecodeRouter };