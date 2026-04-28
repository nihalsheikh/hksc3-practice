import { Client } from "pg";
require("dotenv").config();

export async function getClient() {
  const client = new Client({
    connectionString: process.env.NEON_CONNECTION_STRING,
  });
  await client.connect();
  return client;
}
