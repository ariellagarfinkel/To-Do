// import Calendar from "react-calendar";
import DatePicker from "react-date-picker";
import { useState } from "react";
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

function CalendarComponent() {
    const [value, onChange] = useState(new Date());
    return (
        <div className="container-container">
            <DatePicker onChange={onChange} 
                        value ={value}
                        calendarIcon={null}
                        clearIcong={null}
                        minDate={new Date()}
                        />
        </div>
    );
    };


export default CalendarComponent;
