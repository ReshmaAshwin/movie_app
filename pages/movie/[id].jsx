import Footer from "@/app/components/footer/page";
import MovieDetails from "@/app/components/movieDetails/page";
import NavBar from "@/app/components/navBar/page";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Movie = () => {
  const pathName = usePathname();
  const [movieId, setMovieId] = useState(null);

  useEffect(() => {
    if (pathName) {
      const urlArray = pathName.split("/");
      const movId = urlArray[2];
      setMovieId(Number(movId));
    }
  }, [pathName]);

  if (movieId === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className=" h-screen bg-black">
      <NavBar />
      <MovieDetails id={movieId} />
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <Footer />
    </div>
  );
};

export default Movie;
