import Footer from "./components/footer/page.jsx";
import MovieList from "./components/movieList/page.jsx";
import NavBar from "./components/navBar/page.jsx";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-white  to-[#f0ce97] ...">
      <NavBar />
      <div className="sm:px-10 md:px-20 lg:px-20">
        <MovieList />
      </div>
      <Footer />
    </div>
  );
}
