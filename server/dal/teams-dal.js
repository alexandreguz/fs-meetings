import connection from '../db.js';

const getAll = async () => {


    // return "hello dal"


    let result = {
        success: false,
        data: null
    }
    try {
        let res  = await connection.promise().query(
            'SELECT * FROM teams' 
        )
        
        result.success = true
        result.data = res[0]

        return result
    } catch (err) {
        result.success = true
        result.data = err

        return result

    }
}

const addTeam = async (team_name) => {
    let result = {
        success: false,
        data: null
    }
    try {
        let res = await connection.promise().query(
            `insert into teams(team_name)
            Values
            ('${team_name}');`
        )

        result.success = true
        result.data = res[0]

        return result
    } catch (err) {
        result.success = false
        result.data = err

        return result
    }
}

export default {
    getAll,
    addTeam
}

