import { useState } from "react"
import { Link } from "react-router-dom"


const AddMeeting = () => {


    const [newMeeting, setNewMeeting] = useState({
        team_id: '',
        begin: '',
        end: '',
        description: '',
        place: ''
    })

    const handleInputChange = (e, name) => {
        let inputValue = e.target.value
        let tempNewMeeeting = {
            ...newMeeting,
            [name]: inputValue
        }
        console.log(tempNewMeeeting)
        setNewMeeting(tempNewMeeeting)
    }

    const handleSubmit = e => {
        e.preventDefault()
        createMeeting()
    }

    const createMeeting = () => {
        let body = {
            ...newMeeting
        }
        fetch('http://localhost:3001/api/meetings',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            })
            .then(res => res.json())
            .then(data => {

                console.log('data')
                console.log(data)
            })
            .catch(err => {
                console.log('err')
                console.log(err)
            })
    }

    return (
        <div>
            <form >
                <h3>Create new meeting</h3>
                <label >Teams ID:</label>
                <br />
                <input
                    required
                    type="text"
                    onChange={(e) => handleInputChange(e, 'team_id')}
                    value={newMeeting.team_id}
                />
                <br />
                <label >Begin:</label>
                <br />
                <input type="date"
                    required
                    onChange={(e) => handleInputChange(e, 'begin')}
                    value={newMeeting.begin}
                />
                <br />
                <label >End:</label>
                <br />
                <input type="date"
                    required
                    onChange={(e) => handleInputChange(e, 'end')}
                    value={newMeeting.end}
                />
                <br />
                <label >Description:</label>
                <br/>
                <input type="text"
                    required
                    onChange={(e) => handleInputChange(e, 'description')}
                    value={newMeeting.description}
                />
                <br />
                <label >Place:</label>
                <br/>
                <input type="text"
                    required
                    onChange={(e) => handleInputChange(e, 'place')}
                    value={newMeeting.place}
                />
                <br/>
                <br/>
                <br/>


                <button onClick={handleSubmit}>Create</button>
            </form>

            <nav>
                <Link to="/">Back To Meetings</Link>
            </nav>


        </div>
    )
}

export default AddMeeting