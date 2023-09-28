import mysql from "mysql2/promise";
import 'dotenv/config';
import * as process from "process";


const createConnection = () => {
    return mysql.createConnection({
        host: process.env.DATABASE_HOST,
        port: parseInt(process.env.DATABASE_PORT),
        database: process.env.DATABASE_DB_NAME,
        user: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD
    });
};

export default createConnection;