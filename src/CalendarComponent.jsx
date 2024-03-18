import Calendar from "react-calendar";
import { useState } from "react";

function CalendarComponent() {
    const [value, onChange] = useState<Value>(new Date());

    return (
        <div>
            <Calendar onChange={onChange} value ={value} />
        </div>
    )
}


export default CalendarComponent;
