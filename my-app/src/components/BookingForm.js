import React,{useState} from "react";
import "../styles/Booking.css";
const BookingForm = (props) => {
    const [date, setDate] = useState("");
    const [times, setTimes] = useState("");
    const [guest, setGuest] = useState("");
    const [occasion, setOccasion] = useState("");
    const handleSubmit = (e) => {
        
    }
    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
    }
    return(
        <header>
            <section>
                <form  onSubmit={handleSubmit} className="form" >
                    <fieldset>
                        <div>
                            <label htmlFor="book-date">Choose Date</label>
                            <input id="book-date" value={date} onChange={(e) => handleChange(e.target.value)} type="date" required />
                        </div>
                        <div>
                            <label htmlFor="book-time">Choose Time</label>
                            <select id="book-time" value={times} onChange={(e) => setTimes(e.target.value)} required>
                                <option value="">Select a Time</option>
                                {
                                    props.availableTimes.availableTimes.map(availableTimes =>{return  <option key={availableTimes}>{availableTimes}</option>})                                     
                                }
                            </select>
                        </div>
                        <div>
                            <label htmlFor="book-guest">Number of Guests</label>
                            <input id="book-guest" value={guest} min='2' onChange={(e) => setGuest(e.target.value)} type="number" required />
                        </div>
                        <div>
                            <label htmlFor="book-occasion">Occasion</label>
                            <select id="book-occasion" key={occasion} value={occasion} onChange={(e) => setOccasion(e.target.value)} >
                                <option >Select an Occasion</option>
                                <option >Birthday</option>
                                <option >Anniversary</option>
                                <option >Business</option>
                                <option >Other</option>
                            </select>
                        </div>
                        <div>
                            <input aria-label="On Click" type="submit" className="formbtn" value={"Make Your Reservation"} />
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
    )
}
export default BookingForm;