/* istanbul ignore file */

import mongoose from 'mongoose'

import { MONGO_USER, MONGO_PASSWORD, MONGO_HOSTS_PORT } from '../config'


mongoose.Promise = global.Promise
mongoose.set('debug', process.env.DEBUG !== undefined)

const mongoUrlDefault = `mongodb://${MONGO_USER ? `${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOSTS_PORT}` : MONGO_HOSTS_PORT}`

const opts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    keepAlive: true,
    useCreateIndex: true,
    keepAliveInitialDelay: 300000,
    serverSelectionTimeoutMS: 5000, // 5 seconds
    socketTimeoutMS: 45000 // Close sockets after 45 seconds of inactivity
}

class MongoConnection {
    private static _instance: MongoConnection
    private mongoUrl: string

    static getInstance(): MongoConnection {
        if (!MongoConnection._instance) {
            MongoConnection._instance = new MongoConnection()
        }
        return MongoConnection._instance
    }

    public async open({ mongoUrl = mongoUrlDefault }): Promise<void> {
        this.mongoUrl = mongoUrl
        try {

            console.debug('connecting to mongo db...' + mongoUrl)
            mongoose.connect(mongoUrl, opts)


            mongoose.connection.on('connected', () => {
                console.info('Mongo: connected')
            })

            mongoose.connection.on('disconnected', () => {
                console.error('Mongo: disconnected')
            })

            mongoose.connection.on('error', (err) => {
                console.error(`Mongo:  ${String(err)}`)
                if (err.name === "MongoNetworkError") {
                    setTimeout(() => {
                        mongoose.connect(mongoUrl, opts).catch((errors) => { console.error(errors) })
                    }, 5000)
                }
            })
        } catch (err) {
            console.error(`db.open: ${err}`)
            throw err
        }
    }

    public async close(): Promise<void> {
        try {
            await mongoose.disconnect()
        } catch (err) {
            console.error(`db.open: ${err}`)
            throw err
        }
    }
}

export default MongoConnection.getInstance()
