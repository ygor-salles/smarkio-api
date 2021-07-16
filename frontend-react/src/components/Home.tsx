import { useEffect, useState } from 'react';
import { Comment } from '../models/Comment.model';
import api, { apiReturnFile } from '../service/api';
import './styles.css';

function Home() {
    const [listComment, setComments] = useState<Comment[]>([]);
    const [inputComment, setInputComment] = useState('');

    useEffect(() => {
        getComments();
      }, [])

    const handleAudio = async (e: any) => {
        const audio = new Audio(`${apiReturnFile}/pronunciation/${e.target.id}`);
        let playPromise = audio.play();
        
        playPromise.then(() => {
            console.log('Sucesso');
        }).catch(err => {
            alert(err)
        });
    }

    const handleChangeInput = (e: any) => {
        setInputComment(e.target.value);
    }

    const getComments = async () => {
        await api.get('/comments').then((resp) => {
            setComments(resp.data);
        }).catch((err) => {
            alert(err.message);
        });
    }

    const postComment = async () => {
        if (inputComment === '') return;

        const comment: Comment = { description: inputComment };
        
        await api.post('/comments', comment).then(() => {
            getComments();
            setInputComment('');
        }).catch(() => {

        });
    }

    return (
        <div className={'app-container'}>
            <div className={'left-container'}>
                <h3>Comentario</h3>
                <textarea value={inputComment} onChange={handleChangeInput} ></textarea>
                <button className={'button-cadastrar'} type="button" onClick={postComment}>Cadastrar</button>
            </div>
            <div className={'right-container'}>
                <h3>Comentários</h3>
                {listComment.length > 0 && listComment.map((comment: Comment) => (
                    <div key={comment.id} className={'item-conatiner'}>
                        <p className={'text-comment'}>{comment.description}</p>
                        <button className={'button-comment'} type="button" 
                            onClick={handleAudio} id={(comment.id).toString()}>
                            Ouvir
                        </button>
                    </div>
                ))}
            </div>
        </div>

    );
}

export default Home