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
        const defaults = {
            estado: 'pendiente'
        }
        const newUser = Object.assign(defaults, input)
        let db
        let user
        try {
            db = await connectDb()
            user = await db.collection('users').insertOne(newUser)
            newUser._id = user.insertedId
        } catch (error) {
            errorHandler(error)
        }
        return newUser
    },
    createInscripcion: async (root, { input }) => {
        let db
        let inscripcion
        try {
            db = await connectDb()
            inscripcion = await db.collection('inscripcions').insertOne(input)
            input._id = inscripcion.insertedId
        } catch (error) {
            errorHandler(error)
        }
        return input
    },
    createAvance: async (root, { input }) => {
        let db
        let avance
        try {
            db = await connectDb()
            avance = await db.collection('avances').insertOne(input)
            input._id = avance.insertedId
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
    editInscripcion: async (root, { _id, input }) => {
        let db
        let inscripcion
        try {
            db = await connectDb()
            await db.collection('inscripcions').updateOne(
                { _id: ObjectId(_id) },
                { $set: input }
            )
            inscripcion = await db.collection('inscripcions').findOne(
                { _id: ObjectId(_id) }
            )
        } catch (error) {
            errorHandler(error)
        }
        return inscripcion
    },
    editAvance: async (root, { _id, input }) => {
        let db
        let avance
        try {
            db = await connectDb()
            await db.collection('avances').updateOne(
                { _id: ObjectId(_id) },
                { $set: input }
            )
            avance = await db.collection('avances').findOne(
                { _id: ObjectId(_id) }
            )
        } catch (error) {
            errorHandler(error)
        }
        return avance
    },
    deleteProject: async (root, { _id }) => {
        let db

        try {
            db = await connectDb()
            await db.collection('projects').deleteOne(
                { _id: ObjectId(_id) }
            )
            return true
        } catch (error) {
            console.error(error)
            return false
        }
    },
    deleteUser: async (root, { _id }) => {
        let db

        try {
            db = await connectDb()
            await db.collection('users').deleteOne(
                { _id: ObjectId(_id) }
            )
            return true
        } catch (error) {
            console.error(error)
            return false
        }
    },
    deleteInscripcion: async (root, { _id }) => {
        let db

        try {
            db = await connectDb()
            await db.collection('inscripcions').deleteOne(
                { _id: ObjectId(_id) }
            )
            return true
        } catch (error) {
            console.error(error)
            return false
        }
    },
    deleteAvance: async (root, { _id }) => {
        let db

        try {
            db = await connectDb()
            await db.collection('avances').deleteOne(
                { _id: ObjectId(_id) }
            )
            return true
        } catch (error) {
            console.error(error)
            return false
        }
    },
    addUserProject: async (root, { projectID, personID }) => {
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
    },
    addUserInscripcion: async (root, { inscripcionID, personID }) => {
        let db
        let inscripcion
        let person

        try {
            db = await connectDb()
            inscripcion = await db.collection('inscripcions').findOne(
                { _id: ObjectId(inscripcionID) })

            person = await db.collection('users').findOne(
                { _id: ObjectId(personID) })

            if (!inscripcion || !person) throw new Error('La Pesona o Inscripción no existe')
            await db.collection('inscripcions').updateOne(
                { _id: ObjectId(inscripcionID) },
                { $addToSet: { people: ObjectId(personID) } }
            )
        } catch (error) {
            errorHandler(error)
        }
        return inscripcion
    },
    addProjectInscripcion: async (root, { inscripcionID, projectID }) => {
        let db
        let inscripcion
        let project

        try {
            db = await connectDb()
            inscripcion = await db.collection('inscripcions').findOne(
                { _id: ObjectId(inscripcionID) })

            project = await db.collection('projects').findOne(
                { _id: ObjectId(projectID) })

            if (!inscripcion || !project) throw new Error('La Inscripción o el Proyecto no existe')
            await db.collection('inscripcions').updateOne(
                { _id: ObjectId(inscripcionID) },
                { $addToSet: { project: ObjectId(projectID) } }
            )
        } catch (error) {
            errorHandler(error)
        }
        return inscripcion
    },
    addProjectAvance: async (root, { avanceID, projectID }) => {
        let db
        let avance
        let project

        try {
            db = await connectDb()
            avance = await db.collection('avances').findOne(
                { _id: ObjectId(avanceID) })

            project = await db.collection('projects').findOne(
                { _id: ObjectId(projectID) })

            if (!avance || !project) throw new Error('La Inscripción o el Proyecto no existe')
            await db.collection('avances').updateOne(
                { _id: ObjectId(avanceID) },
                { $addToSet: { project: ObjectId(projectID) } }
            )
        } catch (error) {
            errorHandler(error)
        }
        return avance
    }
}