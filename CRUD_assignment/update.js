import {MongoClient} from "mongodb";
let url = 'mongodb+srv://fahimMuntasir:mWlXuiD0uMBuC7U2@democluster1.fnuvikg.mongodb.net/school?retryWrites=true&w=majority'

const mongoClient = new MongoClient(url);

async function updateDatabase(){
    try{
        let database = mongoClient.db('school')
        let dbCollection = database.collection('teachers')
        console.log(`${dbCollection.namespace} is connected`)

        // this following is to see the total database
        // let query = {}
        // let opt = {projection:{_id:0}}
        // let cursor = dbCollection.find(query,opt)
        // await cursor.forEach(console.dir)

    //    Update operation on students column
        let filter = {student:{$lt:100}}
        let updateItem = {$set: {courseFee: 5000}}

        let result = await dbCollection.updateMany(filter,updateItem)
        console.log(result)
    }

    catch(error){
        console.log('DB not connected')
    }
}

updateDatabase().catch(console.dir)