import { useEffect, useState } from "react"


const ShowMeetings = () => {

    const [meetings, setMeetings] = useState([])


    useEffect(() => {
        fetch('http://localhost:3001/api/meetings')
            .then(res => res.json())
            .then(data => {
                console.log(data.data)
                setMeetings(data.data)
            })
    }, [])
  
    return (


        <div
            style={{
                display: 'flex',
                width: '70vw',
                justifyContent: 'space-between',
                alignContent: 'space-between',
                flexFlow: 'row wrap',
                margin: 'auto'
            }}
        >
            {
                meetings.length > 0 &&
                meetings.map((meeting) => {
                    return (
                        <div
                            key={`meeting-item-${meeting.meeting_id}`}
                            style={{
                                background: 'gray',
                                height: 80,
                                width: 80,
                                margin: 3
                            }}
                        >
                            <h3>{meeting.meeting_id}</h3>
                        </div>
                    )
                })
            }
        </div>



    )
}

export default ShowMeetings