import { createConnection } from 'typeorm';
import 'dotenv/config';

const { BD_HOST, BD_PORT, BD_NAME, BD_USERNAME, BD_PASSWORD } = process.env;
const { BD_HOST_PROD, BD_PORT_PROD, BD_NAME_PROD, BD_USERNAME_PROD, BD_PASSWORD_PROD } = process.env;

if (process.env.NODE_ENV === 'development') {
    createConnection({
        type: 'mysql',
        host: BD_HOST,
        port: +BD_PORT,
        username: BD_USERNAME,
        password: BD_PASSWORD,
        database: BD_NAME,
        migrations: ['src/database/migrations/*.ts'],
        entities: ['src/entities/*.ts'],
        cli: {
            migrationsDir: './src/database/migrations'
        }
    })
    .then(() => console.log('Conexão com o banco de dados efetuada com sucesso'))
    .catch(e => console.log('Falha de conexão com o banco de dados ->',e.message || e))
} else {
    createConnection({
        type: 'mysql',
        host: BD_HOST_PROD,
        port: +BD_PORT_PROD,
        username: BD_USERNAME_PROD,
        password: BD_PASSWORD_PROD,
        database: BD_NAME_PROD,
        extra: {
            ssl: {
              require: true,
              rejectUnauthorized: false,
            },
        },
        migrations: ['build/database/migrations/*.js'],
        entities: ['build/entities/*.js'],
        cli: {
            migrationsDir: './build/database/migrations'
        }
    })
    .then(() => console.log('Conexão com o banco de dados remoto efetuada com sucesso'))
    .catch(e => console.log('Falha de conexão com o banco de dados remoto ->',e.message || e))
}