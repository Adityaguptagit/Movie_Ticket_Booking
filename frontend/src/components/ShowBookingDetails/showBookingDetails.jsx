import { useEffect, useState } from "react";

const ShowBookingDetails = ({ booking, setBooking }) => {
  const [movie, setMovie] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [seats, setSeats] = useState({});

  const getBookingDetails = async () => {
    try {
      const data = await fetch("https://movie-ticket-booking-jrpi.onrender.com/api/booking");
      const jsonData = await data.json();

      const len = jsonData.length;
      const lastBookingDetail = jsonData.slice(len - 1);
      if (lastBookingDetail.length >= 1) {
        const { movie, timeSlot, seats } = lastBookingDetail[0];

        setMovie(movie);
        setTimeSlot(timeSlot);
        setSeats(seats);
      }
    } catch (error) {
      alert(error.message);
    }
    // console.log("aaa", seats.A1);
  };
  useEffect(() => {
    getBookingDetails();
    setBooking(false);
  }, [booking]);
  return (
    <div className="mt-3 lg:mt-12  m-main rounded-md p-4 border-2 lg:ml-3">
      <div className="flex justify-start items-center text-xl font-bold mb-2">
        Seats
      </div>
      <div className="flex justify-start items-center space-x-4 mb-4">
        {Object.keys(seats).map((seat) => (
          <div key={seat}>
            {seat}: {seats[seat]}
          </div>
        ))}
      </div>
      <div className="w-full ">
        <div className="flex justify-start items-center text-xl font-bold mb-2 ">
          Slot
        </div>
        <div className="flex justify-start items-center mb-4">{timeSlot}</div>
        <div className="flex justify-start items-center text-xl font-bold mb-2">
          Movie
        </div>
        <div className="flex justify-start items-center">{movie}</div>
      </div>
    </div>
  );
};

export default ShowBookingDetails;
