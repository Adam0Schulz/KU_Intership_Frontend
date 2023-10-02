"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.populateTable = void 0;
async function populateTable(conn, tableName, data) {
    try {
        for (const item of data) {
            const columns = Object.keys(item);
            //@ts-ignore
            const values = columns.map((column) => item[column]);
            // Check if the data already exists in the table
            const [rows, _] = await (await conn).execute(`SELECT * FROM ${tableName} WHERE ${columns
                .map((column) => `${column} = ?`)
                .join(" AND ")}`, values);
            if (rows.length < 1) {
                const insertQuery = `INSERT INTO ${tableName} (${columns.join(", ")}) VALUES (${columns.map(() => "?").join(", ")})`;
                await (await conn).execute(insertQuery, values);
            }
        }
        //console.log(`${tableName} table populated with real data`);
    }
    catch (error) {
        console.error(`Error populating ${tableName} table:`, error);
    }
    finally {
        (await conn).end(); // Close the database connection
    }
}
exports.populateTable = populateTable;
//# sourceMappingURL=populateDB.js.map