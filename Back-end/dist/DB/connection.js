"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.testCredentials = exports.test = exports.controllerData = void 0;
const promise_1 = __importDefault(require("mysql2/promise"));
require("dotenv/config");
const dbSetup_1 = require("./dbSetup");
const baseConnData = {
    host: 'localhost',
    port: 3306,
    database: '',
    user: '',
    password: ''
};
const allConnectionData = [];
const allConnections = [];
const controllerData = async () => {
    try {
        const conn = await dbSetup_1.controllerConnection;
        const [rows, fields] = await conn.execute('SELECT * FROM connection;');
        if (rows.length > 0) {
            rows.forEach((row) => {
                const mysqlConnectionData = {
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
            });
        }
    }
    catch (err) {
        console.error('Error executing query:', err);
    }
};
exports.controllerData = controllerData;
const test = async () => {
    await (0, exports.controllerData)();
    try {
        for (const mysqlConn of allConnectionData) {
            const conn = await promise_1.default.createConnection(mysqlConn);
            allConnections.push(conn);
            await conn.ping();
            console.log(`Database connected: ${mysqlConn.database} `);
            const [rows, fields] = await conn.execute('SHOW TABLES;');
            console.log(`${JSON.stringify(rows, null, 2)}`);
        }
    }
    catch (err) {
        console.error('Error in test:', err);
    }
};
exports.test = test;
const testCredentials = async (cred) => {
    try {
        const fullConnData = {
            ...baseConnData,
            database: cred.database,
            user: cred.username,
            password: cred.password
        };
        const conn = await promise_1.default.createConnection(fullConnData);
        await conn.ping();
        const cc = await dbSetup_1.controllerConnection;
        const [rows, fields] = await cc.execute(`SELECT *
             FROM connection
             WHERE database_name = "${cred.database}"
             LIMIT 1;`);
        if (rows.length > 0) {
            return { dbConfig: `db: ${rows[0].database_name} already exists in controller db` };
        }
        else {
            const values = [];
            const keys = Object.keys(fullConnData);
            for (let i = 0; i < keys.length; i++) {
                const key = keys[i];
                values.push(fullConnData[key]);
            }
            const [rowsNewInsert] = await cc.query(`INSERT INTO connection (host, port, database_name, username, password)
                 VALUES (?,?,?,?,?)`, values);
            return { dbConfig: `db: ${cred.database} registered in controller db` };
        }
    }
    catch (err) {
        console.log('Error in credentials:' + err);
        throw err;
    }
};
exports.testCredentials = testCredentials;
//# sourceMappingURL=connection.js.map