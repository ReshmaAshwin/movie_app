"use client";
import Image from "next/image";
import LOGO from "../../images/movie.jpg";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { setIsLoggedIn } from "@/app/redux/movieSlicer";
import { useRouter } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
  const { isLogin } = useSelector((state) => state.movie);
  const data = useSelector((state=> state))
  const dispatch = useDispatch();
  const router = useRouter();
  
  const handleLogout = () =>{
    dispatch(setIsLoggedIn(false))
    router.push("/")
  }

  console.log(data,"isLogin")

  return (
    <div className="bg-[#000000] h-[100px] text-white flex justify-between align-middle px-14">
      <div className=" flex justify-center gap-1  items-center h-full">
        <div className="w-[40px] h-[40px] ">
          <Image className="rounded-full" src={LOGO} alt="Logo" />
        </div>
        <div className="font-mono">Movie Bazzar</div>
      </div>
      <div className="hidden md:flex">
        <ul className="font-mono flex justify-center text-[18px]  items-center h-full gap-6">
          <li className="cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-blue-500 hover:pb-2">
            Home
          </li>
          <li className="cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-blue-500 hover:pb-2">
            Movies
          </li>
          <li className="cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-blue-500 hover:pb-2">
            Tv Shows
          </li>
          <li className="cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-blue-500 hover:pb-2">
            Upcoming
          </li>
        </ul>
      </div>
      {!isLogin ? (
        <div className="md:flex justify-center text-[16px] hidden   items-center h-full gap-4">
          <Link href={"/login"}>
            <button className="bg-blue-500 p-2 rounded-full w-[100px]">
              Login
            </button>
          </Link>
          <button
            onClick={() => dispatch(setIsLoggedIn(false))}
            className="bg-[#fd5c63] p-2 rounded-full w-[100px]"
          >
            Sign up
          </button>
        </div>
      ) : (
        <div className="flex justify-center text-[16px]  items-center h-full gap-4">
        
          <p className="h-full flex justify-center items-center">
            Welcome User
          </p>

          <button
            onClick={() => handleLogout()}
            className="bg-[#fd5c63] p-2 rounded-full w-[100px]"
          >
            Logout
          </button>
        </div>
      )}
      <div className="h-full flex md:hidden justify-center items-center">
      <GiHamburgerMenu size={20}/>
      </div>
    </div>
  );
};

export default NavBar;
