"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.controllerConnection = void 0;
const promise_1 = __importDefault(require("mysql2/promise"));
const process_1 = __importDefault(require("process"));
require("dotenv/config");
exports.controllerConnection = promise_1.default.createConnection({
    host: process_1.default.env.DATABASE_HOST,
    port: parseInt(process_1.default.env.DATABASE_PORT),
    database: process_1.default.env.DATABASE_CONTROLLER_DB_NAME,
    user: process_1.default.env.DATABASE_USERNAME,
    password: process_1.default.env.DATABASE_PASSWORD
});
const createTableSQL = `
  CREATE TABLE IF NOT EXISTS connection (
    id INT AUTO_INCREMENT PRIMARY KEY,
    host VARCHAR(255),
    port INT,
    database_name VARCHAR(255),
    username VARCHAR(255),
    password VARCHAR(255)
  );
`;
exports.controllerConnection.then(conn => conn.execute(createTableSQL));
// controllerConnection.then(conn => conn.execute(
//     `INSERT INTO connection (host, port, database_name, username, password)
//     VALUES ('localhost', 3306, 'ku_db', 'root', 'password');`));
//# sourceMappingURL=dbSetup.js.map