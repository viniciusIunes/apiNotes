const { Router } = require('express')

const usersRouter = require('./users.routes')
const notesRouter = require('./notes.routes')
const tagRouter = require('./tags.routes')
const sessionsRouter = require('./sessions.routes')


const routes = Router()
routes.use('/users', usersRouter)
routes.use('/sessions', sessionsRouter)
routes.use('/notes', notesRouter)
routes.use('/tags', tagRouter)


module.exports = routes
