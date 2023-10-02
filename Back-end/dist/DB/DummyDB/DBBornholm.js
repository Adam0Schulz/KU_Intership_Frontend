"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.populateBornholmTable = exports.createDummyBornholmTable = exports.conn = void 0;
const promise_1 = __importDefault(require("mysql2/promise"));
const populateDB_1 = require("./populateDB");
exports.conn = promise_1.default.createConnection({
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT),
    database: process.env.DATABASE_DB_NAME,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD
});
const tableName = "bornholm_dictionary";
// Function to create the "apples" table
async function createDummyBornholmTable() {
    try {
        const [rows, fields] = await (await exports.conn).execute(`
        CREATE TABLE IF NOT EXISTS ${tableName} (
            description VARCHAR(255),
            word_class VARCHAR(255),
            pronunciation VARCHAR(255),
            synonyms VARCHAR(255),
            description2 VARCHAR(255),
            description3 VARCHAR(255)
          )
      `);
        //console.log(tableName + " table created");
    }
    catch (error) {
        console.error("Error creating " + tableName + " table:", error);
    }
}
exports.createDummyBornholmTable = createDummyBornholmTable;
const populateBornholmTable = () => {
    (0, populateDB_1.populateTable)(exports.conn, tableName, [
        {
            description: "Example description 1",
            word_class: "Noun",
            pronunciation: "[pruh-nuhn-see-ey-shuhn]",
            synonyms: "Word1, Word2, Word3",
            description2: "Additional description 1",
            description3: "Additional description 2",
        },
        {
            description: "Example description 2",
            word_class: "Adjective",
            pronunciation: "[pruh-nuhn-see-ey-shuhn]",
            synonyms: "Word4, Word5, Word6",
            description2: "Additional description 3",
            description3: "Additional description 4",
        },
        {
            description: "Example description 3",
            word_class: "Noun",
            pronunciation: "[pruh-nuhn-see-ey-shuhn]",
            synonyms: "Word7, Word8, Word9",
            description2: "Additional description 5",
            description3: "Additional description 6",
        },
        {
            description: "Example description 4",
            word_class: "Verb",
            pronunciation: "[pruh-nuhn-see-ey-shuhn]",
            synonyms: "Word10, Word11, Word12",
            description2: "Additional description 7",
            description3: "Additional description 8",
        },
        {
            description: "Example description 5",
            word_class: "Adverb",
            pronunciation: "[pruh-nuhn-see-ey-shuhn]",
            synonyms: "Word13, Word14, Word15",
            description2: "Additional description 9",
            description3: "Additional description 10",
        }
    ]);
};
exports.populateBornholmTable = populateBornholmTable;
//# sourceMappingURL=DBBornholm.js.map