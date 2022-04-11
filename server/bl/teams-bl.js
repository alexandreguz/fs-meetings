import teamDal from "../dal/teams-dal.js"

const getAll = async() => {
    return await teamDal.getAll()
}

const addMeeting = async (body) => {

    return await teamDal.addMeeting()


    // return await aDal.addCustomer(
    //     body.email, body.firstName, body.lastName, body.phone, body.password, body.status_id)
}


export {
    getAll,
    addMeeting,
}

