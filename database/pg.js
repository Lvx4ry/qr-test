import pg from "pg";

export const pool = new pg.Pool({
  user: "postgres",
  password: "admin",
  host: "localhost",
  port: 8080,
  database: "test-qr",
});
