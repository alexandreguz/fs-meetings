import express from 'express';
import {getAll} from '../bl/teams-bl.js'

const teamsRouter = express.Router();

teamsRouter.get("/teams", async (req, res) => {
    let result = await getAll();

    // if (!result.success) {
    //     res.status(500).send(result)
    // } else {
        res.send(result)
    // }
});

teamsRouter.post('/teams', async (req, res) => {
    let result = await addMeetings(req.body);
    
    if (!result.success) {
        res.status(500).send(result)
    } else {
        result.data = {
            ...req.body,
            id: result.data.insertId
        }
        res.send(result)
    }
});

export {
    teamsRouter
}

