'use strict'

const connectDb = require('./db')
const { ObjectId } = require('mongodb')
const errorHanlder = require('./errorHandler')

module.exports = {
    getProjects: async () => {
        let db
        let projects = []
        try {
            db = await connectDb()
            projects = await db.collection('projects').find().toArray()
        } catch (error) {
            errorHandler(error)
        }
        return projects
    },
    getProject: async (root, { id }) => {
        let db
        let project
        try {
            db = await connectDb()
            project = await db.collection('projects').findOne({ _id: ObjectId(id) })
        } catch (error) {
            errorHandler(error)
        }
        return project
    },
    getUsers: async () => {
        let db
        let users = []
        try {
            db = await connectDb()
            users = await db.collection('users').find().toArray()
        } catch (error) {
            errorHandler(error)
        }
        return users
    },
    getUser: async (root, { id }) => {
        let db
        let user
        try {
            db = await connectDb()
            user = await db.collection('users').findOne({ _id: ObjectId(id) })
        } catch (error) {
            errorHandler(error)
        }
        return user
    }
}
