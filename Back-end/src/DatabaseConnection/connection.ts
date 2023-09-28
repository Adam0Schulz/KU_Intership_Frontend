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

const allConnectionData:MysqlConnectionData[] = [];
const allConnections: mysql.Connection[] = [];

export const controllerData = async () => {
    try {
        const conn = await controllerConnection;
        const [rows, fields] = await conn.execute<RowDataPacket[]>(
            'SELECT * FROM connection;'
        );
        if (rows.length > 0) {
            rows.forEach((row)=> {
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

export const test = async () => {
    await controllerData();
    try {
        for (const mysqlConn of allConnectionData) {
            const conn = await mysql.createConnection(mysqlConn);
            allConnections.push(conn);
            await conn.ping()
            console.log(`Database connected: ${mysqlConn.database} `)
            const [rows, fields] = await conn.execute('SHOW TABLES;');
            console.log(`${JSON.stringify(rows, null, 2)}`);
        }
    } catch (err) {
        console.error('Error in test:', err);
    }
};