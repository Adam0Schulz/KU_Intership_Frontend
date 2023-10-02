"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = exports.controllerData = void 0;
const promise_1 = __importDefault(require("mysql2/promise"));
require("dotenv/config");
const dbSetup_1 = require("./dbSetup");
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
            //console.log(`${JSON.stringify(rows, null, 2)}`);
        }
    }
    catch (err) {
        console.error('Error in test:', err);
    }
};
exports.test = test;
//# sourceMappingURL=connection.js.map