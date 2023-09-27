import mysql from "mysql2/promise";
import * as process from "process";


const createConnection = () => {
    return mysql.createConnection({
        host: process.env.DATABASE_HOST,
        port: 3306,
        database: process.env.DATABASE_DB_NAME,
        user: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD
    });
};

export default createConnection;