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
    },
    Inscripcion: {
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
        },
        project: async ({ project }) => {
            let db
            let projectData
            let ids
            try {
                db = await connectDb()
                ids = project ? project.map(id => ObjectId(id)) : []
                projectData = ids.length > 0
                    ? await db.collection('projects').find(
                        { _id: { $in: ids } }
                    ).toArray()
                    : []
            } catch (error) {
                errorHandler(error)
            }
            return projectData
        }
    },
    Avance: {
        project: async ({ project }) => {
            let db
            let projectData
            let ids
            try {
                db = await connectDb()
                ids = project ? project.map(id => ObjectId(id)) : []
                projectData = ids.length > 0
                    ? await db.collection('projects').find(
                        { _id: { $in: ids } }
                    ).toArray()
                    : []
            } catch (error) {
                errorHandler(error)
            }
            return projectData
        }
    }
}