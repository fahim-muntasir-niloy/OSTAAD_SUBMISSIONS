import { MongoClient } from 'mongodb';
let url = 'mongodb+srv://fahimMuntasir:mWlXuiD0uMBuC7U2@democluster1.fnuvikg.mongodb.net/school?retryWrites=true&w=majority'

const mongoClient = new MongoClient(url);

// Create operation
async function createData() {
    try {
        let dataBase = mongoClient.db('school')
        let dbCollection = dataBase.collection('teachers')
        console.log('DB found and connected');

        // data to insert
        let newTeacher = {
            name:'neon',
            id:15,
            course:'Accounting',
            student:'10'
        }
        await dbCollection.insertOne(newTeacher)
        console.log('A data is inserted into database.');

        // dbCollection.findOne({course:'MERN'})
    } catch (error) {
        console.log('database not connected');
    } finally {
        await mongoClient.close();
      }
}

createData().catch(console.dir)