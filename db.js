import mysql from "mysql2";

export const db = mysql.createConnection({
  host: "localhost",
  user: "Felipe",
  password: "Programador@0023",
  database: "blog_app",
});
