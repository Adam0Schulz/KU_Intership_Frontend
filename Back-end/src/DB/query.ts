import {allConnections} from "./connection";
import mysql, {RowDataPacket} from "mysql2/promise";

export const findDB = (db: string) => {
    const found = allConnections.find((conn)=> conn.config.database === db)
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

