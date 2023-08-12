const mongodb = require('mongodb')

const mongoClient = mongodb.MongoClient

const connectionUrl = 'mongodb://127.0.0.1:27017'

const dbname = "task1"

mongoClient.connect(connectionUrl, (error, res1) => {
    if (error) {
        return console.log('error has occured')
    }
    // console.log('All Perf')

    const db = res1.db(dbname)

    ////////////////////////////   insertOne 2 persons  ////////////////////////////////////////////
    db.collection('users').insertOne({
        name: 'mariam',
        age: 21,
        city: 'gharbia'
    }, (error, data) => {
        if (error) {
            console.log('Unable to insert Data')
        }
        console.log(data.insertedId)
    })

    db.collection('users').insertOne({
        name: 'nour',
        age: 22,
        city: 'egypt'
    }, (error, data) => {
        if (error) {
            console.log('Unable to insert Data')
        }
        console.log(data.insertedId)
    })

    //////////////////////////// insertMany 10 persons 5 of 10 age 25  /////////////////////////////////////////

    db.collection('users').insertMany(
        [{
                name: 'islam',
                age: 25,
                city: 'mansoura'
            },
            {
                name: 'adel',
                age: 25,
                city: 'sharkia'
            },
            {
                name: 'reem',
                age: 25,
                city: 'monofia'
            },
            {
                name: 'tasneem',
                age: 25,
                city: 'ain shams'
            },
            {
                name: 'mohamed',
                age: 25,
                city: 'banha'
            },
            {
                name: 'esraa',
                age: 20,
                city: 'monofia'
            },
            {
                name: 'khaled',
                age: 24,
                city: 'zaied'
            },
            {
                name: 'mahmoud',
                age: 22,
                city: 'madinty'
            },
            {
                name: 'aya',
                age: 21,
                city: 'matroh'
            },
            {
                name: 'seef',
                age: 30,
                city: 'giza'
            }
        ], (error, data) => {
            if (error) {
                console.log('Unable to insert data')
            }
            console.log(data.insertedCount)
        }
    )

    //////////////////////////////  find  match 25  /////////////////////////////////////////

    db.collection('users').find({
            age: 25
        })
        .toArray((error, users) => {
            if (error) {
                return console.log('error has occured')
            }
            console.log(users)
        })

    ///////////////////////////////  limit 3  with  25y   ///////////////////////////////////////
    db.collection('users').find({
        age: 25
    }).limit(3).toArray((error, users) => {
        if (error) {
            return console.log('error has occured')
        }
        console.log(users)
    })

    ///////////////////////////// $set name for first 4 person ///////////////////////////////////////////

    // db.collection('users').updateMany({}, { $set: { name: "roma" } } , {limit : 4} )
    // .then((data) => console.log('Modified count: ' + data.modifiedCount))
    // .catch((error) => console.log('Error while updating data: ' + error))

    /////////////  secound solution for the previous que ($set name for first 4 person)  ////////////////

    db.collection('users').updateOne({
            _id: mongodb.ObjectId("64d81328df6f690de3d42702")
        }, {
            $set: {
                name: 'osama'
            }
        })
        .then((data) => console.log('Modified count: ' + data.modifiedCount))
        .catch((error) => console.log('Error while updating data: ' + error))

    db.collection('users').updateOne({
            _id: mongodb.ObjectId("64d81328df6f690de3d42703")
        }, {
            $set: {
                name: 'wael'
            }
        })
        .then((data) => console.log('Modified count: ' + data.modifiedCount))
        .catch((error) => console.log('Error while updating data: ' + error))

    db.collection('users').updateOne({
            _id: mongodb.ObjectId("64d81328df6f690de3d42704")
        }, {
            $set: {
                name: 'yousef'
            }
        })
        .then((data) => console.log('Modified count: ' + data.modifiedCount))
        .catch((error) => console.log('Error while updating data: ' + error))

    db.collection('users').updateOne({
            _id: mongodb.ObjectId("64d81328df6f690de3d42705")
        }, {
            $set: {
                name: 'asmaa'
            }
        })
        .then((data) => console.log('Modified count: ' + data.modifiedCount))
        .catch((error) => console.log('Error while updating data: ' + error))

    ///////////////////////////////   updateOne for 1 person  $inc age 20  /////////////////////////////////
    db.collection('users').updateOne({
            _id: mongodb.ObjectId("64d81328df6f690de3d42702")
        }, {
            $inc: {
                age: 20
            }
        }).then((data) => console.log('Modified count: ' + data.modifiedCount))
        .catch((error) => console.log('Error while updating data: ' + error))

    /////////////////////////////   updateMany $inc age 10  /////////////////////////////////////////

    db.collection('users').updateMany({}, {
            $inc: {
                age: 10
            }
        })
        .then((data) => console.log('Modified count: ' + data.modifiedCount))
        .catch((error) => console.log('Error while updating data: ' + error))

    ///////////////////////////  deleteOne the first person  ////////////////////////////////////

    db.collection('users').deleteOne({
            _id: mongodb.ObjectId("64d81328df6f690de3d42702")
        })
        .then((data) => console.log('Modified count: ' + data.modifiedCount))
        .catch((error) => console.log('Error while updating data: ' + error))

    //////////////////////////  deleteMany with age 35 ////////////////////////////////////

    db.collection('users').deleteMany({
            age: 35
        })
        .then((data) => console.log('Modified count: ' + data.modifiedCount))
        .catch((error) => console.log('Error while updating data: ' + error))

})