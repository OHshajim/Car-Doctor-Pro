import { MongoClient, ServerApiVersion } from "mongodb";

let db;
export const ConnectDB = () => {
       if (db) return db ;
       try {
        const url = process.env.MONGODB_URI
        const client = new MongoClient(url, {
            serverApi: {
              version: ServerApiVersion.v1,
              strict: true,
              deprecationErrors: true,
            }
          });
          db = client.db('CarDoctor')
          return db;
       } catch (error) {
        console.log(error);
       }
};
