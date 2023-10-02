import mysql from "mysql2/promise";
import process from "process";
import 'dotenv/config';
export const controllerConnection = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT),
    database: process.env.DATABASE_CONTROLLER_DB_NAME,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD
});

const createTableSQL = `
    CREATE TABLE IF NOT EXISTS connection
    (
        id            INT AUTO_INCREMENT PRIMARY KEY,
        host          VARCHAR(255),
        port          INT,
        database_name VARCHAR(255),
        username      VARCHAR(255),
        password      VARCHAR(255)
    );
`;
export const setUp = () => {
    controllerConnection.then(conn => conn.execute(createTableSQL));

    controllerConnection.then(conn => conn.execute(
        `INSERT INTO connection (host, port, database_name, username, password)
         VALUES ('localhost', 3306, 'ku_db', 'root', 'password');`));

}




