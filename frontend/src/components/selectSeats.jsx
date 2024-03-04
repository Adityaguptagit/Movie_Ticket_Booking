import "./SelectMovie/selectMovie.css";

function SelectSeats({ setSeats, seats }) {
  return (
    <div className="w-full">
      <div className="mt-3 rounded-md border-2 m-main">
        <p className="font-bold text-xl pl-6 pt-8">Select Seats</p>
        <div className="items-center lg:inline-flex lg:justify-center lg:flex-wrap">
          <div className="m-10 lg:flex-wrap flex-wrap lg:w-64 lg:mt-10  h-20 flex justify-center items-center rounded-md font-bold">
            <div className="mr-3">A1</div>
            <input
              type="number"
              className="w-20 h-16 rounded-md border-black border-2"
              onChange={(event) => {
                setSeats((prev) => ({
                  ...prev,
                  A1: parseInt(event.target.value),
                }));
              }}
              min="0"
              value={seats.A1}
            />
          </div>
          <div className="h-20  lg:flex-wrap flex-wrap lg:w-64 lg:mt-10 flex justify-center items-center rounded-md font-bold m-10">
            <div className="mr-3">A2</div>
            <input
              type="number"
              className="w-20 h-16 rounded-md border-black border-2"
              onChange={(event) => {
                setSeats((prev) => ({
                  ...prev,
                  A2: parseInt(event.target.value),
                }));
              }}
              min="0"
              value={seats.A2}
            />
          </div>
          <div className="h-20  lg:flex-wrap flex-wrap lg:w-64 lg:mt-10  flex justify-center items-center rounded-md font-bold m-10">
            <div className="mr-3">A3</div>
            <input
              type="number"
              className="w-20 h-16 rounded-md border-black border-2"
              onChange={(event) => {
                setSeats((prev) => ({
                  ...prev,
                  A3: parseInt(event.target.value),
                }));
              }}
              min="0"
              value={seats.A3}
            />
          </div>
          <div className="h-20 lg:flex-wrap flex-wrap lg:w-64 lg:mt-10 m-10 flex justify-center items-center rounded-md font-bold">
            <div className="mr-3">A4</div>
            <input
              type="number"
              className="w-20 h-16 rounded-md border-black border-2"
              onChange={(event) => {
                setSeats((prev) => ({
                  ...prev,
                  A4: parseInt(event.target.value),
                }));
              }}
              min="0"
              value={seats.A4}
            />
          </div>
          <div className="h-20 lg:flex-wrap flex-wrap lg:w-64 lg:mt-10 m-10 flex justify-center items-center rounded-md font-bold">
            <div className="mr-3">D1</div>
            <input
              type="number"
              className="w-20 h-16 rounded-md border-black border-2"
              onChange={(event) => {
                setSeats((prev) => ({
                  ...prev,
                  D1: parseInt(event.target.value),
                }));
              }}
              min="0"
              value={seats.D1}
            />
          </div>
          <div className="h-20 lg:flex-wrap flex-wrap lg:w-64 lg:mt-10  m-10 flex justify-center items-center rounded-md font-bold">
            <div className="mr-3">D2</div>
            <input
              type="number"
              className="w-20 h-16 rounded-md border-black border-2"
              onChange={(event) => {
                setSeats((prev) => ({
                  ...prev,
                  D2: parseInt(event.target.value),
                }));
              }}
              min="0"
              value={seats.D2}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectSeats;
