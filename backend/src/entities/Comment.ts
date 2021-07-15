import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('comments')
class Comment {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    description: string;

    @CreateDateColumn()
    created_at: Date;
}

export { Comment }