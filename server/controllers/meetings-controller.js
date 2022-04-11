import express from 'express';
import {getAll, addMeetings} from '../bl/meetings-bl.js'

const meetingsRouter = express.Router();

meetingsRouter.get("/meetings", async (req, res) => {
    let result = await getAll();
        res.send(result)
    
});

meetingsRouter.post('/meetings', async (req, res) => {
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
    meetingsRouter
}

