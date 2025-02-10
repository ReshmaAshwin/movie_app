"use client";
import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";

import { fetchMovie } from "../../redux/movieSlicer";
import { getYear } from "../../utils/utils";
import LoadingSpinner from "../spinner/page";
import Link from "next/link";

const MovieList = () => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();
  const data = useSelector((state) => state);

  // Reset movie list and page count when the query changes
  useEffect(() => {
    setMovies([]);
    setPage(1);
    if (!query.trim()) {
      setHasMore(false);
    } 
    
    else {
      setHasMore(true);
    } // Reset hasMore flag in case of a new search query
  }, [query]);

  // Handle when movies are fetched and update combined list
  useEffect(() => {
    if (data.movie.data?.results) {
      setMovies((prevMovies) => [...prevMovies, ...data.movie.data.results]);
    }
  }, [data.movie.data?.results]);

  const handleScroll = () => {
    const bottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 10;
    if (bottom && !loading && hasMore) {
      setPage((prev) => prev + 1);
    }
  };

  // Debounce logic to trigger API call after 1 second of inactivity
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!query.trim()) return;
      setLoading(true);
      dispatch(fetchMovie({ query: query, page: page })).then(() =>
        setLoading(false)
      );
    }, 1000);

    return () => clearTimeout(timer);
  }, [query, page]);

  // Check if there are more movies to load based on the response
  useEffect(() => {
    if (data.movie.data?.results?.length < 20) {
      setHasMore(false);
    }
  }, [data.movie.data?.results]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, hasMore, page]);

  

  return (
    <div className="min-h-screen">
      <div className="App">
        <form className="mt-5">
          <div className="flex justify-center align-middle">
            <div
              className="border flex justify-between bg-white align-middle border-[#adabab] px-4 py-2
             rounded-full  md:w-1/2 sm:w-4/3"
            >
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for a movie"
                className="border-none w-full outline-none"
              />
              <IoIosSearch className="" size={25} color="gray" />
            </div>
          </div>
        </form>

        {loading && <p className="text-center">Loading...</p>}
        {data.movie.error && (
          <p className="text-center mt-2" style={{ color: "red" }}>
            {"Something Went wrong"}
          </p>
        )}

        <div className="flex justify-center align-middle mt-3">
          {movies.length > 0 ? (
            <ul className="flex flex-wrap justify-center gap-5">
              {movies.map((movie) => (
                <li
                  className="mb-2 md:w-[300px] lg:w-[200px]  w-[250px] p-2 gap-6 shadow-md transform transition-all hover:scale-105"
                  key={movie.id}
                >
                  <Link href={`movie/${movie.id}`}>
                  <div className="h-[300px] flex justify-center align-middle">
                    <img
                      className="w-full"
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.title}
                      width={100}
                    />
                  </div>
                
                  <h3 className="text-[20px] font-bold mt-2 truncate hover:underline">
                    {movie.title}
                  </h3>

                  <p className="text-[14px] text-[#858383]">
                    ({getYear(movie.release_date)})
                  </p>
                  {
                    movie.overview ? (<p className=" text-[12px] line-clamp-3">{movie.overview}</p>) : <p className="text-[12px]"> No description available</p>
                  }
                </Link>
                  
                </li>

              ))}
            </ul>
          ) : (
            <p className="text-center">No movies to display.</p>
          )}
        </div>
        {(hasMore && !data.movie.error) && (
          <div className="mt-4 mb-4">
            <LoadingSpinner />
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieList;
