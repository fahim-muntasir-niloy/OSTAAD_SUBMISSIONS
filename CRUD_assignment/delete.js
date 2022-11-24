import {MongoClient} from "mongodb";
let url = 'mongodb+srv://fahimMuntasir:mWlXuiD0uMBuC7U2@democluster1.fnuvikg.mongodb.net/school?retryWrites=true&w=majority'

const mongoClient = new MongoClient(url);

async function deleteItem(){
    try {
        let database = mongoClient.db('school')
        let dbCollection = database.collection('teachers')
        console.log(`${dbCollection.namespace} connected`)

        let deleteItem = {courseFee:null}
        let result = await dbCollection.deleteMany(deleteItem)
        console.log(`File deleted: ${result.deletedCount}`)


    }catch(error){
        console.log('Operation Failed')
    }
}

await deleteItem().catch(console.dir)