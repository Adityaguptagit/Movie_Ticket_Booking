import "./selectTimeSlot.css";

function SelectTimeSlot({ setTimeSlot, timeSlot }) {
  return (
    <div className="w-full">
      <div className="font-bold  mt-3 flex justify-center items-center ">
        Time Selected: {timeSlot}
      </div>
      <div className="mt-3 t-main w-full h-full rounded-md border-2 lg:inline-flex lg:justify-center ">
        <div className="font-bold m-5 lg:text-xl">Select Timeslot</div>
        <div
          className="flex-wrap lg:w-64 lg:mt-20 m-5 t-1 bg-slate-100 h-12 flex justify-center items-center rounded-md font-bold"
          tabIndex={1}
          onClick={(event) => {
            setTimeSlot("10:00 AM");
          }}
        >
          10:00 AM
        </div>
        <div
          className="flex-wrap lg:w-64 lg:mt-20 m-5 t-2 bg-slate-100 h-12 flex justify-center items-center rounded-md font-bold"
          tabIndex={1}
          onClick={(event) => {
            setTimeSlot("01:00 PM");
          }}
        >
          01:00 PM
        </div>
        <div
          className="flex-wrap lg:w-64 lg:mt-20 m-5 t-3 bg-slate-100 h-12 flex justify-center items-center rounded-md font-bold"
          tabIndex={1}
          onClick={(event) => {
            setTimeSlot("03:00 PM");
          }}
        >
          03:00 PM
        </div>
        <div
          className="flex-wrap lg:w-64 lg:mt-20 m-5 t-4 bg-slate-100 h-12 flex justify-center items-center rounded-md font-bold"
          tabIndex={1}
          onClick={(event) => {
            setTimeSlot("08:00 PM");
          }}
        >
          08:00 PM
        </div>
      </div>
    </div>
  );
}

export default SelectTimeSlot;
