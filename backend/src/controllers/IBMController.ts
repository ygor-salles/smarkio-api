import { Request, Response } from "express";
import { getIBMPronunciation } from "../utils/GetPronunciation";

class IBMController {
    async execute(request: Request, response: Response) {
        const audio = await getIBMPronunciation(request.params.description);
        return response.send(audio);
    }
}

export { IBMController }
