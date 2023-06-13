const express = require('express');
const{MongoClient} = require('mongodb');


const app = express();
const port = 3000;
const uri = "mongodb://localhost:27017";
const dbName = "pidev1";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());

//connect to database
async function run() {
    try {
        await client.connect();
        const db = client.db(dbName);
        const dbExists = await db.admin().listDatabases({ nameOnly: true });
        if (dbExists.databases.some(db => db.name === dbName)) {
            console.log(`Connected to => ${dbName} <= database successfully`);
            return db;
        } else {
            throw new Error(`Database ${dbName} does not exist`);
        }
    } catch (err) {
        console.error(err);
    }
}


//routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});

//start server
async function start(){
    const db = await run();
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}

start().catch((err) => {console.error(err)});