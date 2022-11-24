import { MongoClient } from "mongodb";
let url = 'mongodb+srv://fahimMuntasir:mWlXuiD0uMBuC7U2@democluster1.fnuvikg.mongodb.net/school?retryWrites=true&w=majority'

const mongoClient = new MongoClient(url);

async function readData() {
    try {
        let database = mongoClient.db('school')
        let dbCollection = database.collection('teachers')

        let queryItem = {
            // id:{$gt:2}
            student: {$gt:10}
        }

        let options = {
            sort:{id:1}, // the items are sorted based on the given id
            projection:{_id:0} // this means _id is not shown
        }

        let cursor = dbCollection.find(queryItem, options)
        // if((await cursor.countDocuments()) === 0){
        //     console.log('No Item Found');
        // }

        await cursor.forEach(console.dir);
        if ((await dbCollection.countDocuments(queryItem)) === 0) {
            console.log("No item found!");
        }
        
    
    } catch (error) {
        console.log('DB not connected');
    }
}

readData().catch(console.dir)