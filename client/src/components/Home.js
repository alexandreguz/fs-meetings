import { Link } from "react-router-dom";
import Teams from "./Teams";
import ShowMeetings from "./ShowMeetings";

const Home =() => {
    return (
        <div>
            <main>
            <Teams />
                <p></p>
            <ShowMeetings />
            </main>
            <nav>
                <Link to="/addmeeting">Add Meeting</Link>
            </nav>

        </div>
    )
}

export default Home