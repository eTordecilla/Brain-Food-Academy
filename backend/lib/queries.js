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
    },
    getInscripcions: async () => {
        let db
        let inscripcions = []
        try {
            db = await connectDb()
            inscripcions = await db.collection('inscripcions').find().toArray()
        } catch (error) {
            errorHandler(error)
        }
        return inscripcions
    },
    getInscripcion: async (root, { id }) => {
        let db
        let inscripcion
        try {
            db = await connectDb()
            inscripcion = await db.collection('inscripcions').findOne({ _id: ObjectId(id) })
        } catch (error) {
            errorHandler(error)
        }
        return inscripcion
    },
    getAvances: async () => {
        let db
        let avances = []
        try {
            db = await connectDb()
            avances = await db.collection('avances').find().toArray()
        } catch (error) {
            errorHandler(error)
        }
        return avances
    },
    getAvance: async (root, { id }) => {
        let db
        let avance
        try {
            db = await connectDb()
            avance = await db.collection('avances').findOne({ _id: ObjectId(id) })
        } catch (error) {
            errorHandler(error)
        }
        return avance
    }
}
