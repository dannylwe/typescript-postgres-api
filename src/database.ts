import { Pool } from 'pg'

export const pool = new Pool({
    max: 20,
    idleTimeoutMillis: 30000,
    user: 'postgres',
    host: 'localhost',
    password: 'example',
    database: 'typescript',
    port: 5432
})