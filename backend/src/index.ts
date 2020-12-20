import db from './utils/db'
import { app } from './config/express'
import { PORT } from './config'
import { routes } from './routes/post.routes'


async function startup() {

    await db.open({})

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}.`);
    });

    app.get("/", (req, res) => {
        res.json({ message: `Welcome to facebook wall v.1.0 application. Time:  ${new Date()}` });
    });

    routes(app)

}

startup();
