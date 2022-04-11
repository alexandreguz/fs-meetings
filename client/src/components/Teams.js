import { useEffect, useState } from "react"




const Teams = () => {

    const [teams, setTeams] = useState([])
    const [selectedTeams, setSelectedTeams] = useState(-1)



    useEffect(() => {
        fetch('http://localhost:3001/api/teams')
            .then(res => res.json())
            .then(data => {
                console.log(data.data)
                setTeams(data.data)
            })
    }, [])




    return (
        <div>
            <label for="teams">Choose a team:</label>

            <select value={selectedTeams}
                onChange={(e) => {
                    console.log(e.target.value)
                    setSelectedTeams(e.target.value)
                }}
            >
                {
                    teams.length > 0 &&
                    teams.map(t => {
                        return (
                            <option value={t.team_id}>{t.team_name}</option>
                        )
                    })
                }

                

            </select>





        </div>
    )
}

export default Teams