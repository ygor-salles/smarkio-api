import { Request, Response, Router } from "express";
import { CommentController } from "./controllers/CommentController";
import { IBMController } from "./controllers/IBMController";

const router = Router();
const commentControler = new CommentController();
const ibmController = new IBMController();

// Rota welcome
router.get('/', (req: Request, resp: Response) =>
    resp.status(200).json({ message: 'Welcome api-smarkio' })
)

// Rotas dos comentários, criar e visualizar
router.post('/comments', commentControler.create);
router.get('/comments', commentControler.read);

// Rota da IBM Watson Spech
router.get('/pronunciation/:id', commentControler.readById, ibmController.execute);

export default router;