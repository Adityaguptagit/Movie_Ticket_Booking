import { useState } from "react";
import "./selectMovie.css";

function SelectMovie({ setMovie, movie }) {
  const [allMovies, setAllMovies] = useState([
    "Suraj par mangal bhari",
    "Tenet",
    "The war with grandpa",
    "Come play",
  ]);

  return (
    <div className="w-full">
      <div className="font-bold mt-3 flex justify-center items-center">
        Movie Selected: {movie}
      </div>
      <div className="mt-3 m-main w-full h-full rounded-md border-2 lg:inline-flex lg:justify-center ">
        <div className="font-bold m-5 lg:text-xl">Select Movie</div>
        {allMovies.map((movie, i) => (
          <div
            key={i}
            className="flex-wrap lg:w-64 lg:mt-20 m-5 mo-1 bg-slate-100 h-12 flex justify-center items-center rounded-md font-bold"
            tabIndex={1}
            onClick={() => {
              setMovie(movie);
            }}
          >
            {movie}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SelectMovie;
