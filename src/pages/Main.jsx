import { useState } from "react";
import moment from "moment/moment";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom"

const Main = () => {
    let t = new Date().toLocaleTimeString();
    let d = new Date().toLocaleDateString();

    const [time, setTime] = useState(t);
    const [date, setDate] = useState(d);
    const weekday = moment().format('dddd');
    
    const updateT = () => {
        t = new Date().toLocaleTimeString();
        setTime(t);
    }
    setInterval(updateT, 1000);

    const updateD = () => {
        d = new Date().toLocaleDateString();
        setDate (d);
    }
    setInterval(updateD, 1000);


    return (
        <>
            <div class = "d-flex flex-column min-vh-100 justify-content-center align-items-center">
                <h1 className="text-muted">{date} {weekday}</h1>
                <h1 className="text-muted">{time}</h1>
                <Button variant= "secondary">
                    <Link to = "/Hello" class = "text-light">
                        Direction
                    </Link>
                </Button>
            </div>
        </>
    );
}
export default Main
