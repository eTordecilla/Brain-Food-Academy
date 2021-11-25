'use strict'

const connectDb = require('./db')
const { ObjectId } = require('mongodb')
const errorHandler = require('./errorHandler')

module.exports = {
    createProject: async (root, { input }) => {
        const newProject = Object.assign(input)
        let db
        let project
        try {
            db = await connectDb()
            project = await db.collection('projects').insertOne(newProject)
            newProject._id = project.insertedId
        } catch (error) {
            errorHandler(error)
        }
        return newProject
    },
    createUser: async (root, { input }) => {
        let db
        let user
        try {
            db = await connectDb()
            user = await db.collection('users').insertOne(input)
            input._id = user.insertedId
        } catch (error) {
            errorHandler(error)
        }
        return input
    },
    editProject: async (root, { _id, input }) => {
        let db
        let project
        try {
            db = await connectDb()
            await db.collection('projects').updateOne(
                { _id: ObjectId(_id) },
                { $set: input }
            )
            project = await db.collection('projects').findOne(
                { _id: ObjectId(_id) }
            )
        } catch (error) {
            errorHandler(error)
        }
        return project
    },
    editUser: async (root, { _id, input }) => {
        let db
        let user
        try {
            db = await connectDb()
            await db.collection('users').updateOne(
                { _id: ObjectId(_id) },
                { $set: input }
            )
            user = await db.collection('users').findOne(
                { _id: ObjectId(_id) }
            )
        } catch (error) {
            errorHandler(error)
        }
        return user
    },
    addPeople: async (root, { projectID, personID }) => {
        let db
        let project
        let person

        try {
            db = await connectDb()
            project = await db.collection('projects').findOne(
                { _id: ObjectId(projectID) })

            person = await db.collection('users').findOne(
                { _id: ObjectId(personID) })

            if (!project || !person) throw new Error('La Pesona o Proyecto no existe')
            await db.collection('projects').updateOne(
                { _id: ObjectId(projectID) },
                { $addToSet: { people: ObjectId(personID) } }
            )
        } catch (error) {
            errorHandler(error)
        }
        return project
    }
}