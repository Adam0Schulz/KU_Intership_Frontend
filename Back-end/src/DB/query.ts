import {allConnections} from "./connection";
import mysql, {RowDataPacket} from "mysql2/promise";
import {controllerConnection} from "./dbSetup";

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
        SELECT table_name
        FROM information_schema.TABLES
        WHERE TABLE_SCHEMA = '${conn.config.database}'
          AND TABLE_NAME LIKE '%${keyword}%'`);
    return rows;
}

export const getConnectionId = async (db: string) => {
    const conn = await controllerConnection();
    const [rows, fields] = await conn.execute<RowDataPacket[]>(`
        SELECT id
        FROM connection
        WHERE database_name = '${db}'`);
    return rows[0].id;
}

export const getSelectedTableByNameAndConnectionId = async (tableName: string, connectionId: number) => {
    const conn = await controllerConnection();
    const [rows, fields] = await conn.execute<RowDataPacket[]>(`
        SELECT *
        FROM selected_table
        WHERE connection_id = '${connectionId}'
        AND table_name = '${tableName}'`);
    return rows[0];
}

export const getSelectedTablesByConnectionId = async (connectionId: number) => {
    const conn = await controllerConnection();
    const [rows, fields] = await conn.execute<RowDataPacket[]>(`
        SELECT *
        FROM selected_table
        WHERE connection_id = '${connectionId}'
        `);
    return rows;
}

export const createSelectedTable = async (connectionId: number, tableName: string, isCore?: boolean) => {
    const conn = await controllerConnection();
    const [rows, fields] = await conn.execute<RowDataPacket[]>(
        `INSERT INTO selected_table
        (connection_id, table_name, is_core) VALUES 
        ('${connectionId}', '${tableName}', '${isCore ? 1 : 0}')`);
    return rows;
}

export const deleteSelectedTableById = async (id: number) => {
    const conn = await controllerConnection();
    const [rows, fields] = await conn.execute<RowDataPacket[]>(`
        DELETE
        FROM selected_table
        WHERE id = '${id}'
        `);
    return rows[0];
}

