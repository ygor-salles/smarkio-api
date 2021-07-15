export default {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'smarkio_app',
    migrations: ['src/database/migrations/*.ts'],
    entities: ['src/entities/*.ts'],
    cli: {
        migrationsDir: './src/database/migrations'
    }
}