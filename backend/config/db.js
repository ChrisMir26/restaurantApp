import { MongoClient, ServerApiVersion }from 'mongodb';
const uri = "mongodb+srv://christian:christian@cluster0.hwxypqv.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
});


export async function run() {
    try {
        await client.connect();
        console.log("Successfully connected to MongoDB!");
      } catch (error) {
        console.error("Error connecting to MongoDB:", error);
      }
}
run().catch(console.dir);