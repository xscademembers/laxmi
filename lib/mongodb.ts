import { MongoClient, Db } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB_NAME || "laxmi";

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

function getClientPromise(): Promise<MongoClient> {
  if (!uri) {
    return Promise.reject(
      new Error("MONGODB_URI is not set. Add it to .env.local")
    );
  }
  if (process.env.NODE_ENV === "development" && global._mongoClientPromise) {
    return global._mongoClientPromise;
  }
  const promise = new MongoClient(uri).connect();
  if (process.env.NODE_ENV === "development") {
    global._mongoClientPromise = promise;
  }
  return promise;
}

export async function getDb(): Promise<Db> {
  const client = await getClientPromise();
  return client.db(dbName);
}
