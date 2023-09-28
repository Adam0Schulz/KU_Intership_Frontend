import mysql from "mysql2/promise"

export async function populateTable(conn: Promise<mysql.Connection>,tableName: string, data: Object[]): Promise<void> {

    try {
  
  
      for (const item of data) {
        const columns = Object.keys(item);
        //@ts-ignore
        const values = columns.map((column) => item[column]);
  
        // Check if the data already exists in the table
        const [rows, _]: [any[], any] = await (await conn).execute(
          `SELECT * FROM ${tableName} WHERE ${columns
            .map((column) => `${column} = ?`)
            .join(" AND ")}`,
          values
        );
  
        if (rows.length < 1) {
          const insertQuery = `INSERT INTO ${tableName} (${columns.join(
            ", "
          )}) VALUES (${columns.map(() => "?").join(", ")})`;
  
          await (await conn).execute(insertQuery, values);
        }
      }
      console.log(`${tableName} table populated with real data`);
  
  
    } catch (error) {
  
      console.error(`Error populating ${tableName} table:`, error);
  
    } finally {
  
      (await conn).end(); // Close the database connection
      
    }
  }