import mysql from "mysql2/promise";


const createConnection = () => {
    return mysql.createConnection({
        host: 'localhost',
        port: 3306,
        database: 'test_db',
        user: 'root',
        password: 'password',
    });
};

export default createConnection;