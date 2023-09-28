"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.populateAppleTable = exports.createDummyApplesTable = void 0;
const promise_1 = __importDefault(require("mysql2/promise"));
const populateDB_1 = require("./populateDB");
const conn = promise_1.default.createConnection({
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT),
    database: process.env.DATABASE_DB_NAME,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD
});
// Function to create the "apples" table
async function createDummyApplesTable() {
    try {
        const [rows, fields] = await (await conn).execute(`
        CREATE TABLE IF NOT EXISTS apples (
          id INT AUTO_INCREMENT PRIMARY KEY,
          danish_name VARCHAR(255),
          latin_name VARCHAR(255),
          description VARCHAR(255),
          description2 VARCHAR(255),
          description3 VARCHAR(255),
          color VARCHAR(255),
          shape VARCHAR(255)
        )
      `);
        console.log("Apples table created");
    }
    catch (error) {
        console.error("Error creating Apples table:", error);
    }
}
exports.createDummyApplesTable = createDummyApplesTable;
const populateAppleTable = () => {
    (0, populateDB_1.populateTable)(conn, "apples", [
        {
            danish_name: "Granny Smith",
            latin_name: "Malus domestica 'Granny Smith'",
            description: "Crisp and tart green apple",
            description2: "Popular for baking",
            description3: "Originated in Australia",
            color: "Green",
            shape: "Round",
        },
        {
            danish_name: "Red Delicious",
            latin_name: "Malus domestica 'Red Delicious'",
            description: "Sweet and mildly flavored apple",
            description2: "Bright red skin",
            description3: "Common apple variety",
            color: "Red",
            shape: "Oval",
        },
        {
            danish_name: "Fuji",
            latin_name: "Malus domestica 'Fuji'",
            description: "Sweet and crisp apple",
            description2: "Originally from Japan",
            description3: "Yellow-green with red stripes",
            color: "Yellow-green",
            shape: "Round",
        },
        {
            danish_name: "Honeycrisp",
            latin_name: "Malus domestica 'Honeycrisp'",
            description: "Sweet and juicy apple",
            description2: "Known for its crunchy texture",
            description3: "Developed in Minnesota, USA",
            color: "Light red with yellow specks",
            shape: "Irregular",
        },
        {
            danish_name: "Gala",
            latin_name: "Malus domestica 'Gala'",
            description: "Sweet and aromatic apple",
            description2: "Commonly used in salads",
            description3: "Originated in New Zealand",
            color: "Red and yellow stripes",
            shape: "Round",
        },
    ]);
};
exports.populateAppleTable = populateAppleTable;
//# sourceMappingURL=DBApples.js.map