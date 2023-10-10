import { allConnections } from "./connection";
import mysql, { RowDataPacket } from "mysql2/promise";
import { controllerConnection } from "./dbSetup";

export const findDB = (db: string) => {
    const found = allConnections.find((conn) => conn.config.database === db)
    if (found) {
        console.log("found:", found.config.database)
        return found;
    } else {
        console.log(`db not found: ${db}`);
    }
}

export const findTable = async (conn: mysql.Connection, keyword: string) => {
    const [rows, fields] = await conn.execute<RowDataPacket[]>(`
    SELECT table_name FROM information_schema.TABLES 
                      WHERE TABLE_SCHEMA = '${conn.config.database}'
                      AND TABLE_NAME LIKE '%${keyword}%'`);
    return rows;
}

export const getSelectedTables = async (db: string) => {
    const [rows, fields] = await (await controllerConnection).execute<RowDataPacket[]>(`
    SELECT selected_table.table_name
    FROM selected_table
    JOIN connection ON selected_table.connection_id = connection.id
    WHERE connection.database_name = 'dummy';
    `)
    return rows;
}

export const getExampleEntries = async (conn: mysql.Connection, tableName: string) => {
    const [rows, fields] = await conn.execute<RowDataPacket[]>(`SELECT * FROM ${tableName} LIMIT 5`)
    return rows
}

