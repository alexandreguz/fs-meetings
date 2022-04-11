import express from 'express';
import cors from 'cors'
import { meetingsRouter } from './controllers/meetings-controller.js';
import { teamsRouter } from './controllers/teams-controller.js';

const app = express()
app.use(express.json())
app.use(cors())


app.use("/api", teamsRouter)
app.use("/api", meetingsRouter)


app.listen(3001, () => {console.log("Listening to port 3001")})