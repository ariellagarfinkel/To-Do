// import Calendar from "react-calendar";
import DatePicker from "react-date-picker";
import { useState } from "react";

function CalendarComponent() {
    const [value, onChange] = useState(new Date());

    return (
        <div>
            <DatePicker onChange={onChange} value ={value} />
        </div>
    )
}


export default CalendarComponent;
