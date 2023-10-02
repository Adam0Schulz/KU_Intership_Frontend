import { FieldPacket, OkPacketParams, Query, ResultSetHeader, RowDataPacket } from "mysql2";
import mysql from "mysql2/promise"


export interface DBTableMeta {
  name: string,
  foreignKeys: ForeignKey[]
}

export interface ForeignKey {
  column: string,
  table: string,
}


export async function listTables(conn: mysql.Connection) {
  let tableNames: string[] = []
  try {
    // Execute the SHOW TABLES query and await the result
    const [rows, _]: [RowDataPacket[], unknown] = await conn.execute('SHOW TABLES');

    // Extract and display the table names as an array
    tableNames = rows.map((row) => row[Object.keys(row)[0]]);

    console.log('Tables in the database:', tableNames);

  } catch (error) {
    console.error('Error:', error);
  }

  return tableNames
}

// not in use
export async function getTableDefinition(conn: mysql.Connection, tableName: string) {

  const [rows, _]: [RowDataPacket[], unknown] = await conn.execute(`SHOW CREATE TABLE ${tableName}`);

  // Extract and display the table names as an array
  const [tableDefinition] = rows.map((row) => row[Object.keys(row)[1]]);

  //console.log("table definition ", tableDefinition)
  return tableDefinition
}

// not in use
export function removeSurroundingQuotes(input: string): string {
  // Define a regular expression to match surrounding quotes (single, double, or backticks)
  const quotePattern = /^(['"`])(.*)(\1)$/;

  // Use replace with a callback function to remove surrounding quotes
  const result = input.replace(quotePattern, (match, capturedQuote, innerContent) => innerContent);

  return result;
}

export async function findRelatedTables(connection: mysql.Connection, tableName: string,): Promise<DBTableMeta> {

  let tableMetaArr: DBTableMeta =
  {
    name: "",
    foreignKeys: [
      {
        column: "",
        table: ""
      }
    ]
  }


  try {
    // Query the INFORMATION_SCHEMA to check for foreign keys
    const [results]: [RowDataPacket[], FieldPacket[]] = await connection.execute(
      `SELECT * FROM INFORMATION_SCHEMA.KEY_COLUMN_USAGE WHERE REFERENCED_TABLE_NAME = ?`,
      [tableName]
    );

    tableMetaArr.name = tableName
    tableMetaArr.foreignKeys = results.map(res => {
      return {
        column: res.COLUMN_NAME,
        table: res.TABLE_NAME
      }
    })

    const [results2]: [RowDataPacket[], FieldPacket[]] = await connection.execute(
      `SELECT * FROM INFORMATION_SCHEMA.KEY_COLUMN_USAGE WHERE TABLE_NAME = ?`,
      [tableName]
    );

    tableMetaArr.foreignKeys = results2.map(res => {
      return {
        column: res.COLUMN_NAME,
        table: res.REFERENCED_TABLE_NAME
      }
    })

  } catch (err) {
    console.error(err)
    return;
  }

  return tableMetaArr;

}

export async function connectAndGetAllTables(connection: mysql.Connection): Promise<DBTableMeta[]> {
  const tableNames = await listTables(connection); // Get an array of table names
  const promises = tableNames.map((tableName) => findRelatedTables(connection, tableName)); // Create an array of promises
  
  return Promise.all(promises);
}



