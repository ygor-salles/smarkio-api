import { createConnection } from 'typeorm';
import 'dotenv/config';

if (process.env.NODE_ENV === 'development') {
    createConnection()
    .then(() => console.log('Conexão com o banco de dados efetuada com sucesso'))
    .catch(e => console.log('Falha de conexão com o banco de dados ->',e.message || e))
} else {
    createConnection()
    .then(() => console.log('Conexão com o banco de dados remoto efetuada com sucesso'))
    .catch(e => console.log('Falha de conexão com o banco de dados remoto ->',e.message || e))
}