import { Router } from "express";
import { CommentController } from "./controllers/CommentController";

const router = Router();
const commentControler = new CommentController();

router.post('/comments', commentControler.create);
router.get('/comments', commentControler.read);

export default router;