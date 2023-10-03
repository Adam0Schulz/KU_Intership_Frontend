import mysql, {RowDataPacket} from "mysql2/promise";
import 'dotenv/config';
import {controllerConnection} from "./dbSetup";

interface MysqlConnectionData {
    id?: number;
    host?: string;
    port?: number;
    database?: string;
    user?: string;
    password?: string;
}

interface BasicCredentials {
    database: string,
    username: string,
    password: string
}

const baseConnData: MysqlConnectionData = {
    host: 'localhost',
    port: 3306,
    database: '',
    user: '',
    password: ''
}

const allConnectionData: MysqlConnectionData[] = [];
export const allConnections: mysql.Connection[] = [];

export const controllerData = async () => {
    try {
        const conn = await controllerConnection;
        const [rows, fields] = await conn.execute<RowDataPacket[]>(
            'SELECT * FROM connection;'
        );
        if (rows.length > 0) {
            rows.forEach((row) => {
                const mysqlConnectionData: MysqlConnectionData = {
                    host: '',
                    port: 0,
                    database: '',
                    user: '',
                    password: '',
                };
                mysqlConnectionData.host = row.host;
                mysqlConnectionData.port = row.port;
                mysqlConnectionData.database = row.database_name;
                mysqlConnectionData.user = row.username;
                mysqlConnectionData.password = row.password;
                allConnectionData.push(mysqlConnectionData);
            })
        }
    } catch (err) {
        console.error('Error executing query:', err);
    }
};

export const setUpDBConnections = async () => {
    await controllerData();
    try {
        for (const mysqlConn of allConnectionData) {
            const conn = await mysql.createConnection(mysqlConn);
            allConnections.push(conn);
            await conn.ping()
            console.log(`Database connected: ${mysqlConn.database} `)
            const [rows, fields] = await conn.execute('SHOW TABLES;');
            //console.log(`${JSON.stringify(rows, null, 2)}`);
        }
    } catch (err) {
        console.error('Error in DBConnections setup:', err);
    }
};

export const testCredentials = async (cred: BasicCredentials) => {
    try {
        const fullConnData: MysqlConnectionData = {
            ...baseConnData,
            database: cred.database,
            user: cred.username,
            password: cred.password
        }
        const conn = await mysql.createConnection(fullConnData)
        await conn.ping()
        const cc = await controllerConnection;
        const [rows, fields] = await cc.execute<RowDataPacket[]>(
            `SELECT *
             FROM connection
             WHERE database_name = "${cred.database}"
             LIMIT 1;`
        );
        if (rows.length > 0) {
            return {
                dbName: rows[0].database_name,
                dbConfig: `db: ${rows[0].database_name} already exists in controller db`
            };
        } else {
            const values = [];
            const keys = Object.keys(fullConnData);
            for (let i = 0; i < keys.length; i++) {
                const key = keys[i];
                values.push(fullConnData[key as keyof MysqlConnectionData]);
            }
            const [rowsNewInsert] = await cc.query<RowDataPacket[]>(
                `INSERT INTO connection (host, port, database_name, username, password)
                 VALUES (?, ?, ?, ?, ?)`, values
            );
            return {
                dbName: cred.database,
                dbConfig: `db: ${cred.database} registered in controller db`
            };
        }

    } catch (err) {
        console.log('Error in credentials:' + err);
        throw err
    }
}