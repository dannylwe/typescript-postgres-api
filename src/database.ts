import { Pool } from 'pg'

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'example',
    database: 'typescript',
    port: 5432
})