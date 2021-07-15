import { Router } from "express";
import { CommentController } from "./controllers/CommentController";

const router = Router();
const commentControler = new CommentController();

// Rotas dos comentários, criar e visualizar
router.post('/comments', commentControler.create);
router.get('/comments', commentControler.read);

// Rota da IBM Watson Spech
router.get('/pronunciation/:id', commentControler.readById);

export default router;