'use strict'

const connectDb = require('./db')
const { ObjectId } = require('mongodb')
const errorHandler = require('./errorHandler')

module.exports = {
    Project: {
        people: async ({ people }) => {
            let db
            let peopleData
            let ids
            try {
                db = await connectDb()
                ids = people ? people.map(id => ObjectId(id)) : []
                peopleData = ids.length > 0
                    ? await db.collection('users').find(
                        { _id: { $in: ids } }
                    ).toArray()
                    : []
            } catch (error) {
                errorHandler(error)
            }
            return peopleData
        }
    }
}