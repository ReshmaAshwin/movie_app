import MovieList from "./components/movieList/page.jsx";
import NavBar from "./components/navBar/page.jsx";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="sm:px-5 md:px-20 lg:px-20">
        <MovieList />
      </div>
    </>
  );
}
