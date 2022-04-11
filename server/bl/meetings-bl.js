import meetingsDal from "../dal/meetings-dal.js"

const getAll = async() => {
    return await meetingsDal.getAll()
}

const addMeetings = async (body) => {

    return await meetingsDal.addMeetings(
        body.team_id, body.begin, body.end, body.description, body.place,)
}


export {
    getAll,
    addMeetings,
}
