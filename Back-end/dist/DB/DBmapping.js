"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectAndGetAllTables = exports.findRelatedTables = exports.removeSurroundingQuotes = exports.getTableDefinition = exports.listTables = void 0;
async function listTables(conn) {
    let tableNames = [];
    try {
        // Execute the SHOW TABLES query and await the result
        const [rows, _] = await conn.execute('SHOW TABLES');
        // Extract and display the table names as an array
        tableNames = rows.map((row) => row[Object.keys(row)[0]]);
        console.log('Tables in the database:', tableNames);
    }
    catch (error) {
        console.error('Error:', error);
    }
    return tableNames;
}
exports.listTables = listTables;
// not in use
async function getTableDefinition(conn, tableName) {
    const [rows, _] = await conn.execute(`SHOW CREATE TABLE ${tableName}`);
    // Extract and display the table names as an array
    const [tableDefinition] = rows.map((row) => row[Object.keys(row)[1]]);
    //console.log("table definition ", tableDefinition)
    return tableDefinition;
}
exports.getTableDefinition = getTableDefinition;
// not in use
function removeSurroundingQuotes(input) {
    // Define a regular expression to match surrounding quotes (single, double, or backticks)
    const quotePattern = /^(['"`])(.*)(\1)$/;
    // Use replace with a callback function to remove surrounding quotes
    const result = input.replace(quotePattern, (match, capturedQuote, innerContent) => innerContent);
    return result;
}
exports.removeSurroundingQuotes = removeSurroundingQuotes;
async function findRelatedTables(connection, tableName) {
    let tableMetaArr = {
        name: "",
        foreignKeys: [
            {
                column: "",
                table: ""
            }
        ]
    };
    try {
        // Query the INFORMATION_SCHEMA to check for foreign keys
        const [results] = await connection.execute(`SELECT * FROM INFORMATION_SCHEMA.KEY_COLUMN_USAGE WHERE REFERENCED_TABLE_NAME = ?`, [tableName]);
        tableMetaArr.name = tableName;
        tableMetaArr.foreignKeys = results.map(res => {
            return {
                column: res.COLUMN_NAME,
                table: res.TABLE_NAME
            };
        });
        const [results2] = await connection.execute(`SELECT * FROM INFORMATION_SCHEMA.KEY_COLUMN_USAGE WHERE TABLE_NAME = ?`, [tableName]);
        tableMetaArr.foreignKeys = results2.map(res => {
            return {
                column: res.COLUMN_NAME,
                table: res.REFERENCED_TABLE_NAME
            };
        });
    }
    catch (err) {
        console.error(err);
        return;
    }
    return tableMetaArr;
}
exports.findRelatedTables = findRelatedTables;
async function connectAndGetAllTables(connection) {
    const tableNames = await listTables(connection); // Get an array of table names
    const promises = tableNames.map((tableName) => findRelatedTables(connection, tableName)); // Create an array of promises
    return Promise.all(promises);
}
exports.connectAndGetAllTables = connectAndGetAllTables;
//# sourceMappingURL=DBmapping.js.map