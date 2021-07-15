import { getCustomRepository, Repository } from 'typeorm';
import { Comment } from '../entities/Comment';
import { CommentRepository } from '../repositories/CommentRepository';


class CommentService {
    private connectComment: Repository<Comment>;

    constructor() {
        this.connectComment = getCustomRepository(CommentRepository);
    }

    async create(description: string) {
        try {
            const comment = this.connectComment.create({ description });
            await this.connectComment.save(comment);
            return comment;
        } catch (error) {
            throw error;
        }
    }

    async read() {
        try {
            return await this.connectComment.find();    
        } catch (error) {
            throw error;   
        }
    }
}

export { CommentService }