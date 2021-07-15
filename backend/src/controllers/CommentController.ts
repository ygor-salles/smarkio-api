import { Request, Response, NextFunction } from 'express';
import { CommentService } from '../services/CommentService';

class CommentController {
    async create(request: Request, response: Response) {
        const { description } = request.body;

        if (!description) {
            return response.status(400).json({ message: 'Description is required' });
        }

        const commentService = new CommentService();

        try {
            const comment = await commentService.create(description);
            return response.status(201).json(comment);
        } catch (error) {
            return response.status(error.status || 400).json({ message: 'Database connection error!' });
        }
    }

    async read(request: Request, response: Response) {
        const commentService = new CommentService();
        try {
            const comments = await commentService.read();
            return response.status(200).json(comments);
        } catch (error) {
            return response.status(error.status || 400).json({ message: 'Database connection error!' });
        }
    }

    async readById(request: Request, response: Response, next: NextFunction) {
        const commentService = new CommentService();
        try {
            const comment = await commentService.readById(+request.params.id);
            request.params.description = comment.description;
            next();
        } catch (error) {
            return response.status(error.status || 400).json({ message: 'Database connection error!' });
        }
    }
}

export { CommentController }