import { useState } from "react";
import "./App.css";
import SelectMovie from "./components/SelectMovie/selectMovie";
import SelectTimeSlot from "./components/SelectTimeSlot/selectTimeSlot";
import SelectSeats from "./components/selectSeats";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ShowBookingDetails from "./components/ShowBookingDetails/showBookingDetails";
function App() {
  const [movie, setMovie] = useState("None");
  const [timeSlot, setTimeSlot] = useState("None");
  const [seats, setSeats] = useState({
    A1: 0,
    A2: 0,
    A3: 0,
    A4: 0,
    D1: 0,
    D2: 0,
  });

  const [booking, setBooking] = useState(false);

  const bookMovie = async () => {
    //Validation Check

    if (movie === "None") {
      toast("Please select movie!");
      return;
    } else if (timeSlot === "None") {
      toast("Please select time!");
      return;
    } else if (
      seats.A1 === 0 &&
      seats.A2 === 0 &&
      seats.A3 === 0 &&
      seats.A4 === 0 &&
      seats.D1 === 0 &&
      seats.D2 === 0
    ) {
      toast("Please select seats!");
      return;
    }

    const booking = { movie, timeSlot, seats };
    const res = await fetch("https://movie-ticket-booking-jrpi.onrender.com/api/booking", {
      method: "POST",
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // default, no-cache, reload, force-cache, only-if-cached
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(booking),
    });
    let resJson = await res.json();
    if (resJson) {
      toast.success("Ticket Booked!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      setMovie("None");
      setTimeSlot("None");
      setSeats({ A1: 0, A2: 0, A3: 0, A4: 0, D1: 0, D2: 0 });
      setBooking(true);
    }
  };

  return (
    <div>
      <div className="h-full flex max-lg:flex-col items-start justify-center">
        <div className=" w-full xl:w-8/12">
          <SelectMovie setMovie={setMovie} movie={movie} />
          <SelectTimeSlot setTimeSlot={setTimeSlot} timeSlot={timeSlot} />
          <SelectSeats setSeats={setSeats} seats={seats} />
        </div>
        <div className="w-full xl:w-4/12">
          <ShowBookingDetails booking={booking} setBooking={setBooking} />
        </div>
      </div>
      {/* Booking Button */}
      <div className=" text-center my-4">
        <button
          type="button"
          className="bu w-24 h-11 rounded-lg font-semibold hover:border-none border-2 border-black"
          onClick={bookMovie}
        >
          Book Now
        </button>
      </div>
    </div>
  );
}

export default App;
