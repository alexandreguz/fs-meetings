import meetingsDal from "../dal/meetings-dal.js"

const getAll = async() => {
    return await meetingsDal.getAll()
}

const addMeetings = async (body) => {
    return await meetingsDal.addMeetings(
        body.team_id, body.begin, body.end, body.description, body.place,)
}

const getMeetingById = async (id) => {
    let meetings = await  meetingsDal.getAll()
    console.log(meetings)
    let meetingId = meetings.find(meeting => meeting.meeting_id === id)
    return meetingId 
  }

export {
    getAll,
    addMeetings,
    getMeetingById
}
