import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovieDetails } from "@/app/redux/movieDetailsSlicer";
import { convertMinutesToHours, getYear } from "@/app/utils/utils";

const MovieDetails = ({ id }) => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.movieDetails);

  useEffect(() => {
    dispatch(fetchMovieDetails(id));
  }, [id, dispatch]);

  const duration = convertMinutesToHours(data?.runtime);

  return (
    <div className="flex gap-6 justify-center  flex-col md:flex-row p-8 mb-6">
      <div className="h-auto w-auto flex flex-1 justify-center shadow-xl shadow-gray-700 bg-black p-4">
        <img
          className=""
          src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`}
          alt={data?.title}
          height={300}
          width={400}
        />
      </div>
      <div className=" flex flex-1 flex-col ps-4">
        <h3 className="md:text-[38px] text-[28px] underline ">{data?.title}</h3>
        <div className="mt-3 text-[10px] md:text-[12px] flex gap-6 items-center">
          <p>{getYear(data?.release_date)}</p>
          <div className="h-[10px] w-[10px] bg-red-700 rounded-full"></div>
          <p>
            {data?.genres.map((item, index) => {
              console.log(item[index] === data.genres.length - 1);
              return (
                <span key={index}>
                  {item.name} {index === data.genres.length - 1 ? "" : ","}{" "}
                </span>
              );
            })}{" "}
          </p>
          <div className="h-[10px] w-[10px] bg-red-700 rounded-full"></div>
          <div>
            Duration: {`${duration.hours} hours ${duration.minutes} minutes`}
          </div>
        </div>
        <div className="mt-4">{data?.overview}</div>
        <div className="mt-10 flex gap-4">
          <div className="flex justify-center items-center">
            <img
              className=""
              src={`https://image.tmdb.org/t/p/w500${data?.backdrop_path}`}
              alt={data?.title}
              height={300}
              width={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
